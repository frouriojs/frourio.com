---
id: performance
title: Improve Performance
---

When exporting the responseSchema from the controller, [fast-json-stringify](https://github.com/fastify/fast-json-stringify) is enabled and JSON response becomes fast.

```ts title="server/api/tasks/_taskId@number/controller.ts"
import { defineResponseSchema, defineController } from './$relay';
import { findTask } from '$/service/tasks';

export const responseSchema = defineResponseSchema(() => ({
  get: {
    200: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
        },
        label: {
          type: 'string',
        },
        done: {
          type: 'boolean',
        },
      },
    },
  },
}));

export default defineController(() => ({
  get: async ({ params }) => {
    const task = await findTask(params.taskId);

    return task ? { status: 200, body: task } : { status: 404 };
  },
}));
```
