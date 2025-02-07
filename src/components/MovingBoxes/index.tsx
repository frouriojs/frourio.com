import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import classes from './styles.module.css';

const MovingBoxes: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <img
          src={useBaseUrl('/img/key_visual_bg.jpg')}
          alt="key visual"
          className={classes.background}
        />
        {getRandomIndexArray().map((r, i) => (
          <img
            src={useBaseUrl(`/img/box/${boxList[r]}.png`)}
            alt="box"
            className={clsx(classes.box)}
            key={`box${i}`}
            style={{ animationDelay: `${-6 * i}s` }}
          />
        ))}
        <div className={classes.shadow} />
      </div>
    </div>
  );
};

const boxList = [
  'aspida',
  'express',
  'fastify',
  'mysql',
  'next',
  'nuxt',
  'open',
  'prisma',
  'react',
  'vue',
];

const getRandomIndexArray = () => {
  const randoms = [];

  for (let i = 0; randoms.length < boxList.length; ++i) {
    const r = Math.floor(Math.random() * boxList.length);
    if (!randoms.includes(r)) randoms.push(r);
  }

  return randoms;
};

export default MovingBoxes;
