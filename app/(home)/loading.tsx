import styles from './loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.titlebox}>Loading...</div>
      <div className={styles.textcontainer}>loading...</div>
      <div className={styles.titlebox}></div>
    </div>
  );
}

export default Loading;
