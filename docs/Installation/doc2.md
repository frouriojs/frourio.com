---
id: doc2
title: Type Definition
---

```ts title="/src/components/HelloCodeTitle.js"
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
