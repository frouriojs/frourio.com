import React from 'react';
import styles from './styles.module.css';

const DocPageCardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default DocPageCardWrapper;
