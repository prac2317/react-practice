'use client';

import style from './homepage.module.css';
import { useRouter } from 'next/navigation';

const getBestSellerList = async () => {
  const data = await fetch(
    'https://books-api.nomadcoders.workers.dev/lists'
  ).then((r) => r.json());
  return data.results;
};

async function HomePage() {
  const router = useRouter();
  const bestSellerList = await getBestSellerList();

  const onClickMove = (id, title) => {
    router.push(`/list/${id}?title=${title}`);
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.titlebox}>
          <h1>The New York Time Best Seller Explorer</h1>
        </div>
        <div className={style.genreboxcontainer}>
          {bestSellerList?.map((el, index) => (
            <div
              className={style.genrebox}
              key={index}
              onClick={() => onClickMove(el.list_name_encoded, el.list_name)}
            >
              {el.display_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
