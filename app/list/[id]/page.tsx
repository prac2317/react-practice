import Link from 'next/link';

const getBestSellerList = async (id: string) => {
  const data = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${id}`
  ).then((response) => response.json());
  return data.results.books;
};

async function DetailPage({ params: { id } }: { params: { id: string } }) {
  const detailBookList = await getBestSellerList(id);
  const onClickDataCheck = () => {
    console.log(id);
    console.log(detailBookList);
  };
  return (
    <div>
      <h1>title : The New York Time Best Seller Explorer</h1>
      {/* <button onClick={onClickDataCheck}>책 디테일 리스트 확인용 버튼</button> */}
      <div>
        <div>
          {detailBookList?.map((el, index) => (
            <div key={index}>
              <img src={`${el.book_image}`}></img>
              <div>{el.title}</div>
              <div>{el.author}</div>
              <Link href={`${el.buy_links[0].url}`} passHref>
                buy now!
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
