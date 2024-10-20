"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      Admin in Dashboard
      <button
        onClick={() => {
          console.log("Clicked");
          setTimeout(() => {
            router.push("setting");
          }, 3000);
        }}
      >
        Change Route
      </button>
    </div>
  );
};

export default Page;
