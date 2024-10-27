import { fetchAllProducts } from "@/redux/slices/productSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FetchWithRedux = () => {
  const {
    products: prods,
    error: err,
    loader,
  } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-screen">
      <button onClick={() => dispatch(fetchAllProducts())}>
        {loader ? "loading...." : "Fetch Products"}
      </button>
      {prods.map((prod, i) => (
        <div key={i}>{prod.title}</div>
      ))}
      <div className="text-red-500">{err}</div>
    </div>
  );
};

export default FetchWithRedux;
