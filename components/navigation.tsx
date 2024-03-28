import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
