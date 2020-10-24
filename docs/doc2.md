---
id: doc2
title: Type Definition
---

```typescript
export type Task = {
  id: number
  label: string
  done: boolean
}

export type Methods = {
  get: {
    resBody: Task[]
  }
}
```
