import Image from "next/image";
import React from "react";
import header from "../../../public/heder.svg";
import aa from "../../../public/aa.svg";

function Finance() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 my-10">
      <h1 className="w-full text-3xl md:text-5xl lg:text-7xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-center">
        Mercury Money Your Ultimate Finance Companion
      </h1>
      <p className="text-[#53545C] w-full text-center">
        Welcome to Mercury, your all-in-one finance management solution! Take
        control of your financial matters like never before with our powerful
        and user-friendly app.
      </p>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="w-full md:w-[400px]">
          <div className="bg-slate-300 rounded-xl p-4 cursor-pointer w-full md:w-[400px] h-[300px] flex flex-col items-center justify-center">
            <p className="px-6 md:px-10 py-4 bg-white border rounded-xl shadow-md">
              Staples Receipt auto matched
            </p>
          </div>
          <div className="w-full p-4 md:w-[400px] cursor-pointer bg-black text-white flex flex-col items-center justify-center rounded-xl py-6">
            <p className="text-xl">Expense Management</p>
          </div>
        </div>
        <div className="w-full md:w-[400px]">
          <div className="bg-slate-300 p-4 rounded-xl cursor-pointer w-full h-[300px] flex flex-col items-center justify-center">
            <Image src={aa} alt="/" />
          </div>
          <div className="w-full cursor-pointer bg-black text-white flex flex-col items-center justify-center rounded-xl py-6">
            <p className="text-xl">Command + K</p>
          </div>
        </div>
        <div className="w-full md:w-[400px]">
          <div className="bg-slate-300 rounded-xl cursor-pointer w-full h-[300px] flex flex-col items-center justify-center">
            <Image src={header} alt="/" />
          </div>
          <div className="w-full cursor-pointer bg-black text-white flex flex-col items-center justify-center rounded-xl py-6">
            <p className="text-xl">Financial Planner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
