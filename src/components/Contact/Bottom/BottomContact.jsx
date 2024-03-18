import icon from "../../../assets/contact/icon (1).png";
import icon1 from "../../../assets/contact/icon (2).png";
import icon2 from "../../../assets/contact/icon (3).png";
import icon3 from "../../../assets/contact/icon (4).png";
import { MdArrowOutward } from "react-icons/md";
export default function BottomContact() {
    const Card = [
        {
          img: icon,
          p: "info@estatein.com",
          id : 230
        },
        {
          img: icon1,
          p: "+1 (123) 456-7890",
          id : 224
    
        },
        {
          img: icon2,
          p: "Main Headquarters",
          id : 245
        },
        {
          img: icon3,
          p: "Instagram",
          p2: "LinkedIn",
          p3: "Facebook",
          id: 269
        },
      ];
      return (
        <>
          <div className="col-span-12  mainColor grid grid-cols-12  border-y-8 border-[#1a1a1a] lg:gap-2 lg:order-3">
            {Card.map((item , index) => {
              return (
                <>
                  <div key={item.id} className="lg:col-span-3 col-span-6 text-center bg-[#1a1a1a] flex items-center border border-[#262626] flex-col justify-center m-2 p-5 rounded-xl relative">
                    <img src={item.img} alt="" className="size-16" />
                    <div className="flex flex-wrap justify-center">
                    <p className="text-white font-medium mt-2 text-sm lg:text-base cursor-pointer hover:underline ">{item.p}</p>
                    {
                        index > 2 ? <div className="flex ">
                            <p className="text-white font-medium mt-2 text-sm lg:text-base cursor-pointer hover:underline mx-5">{item.p2}</p>
                            <p className="text-white font-medium mt-2 text-sm lg:text-base cursor-pointer hover:underline ">{item.p3}</p> 
                        </div>
                        : ""
                    }
                    </div>
                    <MdArrowOutward className="absolute top-2 right-3 text-[#4D4D4D] text-2xl" />
                  </div>
                </>
              );
            })}
          </div>
        </>
      );
    }
    