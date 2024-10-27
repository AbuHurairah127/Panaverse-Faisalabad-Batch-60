"use client";
import React, { useState } from "react";
import CustomButton from "../components/customButton";
import ReduxContainer from "../components/wrappers/ReduxContainer";
const Page = () => {
  const [data, setData] = useState("Testing the Value");
  const updateMyValue = (val: string) => {
    console.log("Update value =>", val);
  };
  return (
    <>
      <div>{data}</div>
      <ReduxContainer>
        <CustomButton setData={setData} />
      </ReduxContainer>
    </>
  );
};

export default Page;
