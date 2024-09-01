import Image from "next/image";
import test from "./../../../public/image.png";
const page = () => {
  return (
    <>
      <div className="h-72 aspect-square bg-red-500 transition-all duration-1000 origin-left relative group overflow-hidden">
        {/* img */}
        {/* Image */}
        <Image src={test} alt="" />
      </div>
      <Image src={"/image.png"} alt="" width={1000} height={1000} />
    </>
  );
};

export default page;

// pseudo selector
