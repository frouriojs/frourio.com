import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import styles from './changelog.module.css';
import axios from 'axios';
import moment from 'moment';
import Markdown from '../libs/markdown';

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
          <Link href={props.release.html_url}>{props.release.name}</Link>
        </h2>
        <span className={styles.date}>{moment(props.release.created_at).format('YYYY.MM.DD')}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: Markdown.render(props.release.body),
        }}
      />
    </article>
  );
};

const Changelog = () => {
  const [frourioReleases, setFrourioReleases] = useState<Release[]>([]);
  const [cfaReleases, setCfaReleases] = useState<Release[]>([]);

  useEffect(() => {
    const _f = async () => {
      const res = await axios.get<Release[]>(
        'https://api.github.com/repos/frouriojs/frourio/releases?per_page=100'
      );
      setFrourioReleases(res.data);
    };
    _f();
  }, [setFrourioReleases]);

  useEffect(() => {
    const _f = async () => {
      const res = await axios.get<Release[]>(
        'https://api.github.com/repos/frouriojs/create-frourio-app/releases?per_page=100'
      );
      setCfaReleases(res.data);
    };
    _f();
  }, [setCfaReleases]);

  return (
    <Layout title="変更履歴" description="frourio と create-frourio-app の変更履歴">
      <main className={clsx('container', styles.main)}>
        <h1 className={styles.title}>変更履歴</h1>
        <p>frourio と create-frourio-app のリリース一覧です。</p>
        <span>GitHub で詳しくみる：</span>
        <ul>
          <li>
            <Link href="https://github.com/frouriojs/frourio/releases">frouriojs/frourio</Link>
          </li>
          <li>
            <Link href="https://github.com/frouriojs/create-frourio-app/releases">
              frouriojs/create-frourio-app
            </Link>
          </li>
        </ul>
        <Tabs
          defaultValue="frourio"
          values={[
            { label: 'frourio', value: 'frourio' },
            { label: 'create-frourio-app', value: 'create-frourio-app' },
          ]}
        >
          <TabItem value="frourio">
            {frourioReleases.map((item) => (
              <Release release={item} key={item.id} />
            ))}
          </TabItem>
          <TabItem value="create-frourio-app">
            {cfaReleases.map((item) => (
              <Release release={item} key={item.id} />
            ))}
          </TabItem>
        </Tabs>
      </main>
    </Layout>
  );
};

export default Changelog;
