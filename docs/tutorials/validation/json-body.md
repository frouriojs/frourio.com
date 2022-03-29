---
id: json-body
title: JSON body
---

If no reqFormat is specified, reqBody is parsed as `application/json`.

```ts title="server/api/tasks/index.ts"
import { Task } from '$/types'

export type Methods = {
  post: {
    reqBody: Pick<Task, 'label'>
    resBody: Task
  }
}
```

```ts title="server/api/tasks/controller.ts"
import { defineController } from './$relay'
import { createTask } from '$/service/tasks'

export default defineController(() => ({
  post: async ({ body }) => {
    const task = await createTask(body.label)

    return { status: 201, body: task }
  }
}))
```

Results

```sh
$ curl -X POST -H "Content-Type: application/json" -d '{"label":"sample task3"}' http://localhost:8080/api/tasks
{"id":3,"label":"sample task 3","done":false}

$ curl -X POST -H "Content-Type: application/json" -d '{Invalid JSON}' http://localhost:8080/api/tasks -i
HTTP/1.1 400 Bad Request
```
