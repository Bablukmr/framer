import Image from "next/image";
import React from "react";
import Header from "./header";
import { FaApple } from "react-icons/fa";
import mobile from "../../../public/mobile.webp";
import a from "../../../public/a.svg";
import Finance from "./finance";
import HeaderMobile from "./headerMobile";
import SavingsGoals from "./savingsGoals";
import BillReminder from "./billRemider";
import Footer from "./footer";

function Dashboard() {
  return (
    <div className="bg-white pt-2 w-full relative h-screen">
      <div className="">
        <div className="hidden xl:block">
          <Header />
        </div>
        <div className="block xl:hidden absolute top-6 w-full">
          <HeaderMobile />
        </div>
      </div>
      <div className="bg-white rounded-2xl pt-16 xl:pt-0 w-[96%] ml-[2%] p-2 border flex  flex-col xl:flex-row">
        <div className=" xl:w-[70%] rounded-md flex flex-col items-center justify-center">
          <div className="w-full xl:w-[75%]">
            <p className="rounded-full my-5 py-3 px-5 border w-fit text-sm">
              Financial Management
            </p>
            <h1 className="text-[32px] md:text-[64px] lg:text-[88px] font-medium leading-[36px] md:leading-[72px] lg:leading-[96px]">
              A simpler, smarter basic credit{" "}
              <span className="text-blue-500">card.</span>
            </h1>
            <p className="py-4 text-[#53545C]">
              Your powerful companion on the road to financial success! Explore
              personal budget management, investment opportunities.
            </p>
            <div className=" flex flex-col  lg:flex-row  gap-4">
              <button className="rounded-full text-white bg-black py-3 px-4 w-fit flex gap-2 items-center ">
                <FaApple /> App Store
              </button>
              <div className="flex">
                <Image
                  src={"/1.webp"}
                  alt=""
                  width={50}
                  height={50}
                  className="border p-1 rounded-full"
                />
                <Image
                  src={"/2.webp"}
                  alt=""
                  width={50}
                  height={50}
                  className="border p-1 rounded-full"
                />
                <Image
                  src={"/3.webp"}
                  alt=""
                  width={50}
                  height={50}
                  className="border p-1 rounded-full"
                />
                <div className="flex flex-col mx-2">
                  <p className="p-0 m-0 text-base"> 24K+</p>
                  <p className="p-0 m-0 text-[#53545C]"> Active User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[35%] md:h-[1200px] lg:h-[710px] rounded-md relative">
          <div className="w-full bg-slate-300 rounded-md hidden xl:block ">
            <Image
              src={"/mbg.webp"}
              alt="img"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "10px" }}
            />
            <div className="w-[370px] xl:h-[450px] xl:absolute top-[110px] -left-16 rounded-md ">
              <Image src={mobile} alt="img" />
            </div>
          </div>
          <div>
            <div className="md:pb-10 h-full flex items-center justify-center my-6 xl:hidden rounded-md">
              <Image src={mobile} alt="img" className="h-[700px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] ml-[5%] flex gap-y-4 flex-col items-center justify-center mt-[80px] mb-[40px]">
        <p className="text-[#53545C]">
          {" "}
          The platform fueling today’s high-growth revenue teams
        </p>
        <div className="w-[100%] flex flex-wrap items-center justify-center">
          <Image src={"/a.svg"} width={200} height={100} alt="/" />
          <Image src={"/b.svg"} width={200} height={100} alt="/" />
          <Image src={"/c.svg"} width={200} height={100} alt="/" />
          <Image src={"/d.svg"} width={200} height={100} alt="/" />
          <Image src={"/f.svg"} width={200} height={100} alt="/" />
        </div>
        <button className="rounded-full   py-2 px-4 border">
          See Customer Reviews
        </button>
      </div>

      <Finance />
      <SavingsGoals/>
      <BillReminder/>
      <Footer/>
    </div>
  );
}

export default Dashboard;
