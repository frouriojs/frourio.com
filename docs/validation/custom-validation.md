---
id: custom-validation
title: Custom validation
---

Query, reqHeaders and reqBody are validated by specifying Class with [class-validator](https://github.com/typestack/class-validator).  
The class needs to be exported from `server/validators/index.ts`.

```ts title="server/validators/index.ts"
import { MinLength, IsString } from 'class-validator'

export class LoginBody {
  @MinLength(5)
  id: string

  @MinLength(8)
  pass: string
}

export class TokenHeader {
  @IsString()
  @MinLength(10)
  token: string
}
```

```ts title="server/api/token/index.ts"
import { LoginBody, TokenHeader } from '$/validators'

export type Methods = {
  post: {
    reqBody: LoginBody
    resBody: {
      token: string
    }
  }

  delete: {
    reqHeaders: TokenHeader
  }
}
```

Results

```sh
$ curl -X POST -H "Content-Type: application/json" -d '{"id":"correctId","pass":"correctPass"}' http://localhost:8080/api/token
{"token":"XXXXXXXXXX"}

$ curl -X POST -H "Content-Type: application/json" -d '{"id":"abc","pass":"12345"}' http://localhost:8080/api/token -i
HTTP/1.1 400 Bad Request

$ curl -X POST -H "Content-Type: application/json" -d '{"id":"incorrectId","pass":"incorrectPass"}' http://localhost:8080/api/token -i
HTTP/1.1 401 Unauthorized
```

Passing options (>= v0.20.0)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="fastify"
  values={[
    { label: 'fastify', value: 'fastify' },
    { label: 'express', value: 'express' },
  ]
}>
<TabItem value="fastify">

```ts title="server/index.ts"
import Fastify from 'fastify'
import server from './$server'

const fastify = Fastify()

server(fastify, { basePath: '/api/v1', validator: { whitelist: true } })
fastify.listen(3000)
```

</TabItem>
<TabItem value="express">

```ts title="server/index.ts"
import express from 'express'
import server from './$server'

const app = express()

server(app, { basePath: '/api/v1', validator: { whitelist: true } })
app.listen(3000)
```

</TabItem>
</Tabs>

[class-validator options](https://github.com/typestack/class-validator#passing-options)
