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
        color: '#999',
      },
    },
    categories,
    labels: {
      style: {
        colors: ['#999'],
      },
    },
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
    <Layout title={siteConfig.tagline}>
      <header className={styles.heroBanner}>
        <div className={styles.movingBoxes}>
          <MovingBoxes />
        </div>
        <div className={clsx(styles.container, 'container')}>
          <p className={styles.heroTitle}>From installation to deployment</p>
          <p className={styles.heroTitle}>in one command</p>
          <p className={clsx(styles.heroTitle, styles.heroTitleBold)}>All you need is TypeScript</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--primary button--lg',
                styles.startTutorial
              )}
              to={useBaseUrl('/docs/tutorial')}
            >
              Start Tutorial
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
              <h2>Setup procedure</h2>
              <div className={styles.setupWrapper}>
                <p className={styles.setupHeadline}>It can be easily set up via GUI.</p>
                <HowtoSetup />
              </div>
            </div>
          </div>

          <div className={styles.typeDevWrapper}>
            <div className="container">
              <div className={clsx('text--center')}>
                <h2>Type-Driven Development</h2>
                <CodeBlocks />
                <div className={styles.rightTriangle}></div>
                <p className={styles.highlightTextGreen}>
                  TypeScript checks the entire application statically.
                </p>
              </div>
            </div>
          </div>

          <div className={clsx('text--center', styles.feature)}>
            <div className="container">
              <div className={styles.typeDevDescription}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className={styles.typeDevDescriptionIcon}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                <p className={styles.highlightTextBlk}>
                  Since API type definition forces the controller type and http request, the test
                  code is not necessary for communication.
                </p>
              </div>
              <div className={styles.typeDevDescription}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className={styles.typeDevDescriptionIcon}
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                </svg>
                <p className={styles.highlightTextBlk}>
                  Setting up a full-stack development environment is simple, so the product can be
                  completed quickly and safely.
                </p>
              </div>
            </div>
          </div>

          <div className={clsx('text--center', styles.feature)}>
            <div className="container">
              <h2>The fastest TypeScript framework</h2>
              {Chart && (
                <Chart options={chartOptions} series={chartSeries} type="bar" height={280} />
              )}

              <div className={clsx('text--center', styles.feature)}>
                <Link
                  className={clsx('button button--primary button--lg', styles.getStarted)}
                  to={useBaseUrl('docs/')}
                >
                  Get Started
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
