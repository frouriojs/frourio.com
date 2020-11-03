---
id: url-query
title: URL query
---

Properties of `number` or `number[]` are automatically validated.

```ts title="server/api/tasks/index.ts"
import { Task } from '$/types'

export type Methods = {
  get: {
    query?: {
      limit: number
    }
    resBody: Task[]
  }
}
```

```ts title="server/api/tasks/controller.ts"
import { defineController } from './$relay'
import { getTasks } from '$/service/tasks'

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: (await getTasks()).slice(0, query?.limit)
  })
}))
```

Results

```sh
$ curl http://localhost:8080/api/tasks
[{"id":0,"label":"sample task 0","done":false},{"id":1,"label":"sample task 1","done":false},{"id":1,"label":"sample task 2","done":false}]

$ curl http://localhost:8080/api/tasks?limit=1
[{"id":0,"label":"sample task 0","done":false}]

$ curl http://localhost:8080/api/tasks?limit=abc -i
HTTP/1.1 400 Bad Request
```
