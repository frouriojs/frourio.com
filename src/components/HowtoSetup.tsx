import React from 'react';
import styles from '../pages/styles.module.css';

const setupSteps = [
  {
    text: 'フロントエンドフレームワークを選択',
    icons: ['next', 'nuxt', 'sapperIcon'],
  },
  {
    text: 'バックエンドフレームワークを選択',
    icons: ['fastify', 'express'],
  },
  {
    text: 'ORM を選択',
    icons: ['prisma', 'typeorm'],
  },
  {
    text: 'データベースを選択',
    icons: ['mysql', 'postgres'],
  },
  {
    text: 'CI を選択',
    icons: ['jest', 'githubactions'],
  },
  {
    text: 'デプロイ先を選択',
    icons: ['vercel', 'netlify'],
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
              {step.icons.map((icon, index) => (
                <img key={index} className={styles.stepIcon} src={`img/${icon}.png`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HowtoSetup;
