---
id: doc1
title: Introduction
sidebar_label: Introduction
---

## Why frourio?

Even if you write both the front and server in TypeScript, you can't statically type-check the API's sparsity.

We are always forced to write "Two TypeScript".  
We waste a lot of time on dynamic testing using the browser and Docker.

Frourio is a framework for developing web apps quickly and safely in "One TypeScript".

![Why frourio?](https://frouriojs.github.io/frourio/assets/images/problem.png 'Why frourio?')

## Architecture

In order to develop in "One TypeScript", `frourio` and `aspida` need to cooperate with each other.  
You can use `create-frourio-app` to make sure you don't fail in building your environment.

You can choose between Next.js or Nuxt.js for the front framework.  
Frourio is based on Express.js, so it's not difficult.

TypeORM setup is also completed automatically, so there is no failure in connecting to the DB.

Once the REST API endpoint interface is defined, the server controller implementation is examined by the type.  
The front is checked by the type to see if it is making an API request as defined in the interface.

[aspida: TypeScript friendly HTTP client wrapper for the browser and node.js.](https://github.com/aspidajs/aspida)

![Architecture](https://frouriojs.github.io/frourio/assets/images/architecture.png 'Architecture')

## Installation

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since [npm](https://www.npmjs.com/get-npm) `5.2.0`)

```bash
npx create-frourio-app <my-project>
```

Or starting with npm v6.1 you can do:

```bash
npm init frourio-app <my-project>
```

Or with [yarn](https://yarnpkg.com/en/):

```bash
yarn create frourio-app <my-project>
```

## Environment

Frourio requires TypeScript 3.9 or higher.  
If the TypeScript version of VSCode is low, an error is displayed during development.

---

## Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

---

## Code

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::
