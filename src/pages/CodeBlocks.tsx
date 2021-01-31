import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styles from './styles.module.css'
// import theme from "prism-react-renderer/themes/nightOwl";

const apiTypeDefinition = `
  (function someDemo() {
    var test = "Hello World!";
    console.log(test);
  })();
  return () => <App />;
`.trim();

const backend = `
  (function someDemo() {
    var test = "Hello World!";
    console.log(test);
  })();
  return () => <Backend code />;
`.trim();

const frontend = `
  (function someDemo() {
    var test = "Hello World!";
    console.log(test);
  })();
  return () => <Frontend />;
`.trim();

const CodeBlocks = () => (
  <div className={styles.codeBlockWrapper}>
    <div className={styles.codeBlock}>
      <p className={styles.codeBlockTitle}>API type definition on hoge/index.ts</p>
      <Highlight {...defaultProps} code={apiTypeDefinition} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>

    <div className={styles.codeBlock}>
      <p className={styles.codeBlockTitle}>Backend: fix type error on hoge/controller.ts</p>
      <Highlight {...defaultProps} code={backend} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>

    <div className={styles.codeBlock}>
      <p className={styles.codeBlockTitle}>Frontend: request from pages/index.tsx</p>
      <Highlight {...defaultProps} code={frontend} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  </div>

);

export default CodeBlocks
