---
id: path-parameter
title: Path parameter
---

As a path parameter validation, the path parameter can be specified with `@string` or `@number` after them.  
If it is `@number`, it will be automatically validated.

If it is not specified, the path variable is **`string`**.

:::caution
The default type of path parameter in **aspida** is `number | string`, but in **frourio** it is `string`.
:::

```ts title="server/api/tasks/_taskId@number/index.ts"
import { Task } from '$/types'

export type Methods = {
  get: {
    resBody: Task
  }
}
```

```ts title="server/api/tasks/_taskId@number/controller.ts"
import { defineController } from './$relay'
import { findTask } from '$/service/tasks'

export default defineController(() => ({
  get: async ({ params }) => {
    const task = await findTask(params.taskId)

    return task ? { status: 200, body: task } : { status: 404 }
  }
}))
```

Results

```sh
$ curl http://localhost:8080/api/tasks
[{"id":0,"label":"sample task","done":false}]

$ curl http://localhost:8080/api/tasks/0
{"id":0,"label":"sample task","done":false}

$ curl http://localhost:8080/api/tasks/1 -i
HTTP/1.1 404 Not Found

$ curl http://localhost:8080/api/tasks/abc -i
HTTP/1.1 400 Bad Request
```

### Why string ?

Since everything comes as `string` to the server, it is only in `string` to prevent information degradation.

| aspida  | -> string ->  | frourio         |
| :-:     | :-:           | :-:             |
| `'a'`   | -> `'a'` ->   | `'a'`           |
| `'1'`   | -> `'1'` ->   | `1` ? `'1'` ?   |
| `1`     | -> `'1'` ->   | `1` ? `'1'` ?   |
| `'1.0'` | -> `'1.0'` -> | `1` ? `'1.0'` ? |
