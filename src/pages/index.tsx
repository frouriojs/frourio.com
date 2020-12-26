import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import GitHubButton from 'react-github-btn'
import styles from './styles.module.css';

const Chart = 'window' in global ? require('react-apexcharts').default : null

const filterByWindowWidth = (array: (number | string)[]) => {
  if ('window' in global && window.innerWidth >= 600) return array;
  return array.slice(0, 3);
}

const chartSeries = [{
  name: "2020-12-06",
  data: filterByWindowWidth([63219.2, 61095.2, 53943.2, 11555.8, 11430.6, 9705.2])
}]

const colors = filterByWindowWidth(['#999', '#08c6d6', '#999', '#999', '#999', '#999'])
const categories = filterByWindowWidth(['fastify', 'frourio', 'nest-fastify', 'frourio-express', 'express', 'nest'])

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    fontFamily: "inherit",
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
    categories
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
          <h1 className="hero__title">
            <img src="img/logo_main.svg" alt={siteConfig.title} width="400" />
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
            <GitHubButton href="https://github.com/frouriojs/frourio" data-icon="octicon-star" data-size="large" data-show-count={true} aria-label="Star frouriojs/frourio on GitHub">Star</GitHubButton>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={clsx('text--center', styles.feature)}>
              <h2>High Performance</h2>
              {Chart && <Chart options={chartOptions} series={chartSeries} type="bar" height={280} />}
            </div>

            <div className={clsx('text--center', styles.feature)}>
              <h2>Architecture</h2>
              <div>
                <img src="/img/architecture.svg" alt="architecture" />
              </div>
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
              <GitHubButton href="https://github.com/frouriojs/frourio" data-icon="octicon-star" data-size="large" data-show-count={true} aria-label="Star frouriojs/frourio on GitHub">Star</GitHubButton>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
