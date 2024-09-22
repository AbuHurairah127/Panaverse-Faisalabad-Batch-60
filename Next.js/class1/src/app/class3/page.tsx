// import React from "react";

// const page = () => {
//   return (
//     <main>
//       {/* <div className="bg-blue-500 w-fit border-[2.5px] border-t-8 border-t-green-500 border-l-yellow-500 border-r-pink-500 border-b-red-500 pt-10 pl-5 pr-20 pb-8">
//         Get a Quote
//       </div> */}
//       <div className="bg-blue-500 w-40 h-10 border-[2.5px] border-red-500  ">
//         {/* Get a Quote */}
//         {/* <div className="w-16 h-8 bg-green-500"></div> */}
//       </div>
//       <div className="bg-blue-500 w-fit border-[2.5px] border-red-500 px-6 py-1 rounded-md tracking-widest">
//         Get a Quote
//         {/* <div className="w-16 h-8 bg-green-500"></div> */}
//       </div>
//       <div className="bg-blue-500 w-40 h-10 border-[2.5px] border-red-500  ">
//         {/* Get a Quote */}
//         {/* <div className="w-16 h-8 bg-green-500"></div> */}
//       </div>
//     </main>
//   );
// };

// export default page;
// // div - division
// -------------------------------------------------------

// const page = () => {
//   return (
//     <main>
//       <form>
//         <input
//           type="text"
//           placeholder="Name: John Doe"
//           required
//           minLength={3}
//         />
//         <fieldset className="my-5 p-5 border border-black">
//           <legend>Contact Info</legend>
//           <input type="number" />
//           <input type="password" />
//           <input type="color" name="" id="" />
//           <input type="email" />
//         </fieldset>
//         <input type="date" name="" id="" />
//         <input type="datetime-local" name="" id="" />
//         <input type="search" />
//         <input type="radio" name="gender" id="female" />
//         <label htmlFor="female">Female</label>
//         <input type="radio" name="gender" id="male" />
//         <label htmlFor="male">Male</label>
//         <input type="checkbox" name="province" />
//         <span>Punjab</span>
//         <input type="checkbox" name="province" />
//         <span>Sindh</span>
//         <input type="checkbox" name="province" />
//         <span>KPK</span>
//         <button type="reset">Reset</button>
//         <button
//           type="submit"
//           className="bg-blue-500 w-fit border-[2.5px] border-red-500 px-6 py-1 rounded-md tracking-widest"
//         >
//           Submit
//         </button>
//       </form>
//     </main>
//   );
// };

// export default page;
// Opening Closing
// self-closing

import React from "react";
import Button from "../components/common/button/Button";

const page = () => {
  return (
    <main className="bg-gray-300 h-[500vh] relative">
      <Button title="Button in class3"/>
      {/* <div className="w-10 h-10 bg-green-500 fixed right-5 bottom-5"></div> */}
      {/* <div className="w-10 h-10 bg-green-500 relative "></div> */}
      {/* <div className="w-10 h-10 bg-green-500 relative "></div> */}
      <div className="bg-black h-screen">
        <div className="bg-yellow-400 w-20 h-20 "></div>
      </div>
      <div className="bg-red-300 h-screen relative">
        <div className="bg-yellow-400 w-20 h-20 absolute top-0 right-0">
          abs.
        </div>
      </div>
      <div className="bg-green-300 h-screen">
        <div className="bg-yellow-400 w-20 h-20"></div>
      </div>
    </main>
  );
};

export default page;
// default position => static
