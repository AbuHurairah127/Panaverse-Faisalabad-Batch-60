"use client";
import { decrement, increment } from "@/redux/slices/counterSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchWithRedux from "./fetchWithRedux";

const CustomButton = () => {
  const number = useSelector((xyz: RootState) => xyz.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <button onClick={() => dispatch(increment())}>Add</button>
        <div className="mx-8">{number}</div>
        <button onClick={() => dispatch(decrement())}>Deduct</button>
      </div>
      <FetchWithRedux />
    </>
  );
};

export default CustomButton;
