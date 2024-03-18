import { IoLocationSharp } from "react-icons/io5";
import { GiDogHouse } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
import { BiShapeSquare } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";

export default function Choices() {
  const dataChoices = [
    {
      icon:  < IoLocationSharp className="text-[#9999] mr-1 pr-2 text-2xl inline border-r border-[#242424]" />,
      title: "Location",
    },
    {
      icon: < GiDogHouse className="text-[#9999] mr-1 pr-2 text-2xl inline border-r border-[#242424]" />,
      title: "Property",
    },
    {
      icon: <MdOutlinePriceChange className="text-[#9999] mr-1 pr-2 text-2xl inline border-r border-[#242424]" />,
      title: "Pricing Range",
    },
    {
      icon:  <BiShapeSquare  className="text-[#9999] mr-1 pr-2 text-2xl inline border-r border-[#242424]" />,
      title: "Property Size",
    },
    {
      icon:  <BsCalendar2Date  className="text-[#9999] mr-1 pr-2 text-2xl inline border-r border-[#242424]" />,
      title: "Build Year",
    },
  ];
  return (
    <>
      <div className="xl:w-[80%] mx-auto bg-[#1a1a1a] p-3 rounded-b-xl lg:rounded-xl mt-[-5px] grid lg:grid-flow-col gap-4   justify-stretch      ">
        {dataChoices.map((item, index) => {
          return (
            <>
              <div
                key={index + Math.random()}
                className="mainColor border-2 border-[#242424]  rounded-xl col-span-2 lg:col-span-1 "
              >
                <div className=" rounded-lg flex justify-between items-center ml-2">
                    {item.icon}
                  
                  <select className="select outline-none  focus:outline-none focus:border-0 focus:border-[#242424]  mainColor text-[#999] w-[95%]">
                    <option>{item.title}</option>
                    <option>Static </option>
                    <option>Static</option>
                  </select>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
