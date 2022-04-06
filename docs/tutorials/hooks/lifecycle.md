---
id: lifecycle
title: Hooks types and lifecycle
---

Fastify-like Hooks are redefined in frourio for both Fastify and Express.

- `onRequest`
- `preParsing`
- `preValidation`
- `preHandler`

They will be hooked along the following lifecycle.

Proceed by calling `done` (Fastify) / `next` (Express), which can be taken as the third argument.  
\* Except Fastify when using async / await

```text
Incoming Request
  │
  └─▶ Routing
        │
  404 ◀─┴─▶ onRequest Hook
              │
    4**/5** ◀─┴─▶ preParsing Hook
                    │
          4**/5** ◀─┴─▶ Parsing
                          │
                4**/5** ◀─┴─▶ preValidation Hook
                                │
                      4**/5** ◀─┴─▶ Validation
                                      │
                                400 ◀─┴─▶ preHandler Hook
                                            │
                                  4**/5** ◀─┴─▶ User Handler
                                                  │
                                        4**/5** ◀─┴─▶ Outgoing Response
```
