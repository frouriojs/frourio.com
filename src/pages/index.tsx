import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import GitHubButton from 'react-github-btn'
import styles from './styles.module.css'
import HowtoSetup from '../components/HowtoSetup'
import CodeBlocks from '../components/CodeBlocks'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Chart = 'window' in global ? require('react-apexcharts').default : null

const filterByWindowWidth = (array: (number | string)[]) => {
  if ('window' in global && window.innerWidth >= 600) return array
  return array.slice(0, 3)
}

const benchmarks: { category: string; data: number; color: string }[] = [
  {
    category: 'frourio',
    data: 61554.0,
    color: '#08c6d6'
  },
  {
    category: 'fastify',
    data: 59092.8,
    color: '#999'
  },
  {
    category: 'nest-fastify',
    data: 54034.4,
    color: '#999'
  },
  {
    category: 'express',
    data: 11552.4,
    color: '#999'
  },
  {
    category: 'frourio-express',
    data: 11446.4,
    color: '#999'
  },
  {
    category: 'nest',
    data: 9816.6,
    color: '#999'
  }
]

const chartSeries = [
  {
    name: '2020-01-01',
    data: filterByWindowWidth(benchmarks.map((val) => val.data))
  }
]

const colors = filterByWindowWidth(benchmarks.map((val) => val.color))
const categories = filterByWindowWidth(benchmarks.map((val) => val.category))

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false
    },
    fontFamily: 'inherit'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        position: 'top'
      }
    }
  },
  colors,
  legend: {
    show: false
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
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={siteConfig.tagline}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <p className={styles.heroTitle}>From installation to deployment</p>
          <p className={styles.heroTitle}>in one command</p>
          <p className={clsx(styles.heroTitle, styles.heroTitleBold)}>
            All you need is TypeScript
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
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
                <p className={styles.setupHeadline}>
                  It can be easily set up via GUI.
                </p>
                <HowtoSetup />
              </div>
            </div>

            <div className={clsx('text--center', styles.feature)}>
              <h2>Type-Driven Development</h2>
              <div className={styles.typeDevWrapper}>
                <CodeBlocks />
                <div className={styles.rightTriangle}></div>
                <p className={styles.highlightTextGreen}>
                  TypeScript checks the entire application statically.
                </p>

                <div className={styles.typeDevDescription}>
                  <img
                    className={styles.typeDevDescriptionIcon}
                    src="img/communication.jpg"
                  />
                  <p className={styles.highlightTextBlk}>
                    Since API type definition forces the controller type and http request, the test code is not necessary for communication.
                  </p>
                </div>
                <div className={styles.typeDevDescription}>
                  <img
                    className={styles.typeDevDescriptionIcon}
                    src="img/speed.png"
                  />
                  <p className={styles.highlightTextBlk}>
                    Setting up a full-stack development environment is simple, so the product can be completed quickly and safely.
                  </p>
                </div>
              </div>
            </div>

            <div className={clsx('text--center', styles.feature)}>
              <h2>The fastest TypeScript framework</h2>
              {Chart && (
                <Chart
                  options={chartOptions}
                  series={chartSeries}
                  type="bar"
                  height={280}
                />
              )}
            </div>

            <div className={clsx('text--center', styles.feature)}>
              <Link
                className={clsx(
                  'button button--primary button--lg',
                  styles.getStarted
                )}
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
        </section>
      </main>
    </Layout>
  )
}

export default Home
