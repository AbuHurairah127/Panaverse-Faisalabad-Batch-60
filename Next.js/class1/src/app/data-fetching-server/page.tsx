import Image from "next/image";

const getProductsData = async () => {
  try {
    const getData = await fetch("https://dummyjson.com/products");
    const respJson = await getData.json();
    return respJson.products;
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};

const page = async () => {
  //   const getData = await fetch("https://dummyjson.com/products");
  //   const respJson = await getData.json();
  const data = await getProductsData();

  return (
    <main>
      {data.map((data) => (
        <>
          <div key={data.id}>
            {`${data.id}) `}
            {data.title}
          </div>
          <Image src={data.thumbnail} alt="" width={1000} height={1000} />
        </>
      ))}
    </main>
  );
};

export default page;
