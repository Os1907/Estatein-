/* eslint-disable no-unused-vars */
import React from "react";
import starts from "../../../../assets/Home Page/Stars.png";

export default function HeaderThird() {
  return (
    <>
      <div className="mt-20 lg:mx-20 mx-4">
        <img src={starts} alt="" className="w-14 h-7 mb-5" />
        <h2 className="lg:text-5xl text-3xl font-semibold text-white">
          Frequently Asked Questions
        </h2>
        <div className="w-full flex justify-between items-center pb-10">
          <p className="text-[#9999] lg:line-clamp-2 line-clamp-3 lg:w-[75%] lg:text-base text-sm">
            Find answers to common questions about {"Estatein's"} services,
            property listings, and the real estate process. {"We're"} here to
            provide clarity and assist you every step of the way.
          </p>
          <p className="lg:mr-10 hidden lg:inline  py-3 px-4 font-medium bg-[#1A1A1A] text-white w-[48%] sm:w-[49%]  lg:w-auto   border border-[#262626] rounded-lg">
            View All {"FAQ'S"}
          </p>
        </div>
      </div>
    </>
  );
}
