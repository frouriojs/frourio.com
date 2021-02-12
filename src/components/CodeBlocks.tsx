import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styles from '../pages/styles.module.css'
// import theme from "prism-react-renderer/themes/nightOwl"

const codeList = [
  {
    language: 'typescript' as const,
    title: 'API type definition on server/api/users/index.ts',
    code: `
export type Methods = {
  get: {
    resBody: {
      id: number
      name: string
    }
  }
}`
  },
  {
    language: 'typescript' as const,
    title: 'Backend: fix type error on server/api/users/controller.ts',
    code: `
import { defineController } from './$relay'

export default defineController(() => ({
  get: () => ({
    status: 200,
    body: { id: 0, name: 'mario' }
  })
}))`
  },
  {
    language: 'tsx' as const,
    title: 'Frontend: request from pages/index.tsx',
    code: `
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'

const Home = () => {
  const { data: user } = useAspidaSWR(apiClient.users)
  return <div>{user.name}</div>
}

export default Home`
  }
]

const CodeBlocks = () => (
  <div className={styles.codeBlockWrapper}>
    {codeList.map((data) => (
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
