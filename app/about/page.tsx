import styles from './about.module.css';

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.titlebox}>about us</div>
      <div className={styles.textcontainer}>
        <div>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer
        </div>
        <div>We hope you enjoy your stay!</div>
      </div>
      <div className={styles.titlebox}></div>
    </div>
  );
}

export default AboutPage;
