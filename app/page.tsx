import Link from 'next/link';

const getBestSellerList = async () => {
  const data = await fetch(
    'https://books-api.nomadcoders.workers.dev/lists'
  ).then((r) => r.json());
  return data.results;
};

async function HomePage() {
  const bestSellerList = await getBestSellerList();
  const onClickDataCheck = () => {
    console.log(bestSellerList);
  };

  return (
    <div>
      <h1>title : The New York Time Best Seller Explorer</h1>
      {/* <button onClick={onClickDataCheck}>장르 리스트 확인용 버튼</button> */}
      <div>
        <div>
          {bestSellerList?.map((el, index) => (
            <div key={index}>
              {el.display_name}
              <div>
                <Link href={`/list/${el.list_name_encoded}`}>여기 누르기</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
