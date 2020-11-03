---
id: lifecycle
title: Lifecycle of hooks
---

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
