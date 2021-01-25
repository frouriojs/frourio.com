import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from './changelog.module.css';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

interface Release {
  url: string;
  html_url: string;
  id: string;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
}

interface ReleaseProps {
  release: Release;
}

const Release: React.FC<ReleaseProps> = (props) => {
  return (
    <article className={styles.release}>
      <div className={styles.leftBox}>
        <h2 className={styles.version}>
          <Link href={props.release.html_url}>
            {props.release.name}
          </Link>
        </h2>
        <span className={styles.date}>
          {moment(props.release.created_at).format("YYYY.MM.DD")}
        </span>
      </div>
      <ReactMarkdown className={styles.rightBox} children={props.release.body} />
    </article>
  )
}

const Changelog = () => {
  const [ frourioReleases, setFrourioReleases ] = useState<Release[]>([])
  const [ cfaReleases, setCfaReleases ] = useState<Release[]>([])

  useEffect(() => {
    const _f = async () => {
      const res = await axios.get<Release[]>("https://api.github.com/repos/frouriojs/frourio/releases?per_page=100");
      setFrourioReleases(res.data)
    }
    _f()
  }, [setFrourioReleases])
  
  useEffect(() => {
    const _f = async () => {
      const res = await axios.get<Release[]>("https://api.github.com/repos/frouriojs/create-frourio-app/releases");
      setCfaReleases(res.data)
    }
    _f()
  }, [setCfaReleases])

  return (
    <Layout
      title="Changelog"
      description="Changelog of frourio and create-frourio-app"
    >
      <main className={clsx("container", styles.main)}>
        <h1 className={styles.title}>Changelog</h1>
        <p>
          Release list of frourio and create-frourio-app.
        </p>
        <p>
          See all releases on GitHub:{" "}
          <Link href="https://github.com/frouriojs/frourio/releases">frouriojs/frourio</Link>{" • "}
          <Link href="https://github.com/frouriojs/create-frourio-app/releases">frouriojs/create-frourio-app</Link>
        </p>
        <Tabs
          defaultValue="frourio"
          values={[
            { label: 'frourio', value: 'frourio' },
            { label: 'create-frourio-app', value: 'create-frourio-app' },
          ]
        }>
          <TabItem value="frourio">
            {frourioReleases.map(item => (
              <Release release={item} />
            ))}
          </TabItem>
          <TabItem value="create-frourio-app">
            {cfaReleases.map(item => (
              <Release release={item} />
            ))}
          </TabItem>
        </Tabs>
      </main>
    </Layout>
  )
}

export default Changelog
