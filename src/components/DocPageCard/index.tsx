import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export type Props = {
  title: string;
  description?: string;
  href: string;
};

const DocPageCard: React.FC<Props> = ({ title, description, href }) => (
  <article className={clsx('card', styles.cardRoot)}>
    <a href={href} className={clsx('padding--md', styles.cardLink)}>
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      {description && (
        <div className="card__body">
          <p>{description}</p>
        </div>
      )}
    </a>
  </article>
);

export default DocPageCard;
