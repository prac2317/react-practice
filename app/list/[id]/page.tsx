'use client';

import Link from 'next/link';
import styles from './detailpage.module.css';

const getDetailBookList = async (id: string) => {
  const data = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  ).then((response) => response.json());
  return data.results.books;
};

async function DetailPage({
  params: { id },
  searchParams: { title },
}: {
  params: { id: string };
  searchParams: { title: string };
}) {
  const detailBookList = await getDetailBookList(id);

  return (
    <div className={styles.container}>
      <div className={styles.titlebox}>
        <h1>{title}</h1>
      </div>
      <div className={styles.cardcontainer}>
        {detailBookList?.map((el, index) => (
          <div className={styles.cardbox} key={index}>
            <img className={styles.img} src={`${el.book_image}`}></img>
            <div>{el.title}</div>
            <div>{el.author}</div>
            <Link href={`${el.buy_links[0].url}`} passHref>
              buy now!
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
