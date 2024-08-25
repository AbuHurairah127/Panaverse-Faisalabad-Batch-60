import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="w-full h-96 bg-red-500 col-span-2"></div>
      <div className="w-full h-full bg-green-500 row-span-2"></div>
      <div className="w-full h-full bg-yellow-500 row-span-2"></div>
      <div className="w-full h-96 bg-orange-500"></div>
      <div className="w-full h-96 bg-indigo-600 col-span-2"></div>
    </div>
  );
};

export default page;
