"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      Setting in Dashboard
      <Link href="/">Home</Link>
      <Link href="/admin" target="_blank">
        Admin
      </Link>
      <Link href="/">Home</Link>
      <button
        onClick={() => {
          console.log("Clicked");
          setTimeout(() => {
            router.push("admin");
          }, 3000);
        }}
      >
        Change Route
      </button>
    </div>
  );
};

export default Page;
