import { CiSearch } from "react-icons/ci";
import Choices from "./Choices/Choices";
export default function MainChild() {
  return (
    <>
      <div className="lg:mx-20 md:mx-4 relative z-20">
        <div className="lg:w-[60%] mx-auto mt-[-40px] mainColor rounded-2xl border-8 flex justify-between  border-[#1a1a1a] py-2  ">
          <input
            type="text"
            placeholder="Search For A Property"
            className=" rounded-lg lg:p-3 p-2 mainColor pl-4 focus:outline-none text-white placeholder:text-[#9999]"
          />
          <div className="mr-4 bg-[#703BF7] cursor-pointer flex items-center rounded-lg px-2 ">
            <p className="   text-white inline font-medium">
              <CiSearch className="inline mr-1 text-lg mb-1" />
              Find Property
            </p>
          </div>
        </div>
        <Choices/>
      </div>
    </>
  );
}
