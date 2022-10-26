import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GitHubButton from 'react-github-btn';
import styles from './styles.module.css';
import MovingBoxes from '../components/MovingBoxes';
import HowtoSetup from '../components/HowtoSetup';
import CodeBlocks from '../components/CodeBlocks';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Chart = 'window' in global ? require('react-apexcharts').default : null;

const filterByWindowWidth = (array: (number | string)[]) => {
  if ('window' in global && window.innerWidth >= 600) return array;
  return array.slice(0, 3);
};

const benchmarks: { category: string; data: number; color: string }[] = [
  {
    category: 'frourio',
    data: 57152.8,
    color: '#08c6d6',
  },
  {
    category: 'fastify',
    data: 56084.8,
    color: '#999',
  },
  {
    category: 'nest-fastify',
    data: 53035.2,
    color: '#999',
  },
  {
    category: 'frourio-express',
    data: 13741.0,
    color: '#999',
  },
  {
    category: 'express',
    data: 13602.0,
    color: '#999',
  },
  {
    category: 'nest',
    data: 12212.2,
    color: '#999',
  },
].sort((a, b) => b.data - a.data);

const chartSeries = [
  {
    name: '2022-10-01',
    data: filterByWindowWidth(benchmarks.map((val) => val.data)),
  },
];

const colors = filterByWindowWidth(benchmarks.map((val) => val.color));
const categories = filterByWindowWidth(benchmarks.map((val) => val.category));

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    fontFamily: 'inherit',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        position: 'top',
      },
    },
  },
  colors,
  legend: {
    show: false,
  },
  xaxis: {
    title: {
      text: 'Request/sec',
      style: {
        fontWeight: 'bold',
      },
    },
    categories,
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -8,
    style: {
      fontSize: '12px',
      colors: ['#fff'],
    },
  },
  yaxis: {
    labels: {
      style: {
        colors,
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
  },
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="Description will go into a meta tag in <head />"
    >
      <header className={styles.heroBanner}>
        <div className={styles.movingBoxes}>
          <MovingBoxes />
        </div>
        <div className={clsx(styles.container, 'container')}>
          <p className={styles.heroTitle}>フルスタック開発環境を</p>
          <p className={styles.heroTitle}>コマンド一発で</p>
          <p className={clsx(styles.heroTitle, styles.heroTitleBold)}>必要なのは TypeScript だけ</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}
            >
              はじめる
            </Link>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('/docs/tutorial')}
            >
              チュートリアル
            </Link>
          </div>
          <div className="margin-top--md">
            <GitHubButton
              href="https://github.com/frouriojs/frourio"
              data-icon="octicon-star"
              data-size="large"
              data-show-count={true}
              aria-label="Star frouriojs/frourio on GitHub"
            >
              Star
            </GitHubButton>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={clsx('text--center', styles.feature)}>
              <h2>セットアップ手順</h2>
              <div className={styles.setupWrapper}>
                <p className={styles.setupHeadline}>GUI で環境構築を簡単に</p>
                <HowtoSetup />
              </div>
            </div>
          </div>

          <div className={styles.typeDevWrapper}>
            <div className="container">
              <div className={clsx('text--center')}>
                <h2>型駆動開発</h2>
                <CodeBlocks />
                <div className={styles.rightTriangle}></div>
                <p className={styles.highlightTextGreen}>
                  TypeScript を用いてプロジェクト全体を静的型検査できます
                </p>
              </div>
            </div>
          </div>

          <div className={clsx('text--center', styles.feature)}>
            <div className="container">
              <div className={styles.typeDevDescription}>
                <img className={styles.typeDevDescriptionIcon} src="img/communication.jpg" />
                <p className={styles.highlightTextBlk}>
                  API 型定義によってコントローラーと HTTP リクエストの型が強制されるので、HTTP
                  通信のテストは必要ありません。
                </p>
              </div>
              <div className={styles.typeDevDescription}>
                <img className={styles.typeDevDescriptionIcon} src="img/speed.png" />
                <p className={styles.highlightTextBlk}>
                  型安全なフルスタック開発環境の構築が簡単なので、短期間で安全に製品を完成させることができます。
                </p>
              </div>
            </div>
          </div>

          <div className={clsx('text--center', styles.feature)}>
            <div className="container">
              <h2>TypeScript 製で最速のフレームワーク</h2>
              {Chart && (
                <Chart options={chartOptions} series={chartSeries} type="bar" height={280} />
              )}

              <div className={clsx('text--center', styles.feature)}>
                <Link
                  className={clsx('button button--primary button--lg', styles.getStarted)}
                  to={useBaseUrl('docs/')}
                >
                  はじめる
                </Link>
              </div>
              <div className="margin-top--md text--center">
                <GitHubButton
                  href="https://github.com/frouriojs/frourio"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count={true}
                  aria-label="Star frouriojs/frourio on GitHub"
                >
                  Star
                </GitHubButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
