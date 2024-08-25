import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-slate-400 text-4xl h-[100vh] flex flex-wrap gap-8 flex-row">
        <div className="w-48 h-48 bg-yellow-400 flex justify-center items-center ">
          <span>100000</span>
        </div>
        <div className="w-48 h-48 bg-red-500 flex justify-center items-center ">
          <span>200000</span>
        </div>
        <div className="w-48 h-48 bg-pink-500 flex justify-center items-center ">
          <span>3000000</span>
        </div>
        <div className="w-48 h-48 bg-indigo-500 flex justify-center items-center ">
          <span>4000000</span>
        </div>
      </div>
      {/* <div className="bg-slate-400 h-[50vh] flex justify-around">
        <div className="w-48 h-48 bg-yellow-400"></div>
        <div className="w-96 h-48 bg-red-500"></div>
       <div className="w-48 h-48 bg-pink-500"></div> 
        <div className="w-48 h-48 bg-indigo-500"></div>
      </div> */}
    </>
  );
};

export default page;
