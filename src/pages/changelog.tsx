import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import styles from './changelog.module.css';
import PagenatedReleases, {
  Props as PagenatedReleasesProps,
} from '../components/PaginatedReleases';

const Changelog = () => (
  <Layout title="Changelog" description="Changelog of frourio and create-frourio-app">
    <main className={clsx('container', styles.main)}>
      <h1 className={styles.title}>Changelog</h1>
      <p>List of the last 50 releases for each of the packages in the frourio ecosystem.</p>
      <span>See all releases on GitHub:</span>
      <ul>
        <li>
          <Link href="https://github.com/frouriojs/frourio/releases">frouriojs/frourio</Link>
        </li>
        <li>
          <Link href="https://github.com/frouriojs/frourio-express/releases">
            frouriojs/frourio-express
          </Link>
        </li>
        <li>
          <Link href="https://github.com/frouriojs/create-frourio-app/releases">
            frouriojs/create-frourio-app
          </Link>
        </li>
        <li>
          <Link href="https://github.com/aspida/aspida/releases">aspida/aspida</Link>
        </li>
      </ul>
      <Tabs
        defaultValue="frourio"
        values={[
          { label: 'frourio', value: 'frourio' },
          { label: 'frourio-express', value: 'frourio-express' },
          { label: 'create-frourio-app', value: 'create-frourio-app' },
          { label: 'aspida', value: 'aspida' },
        ]}
      >
        <TabItem value="frourio">
          <Releases repo="frouriojs/frourio" />
        </TabItem>
        <TabItem value="frourio-express">
          <Releases repo="frouriojs/frourio-express" />
        </TabItem>
        <TabItem value="create-frourio-app">
          <Releases repo="frouriojs/create-frourio-app" />
        </TabItem>
        <TabItem value="aspida">
          <Releases repo="aspida/aspida" />
        </TabItem>
      </Tabs>
    </main>
  </Layout>
);

const Releases: React.FC<PagenatedReleasesProps> = (props) => (
  <BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
      return <PagenatedReleases {...props} />;
    }}
  </BrowserOnly>
);

export default Changelog;
