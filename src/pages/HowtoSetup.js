import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const setupSteps = [
  {
    text: 'Select Front-end Framework',
    icons: ['next', 'nuxt', 'sapper']
  },
  {
    text: 'Select Back-end Framework',
    icons: ['fastify', 'express']
  },
  {
    text: 'Select O/R mapper',
    icons: ['prisma', 'typeorm']
  },
  {
    text: 'Select DataBase',
    icons: ['mysql', 'postgres']
  },
  {
    text: 'Setup CI',
    icons: ['jest', 'githubactions']
  },
  {
    text: 'Select Deploy Server',
    icons: ['vercel', 'netlify']
  },
]

function HowtoSetup() {
  return (
    <div>
      {setupSteps.map((step, index) => (
        <div className={clsx('', styles.stepContainer)}>
          
          <div className={clsx('', styles.stepNumber)}>Step {index + 1}</div>
          
          <div>
            <p className={clsx('', styles.stepText)}>{step.text}</p>
            <div className={clsx('', styles.stepIconsWrapper)}>
              {step.icons.map(icon => (
                <img
                  className={clsx('', styles.stepIcon)}
                  src={`img/${icon}.png`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HowtoSetup;
