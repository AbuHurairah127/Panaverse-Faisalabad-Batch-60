"use client";
import { useRouter } from "next/navigation";
import Button from "./components/common/button/Button";

const Page = () => {
  const router = useRouter();
  let nam = "Abu Hurairah";
  return (
    // <tagname>content</tagname>
    <>
      <h1>{nam}</h1>
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
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h1>{nam}</h1>
      <h2>Abu Hurairah</h2>
      <h3>Abu Hurairah</h3>
      <h4>Abu Hurairah</h4>
      <h4>Abu Hurairah</h4>
      <h4>Abu Hurairah</h4>
      <h4>Abu Hurairah</h4>
      <h4>Abu Hurairah</h4>
      <h5>Abu Hurairah</h5>
      <h6>Abu Hurairah</h6>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
        voluptates provident perferendis! Quia nobis veniam suscipit expedita
        consectetur, perferendis earum quod atque sint rem cumque, facilis illo
        officiis laborum! Velit.
      </p>
      <p
        style={{
          border: "2px solid limegreen",
        }}
      >
        Lorem ipsum dolor sit.
      </p>
      <p
        style={{
          border: "2px solid limegreen",
        }}
      >
        Lorem ipsum dolor sit.
      </p>
      <span
        style={{
          border: "2px solid red",
        }}
      >
        Lorem ipsum dolor sit.
      </span>
      <span
        style={{
          border: "2px solid red",
        }}
      >
        Lorem ipsum dolor sit.
      </span>
    </>
  );
};

export default Page;
