'use client';
import styles from './error.module.css';

function DetailError() {
  return (
    <div className={styles.container}>
      <div className={styles.titlebox}>Error</div>
      <div className={styles.textcontainer}>something broke...</div>
      <div className={styles.titlebox}></div>
    </div>
  );
}

export default DetailError;
