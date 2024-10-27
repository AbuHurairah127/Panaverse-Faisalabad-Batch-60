import { client } from "../lib/client";

export const fetchProducts = async () => {
  try {
    const data = client.fetch(`*[_type=="products"]{title}`);
    console.log("🚀 ~ fetchProducts ~ data:", data);
    return data;
  } catch (error: any) {}
};
