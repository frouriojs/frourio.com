import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styles from '../pages/styles.module.css'
// import theme from "prism-react-renderer/themes/nightOwl"

const codeDataList = [
  {
    language: 'typescript' as const,
    title: 'API type definition on hoge/index.ts',
    code: `
(function sampleCode() {
  coming soon
})();
return () => <Sample />;`
  },
  {
    language: 'tsx' as const,
    title: 'Backend: fix type error on hoge/controller.ts',
    code: `
(function sampleCode() {
  coming soon
})();
return () => <Sample />;`
  },
  {
    language: 'tsx' as const,
    title: 'Frontend: request from pages/index.tsx',
    code: `
(function sampleCode() {
  coming soon
})();
return () => <Sample />;`
  }
]

const CodeBlocks = () => (
  <div className={styles.codeBlockWrapper}>
    {codeDataList.map((data) => (
      <div key={data.title} className={styles.codeBlock}>
        <p className={styles.codeBlockTitle}>{data.title}</p>
        <Highlight
          {...defaultProps}
          code={data.code.trim()}
          language={data.language}
        >
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
    ))}
  </div>
)

export default CodeBlocks
