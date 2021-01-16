import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GitHubButton from 'react-github-btn'
import styles from './styles.module.css';
import HowtoSetup from './HowtoSetup';

const Chart = 'window' in global ? require('react-apexcharts').default : null

const chartSeries = [{
  data: [64872.8, 64456.8, 57303.2, 12127.8, 11972.4, 10025.0]
}]

const colors = ['#999', '#008FFB', '#999', '#999', '#999', '#999']

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        position: 'top',
      },
    }
  },
  colors,
  legend: {
    show: false,
  },
  xaxis: {
    title: {
      text: 'Request/sec',
      style: {
        fontWeight: 'bold'
      }
    },
    categories: ['fastify', 'frourio', 'nest-fastify', 'frourio-express', 'express', 'nest'],
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -8,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  yaxis: {
    labels: {
      style: {
        colors,
        fontSize: '14px',
        fontWeight: 'bold'
      }
    }
  }
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <p className={styles.heroTitle}>From installation to deployment</p>
          <p className={styles.heroTitle}>in one command</p>
          <p className={clsx(styles.heroTitle, styles.heroTitleBold)}>All you need is TypeScript</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
          <div className="margin-top--md">
            <GitHubButton href="https://github.com/frouriojs/frourio" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star frouriojs/frourio on GitHub">Star</GitHubButton>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={clsx('text--center', styles.feature)}>
              <h2>How to setup</h2>
              <div className={styles.setupWrapper}>
                <p className={styles.setupHeadline}>GUIで設定完了できるので、すぐに開発できる</p>
                <HowtoSetup />
              </div>
            </div>

            <div className={clsx('text--center', styles.feature)}>
              <h2>The fastest TypeScript framework</h2>
              {Chart && <Chart options={chartOptions} series={chartSeries} type="bar" height={280} />}
            </div>

            <div className={clsx('text--center', styles.feature)}>
              <Link
                className={clsx(
                  'button button--primary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
                Get Started
              </Link>
            </div>
            <div className="margin-top--md text--center">
              <GitHubButton href="https://github.com/frouriojs/frourio" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star frouriojs/frourio on GitHub">Star</GitHubButton>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
