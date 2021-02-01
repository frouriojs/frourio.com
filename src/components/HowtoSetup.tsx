import React from 'react'
import styles from '../pages/styles.module.css'

const setupSteps = [
  {
    text: 'Select Front-end Framework',
    icons: ['next', 'nuxt', 'sapperIcon']
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
        <div className={styles.stepContainer} key={index}>
          <div className={styles.stepNumber}>Step {index + 1}</div>
          {/* <div className={styles.downTriangle}></div> */}
          <div>
            <p className={styles.stepText}>{step.text}</p>
            <div className={styles.stepIconsWrapper}>
              {step.icons.map((icon, index) => (
                <img
                  key={index}
                  className={styles.stepIcon}
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

export default HowtoSetup
