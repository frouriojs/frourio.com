---
id: dependency-injection
title: 依存性の注入
---

Frourio では依存性の注入に [frouriojs/velona](https://github.com/frouriojs/velona) を使用します。

```ts title="server/api/tasks/index.ts"
import { Task } from '$/types';

export type Methods = {
  get: {
    query?: {
      limit?: number;
      message?: string;
    };

    resBody: Task[];
  };
};
```

```ts title="server/service/tasks.ts"
import { PrismaClient } from '@prisma/client';
import { depend } from 'velona'; // dependency of frourio
import { Task } from '$/types';

const prisma = new PrismaClient();

export const getTasks = depend(
  { prisma: prisma as { task: { findMany(): Promise<Task[]> } } }, // inject prisma
  async (
    { prisma },
    limit?: number // prisma is injected object
  ) => (await prisma.task.findMany()).slice(0, limit)
);
```

```ts title="server/api/tasks/controller.ts"
import { defineController } from './$relay';
import { getTasks } from '$/service/tasks';

const print = (text: string) => console.log(text);

export default defineController(
  { getTasks, print }, // inject functions
  ({ getTasks, print }) => ({
    // getTasks and print are injected function
    get: async ({ query }) => {
      if (query?.message) print(query.message);

      return { status: 200, body: await getTasks(query?.limit) };
    },
  })
);
```

```ts title="server/test/server.test.ts"
import controller from '$/api/tasks/controller';

test('dependency injection into controller', async () => {
  let printedMessage = '';

  const injectedController = controller.inject((deps) => ({
    getTasks: deps.getTasks.inject({
      prisma: {
        task: {
          findMany: () =>
            Promise.resolve([
              { id: 0, label: 'task1', done: false },
              { id: 1, label: 'task2', done: false },
              { id: 2, label: 'task3', done: true },
              { id: 3, label: 'task4', done: true },
              { id: 4, label: 'task5', done: false },
            ]),
        },
      },
    }),
    print: (text: string) => {
      printedMessage = text;
    },
  }))();

  const limit = 3;
  const message = 'test message';
  const res = await injectedController.get({
    query: { limit, message },
  });

  expect(res.body).toHaveLength(limit);
  expect(printedMessage).toBe(message);
});
```

Results

```sh
$ npm test

PASS server/test/server.test.ts
  ✓ dependency injection into controller (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.67 s, estimated 8 s
Ran all test suites.
```
