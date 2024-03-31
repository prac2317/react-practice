import Link from 'next/link';
import styles from './navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <span className={styles.menubox}>
        <Link href="/">home</Link>
      </span>
      <span className={styles.menubox}>
        <Link href="/about">about us</Link>
      </span>
    </nav>
  );
}

export default Navigation;
