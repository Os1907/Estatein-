/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/Home Page/Abstract Design.png";

export default function LeftHero() {
  return (
    <>
      <div className="lg:col-span-6 col-span-12 mainColor flex item-center mx-4 flex-col relative  slideInLeft   ">
        <img src={bg} alt="" className="w-full absolute  opacity-15 " />
        <div className="z-20">
          <div className="lg:ml-20 text-white lg:mt-32 mt-20">
            <h1 className=" text-4xl lg:text-6xl font-semibold  ">
              Discover Your Dream Property with Estatein
            </h1>
            <p className=" lg:line-clamp-2 mt-2 text-[#999999] line-clamp-3">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>
          <div className="lg:ml-20 my-10 text-white flex flex-col lg:flex-row items-center ">
            <Link to='/service' className="mr-0 lg:mr-4 py-3 px-4 my-3 bg-[#141414] focus:text-white   border border-[#262626] rounded-lg w-full lg:w-auto">
              Learn More
            </Link>
            <Link to='/properties' className="mr-0 lg:mr-4 py-3 px-4  my-1 bg-[#703BF7] focus:text-white   rounded-lg w-full lg:w-auto">
              Browse Properties
            </Link>
          </div>
          <div className="lg:ml-20 my-4 text-white flex flex-wrap justify-evenly lg:justify-center xl:justify-start gap-2 xl:gap-0  ">
            <p className="lg:mr-4  py-3 px-4 font-bold bg-[#1A1A1A] focus:text-white w-[47%] sm:w-[49%]  lg:w-auto   border border-[#262626] rounded-lg">
              200+
              <span className="block  font-medium text-[#999999] text-sm lg:text-base  ">
                Happy Customers
              </span>
            </p>
            <p className="lg:mr-4 py-3 px-4 bg-[#1A1A1A] focus:text-white w-[47%] sm:w-[49%]  lg:w-auto ml-2 md:ml-0  border border-[#262626] rounded-lg">
              10K+
              <span className="block text-sm lg:text-base  font-medium text-[#999999]">
                Properties For Clients
              </span>
            </p>
            <p className="lg:mr-4 py-3 px-4 bg-[#1A1A1A] focus:text-white  w-full lg:w-auto   xl:mt-0  border border-[#262626] rounded-lg">
              16+
              <span className="block text-sm lg:text-base  font-medium text-[#999999]">
                Happy Customers
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
