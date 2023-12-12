import React from "react";
import i1 from "../../../public/i1.svg";
import i2 from "../../../public/i2.svg";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";

function SavingsGoals() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-3 lg:gap-y-6 items-center justify-center">
        <div className="w-full gap-3 md:w-[50%] flex flex-col items-center justify-center">
          <p className="rounded-full my-5 py-3 px-5 border w-fit text-sm ">
            Mercury Finance App
          </p>
          <h1 className="md:w-[90%] text-[32px] md:text-[64px] lg:text-[88px] xl:text-[70px] font-medium leading-[36px] md:leading-[72px] lg:leading-[96px] xl:leading-[80px] text-center">
            Achieve Your Savings Goals with Smart Tools
          </h1>
          <p className="text-[#53545C] md:w-[90%] text-center">
            Achieve your savings goals with the help of our smart tools. Set
            specific targets, create savings plans, and track your progress.
          </p>
          <div className="flex md:w-[90%] flex-col lg:flex-row my-6 gap-3 lg:gap-6 text-center lg:text-left">
            <p>Spend up to $40,000 or more</p>
            <p>Competitive interest rates</p>
          </div>
          <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
            <button className="rounded-full text-white bg-black py-2 px-4 flex">
              Lets Talk <RiArrowRightUpLine />
            </button>
            <p className="rounded-full  py-3 px-5 border w-fit text-sm ">
              Learn More
            </p>
          </div>
        </div>
        <div>
          <div className="bg-slate-300 p-5 flex flex-col gap-4 rounded-xl relative">
            <Image src={i1} alt="" className=" " />
            <Image src={i2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingsGoals;
