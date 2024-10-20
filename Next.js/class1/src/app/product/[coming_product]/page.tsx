import React from "react";
const getSingleProductData = async (id: number) => {
  try {
    const respApi = await fetch(`https://dummyjson.com/products/${id}`);
    const respJson = await respApi.json();
    console.log("🚀 ~ getSingleProductData ~ respJson:", respJson);
    return respJson;
  } catch (error: any) {}
};
const page = async ({ params }: { params: { coming_product: string } }) => {
  const data = await getSingleProductData(Number(params.coming_product));
  return (
    <div>
      Upcoming Products = {params.coming_product}
      <div>{data.title}</div>
    </div>
  );
};

export default page;
