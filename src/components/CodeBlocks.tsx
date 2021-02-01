import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styles from '../pages/styles.module.css'
// import theme from "prism-react-renderer/themes/nightOwl"

const apiTypeDefinition = `
  (function sampleCode() {
    coming soon
  })();
  return () => <Sample />;
`.trim()

const backend = `
  (function sampleCode() {
    coming soon
  })();
  return () => <Sample />;
`.trim()

const frontend = `
  (function sampleCode() {
    coming soon
  })();
  return () => <Sample />;
`.trim()

const CodeBlocks = () => (
  <div className={styles.codeBlockWrapper}>
    <div className={styles.codeBlock}>
      <p className={styles.codeBlockTitle}>
        API type definition on hoge/index.ts
      </p>
      <Highlight {...defaultProps} code={apiTypeDefinition} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>

    <div className={styles.codeBlock}>
      <p className={styles.codeBlockTitle}>
        Backend: fix type error on hoge/controller.ts
      </p>
      <Highlight {...defaultProps} code={backend} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>

    <div className={styles.codeBlock}>
      <p className={styles.codeBlockTitle}>
        Frontend: request from pages/index.tsx
      </p>
      <Highlight {...defaultProps} code={frontend} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  </div>
)

export default CodeBlocks
