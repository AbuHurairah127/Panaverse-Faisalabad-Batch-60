import Image from "next/image";
import Link from "next/link";

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
    <main className="flex flex-wrap">
      {data.map((data) => (
        <div key={data.id} className="my-5 border w-48 mx-auto p-5 rounded-lg">
          <Link href={`/product/${data.id}`}>
            <div>
              {`Id => ${data.id}) `}
              {data.title}
            </div>
            <Image src={data.thumbnail} alt="" width={100} height={100} />
          </Link>
        </div>
      ))}
    </main>
  );
};

export default page;
