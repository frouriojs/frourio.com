import React, { ComponentType, SVGProps } from 'react';
import styles from '../pages/styles.module.css';

import NextLogo from '../assets/logos/next.svg';
import NuxtLogo from '../assets/logos/nuxt.svg';
import SapperLogo from '../assets/logos/sapper.svg';
import FastifyLogo from '../assets/logos/fastify.svg';
import ExpressLogo from '../assets/logos/express.svg';
import PrismaLogo from '../assets/logos/prisma.svg';
import TypeormLogo from '../assets/logos/typeorm.svg';
import MysqlLogo from '../assets/logos/mysql.svg';
import PostgresqlLogo from '../assets/logos/postgresql.svg';
import JestLogo from '../assets/logos/jest.svg';
import GithubActionsLogo from '../assets/logos/github-actions.svg';
import VercelLogo from '../assets/logos/vercel.svg';
import NetlifyLogo from '../assets/logos/netlify.svg';

const setupSteps: { text: string; icons: ComponentType<SVGProps<SVGSVGElement>>[] }[] = [
  {
    text: 'Select Front-end Framework',
    icons: [NextLogo, NuxtLogo, SapperLogo],
  },
  {
    text: 'Select Back-end Framework',
    icons: [FastifyLogo, ExpressLogo],
  },
  {
    text: 'Select O/R mapper',
    icons: [PrismaLogo, TypeormLogo],
  },
  {
    text: 'Select DataBase',
    icons: [MysqlLogo, PostgresqlLogo],
  },
  {
    text: 'Setup CI',
    icons: [JestLogo, GithubActionsLogo],
  },
  {
    text: 'Select Deploy Server',
    icons: [VercelLogo, NetlifyLogo],
  },
];

function HowtoSetup() {
  return (
    <div className={styles.allStepContainer}>
      <div className={styles.downArrow}></div>
      {setupSteps.map((step, index) => (
        <div className={styles.stepContainer} key={index}>
          <div className={styles.stepNumber}>Step {index + 1}</div>
          <div>
            <p className={styles.stepText}>{step.text}</p>
            <div className={styles.stepIconsWrapper}>
              {step.icons.map((IconElm, index) => (
                <IconElm key={index} className={styles.stepIcon} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HowtoSetup;
