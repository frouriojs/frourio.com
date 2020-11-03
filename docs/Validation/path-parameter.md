---
id: path-parameter
title: Path parameter
---

Path parameter can be specified as string or number type after `@`.  
(Default is string)  
Path parameter of number is automatically validated.

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
