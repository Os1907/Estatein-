import { IoMail } from "react-icons/io5"; 
import { FaPhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
export default function Dress() {
    const cardInfo = [
        {
            main : "Main Headquarters" ,
            place : "123 Estatein Plaza, City Center, Metropolis" ,
            p : "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
            mail : "info@estatein.com",
            phone : "+1 (123) 456-7890",
            location : "Metropolis",
            id : "Ero2291"
        } , 
        {
            main : "Regional Offices" ,
            place : "456 Urban Avenue, Downtown District, Metropolis" ,
            p : "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
            mail : "info@restatein.com",
            phone : "+1 (123) 628-7890",
            location : "Metropolis",
            id : "Ero2Mn291"

        } 

    ]

  return (
    <>
      <div className="grid grid-cols-12 lg:mx-20 mx-4 gap-4">
        {
            cardInfo.map((i)=>{
                return (
                    <>
                    <div className="lg:col-span-6 col-span-12  gap-y-4 border border-[#242424] rounded-xl">
          <div className="lg:mx-10 mx-3 mb-4 mt-6">
            <p className="text-white  text-base ">{i.main}</p>
            <h5 className="text-white  text-2xl font-semibold mt-2  ">
              {i.place}
            </h5>
            <p className="text-[#999] mt-2 line-clamp-3">
            {i.p}
            </p>
            <div className="flex justify-center xl:justify-start my-5 gap-2  md:flex-row flex-wrap ">
                <p className="text-white rounded-full border border-[#242424] bg-[#1a1a1a] px-5 text-sm lg:text-base  text-center md:mx-0 md:text-left py-2"> <IoMail  className="inline mb-1 mr-1"/> {i.mail} </p>
                <p className="text-white rounded-full border border-[#242424] bg-[#1a1a1a] px-5 text-sm lg:text-base py-2"> <FaPhone className="inline mb-1 mr-1" /> {i.phone} </p>
                <p className="text-white rounded-full border border-[#242424] bg-[#1a1a1a] px-5 text-sm lg:text-base py-2"> <FaLocationArrow  className="inline mb-1 mr-1"/>{i.location}</p>
            </div>
            <div className="flex justify-center my-3"> 
                <button className="bg-[#703bf7] w-[50%] mx-auto lg:w-[100%] text-white rounded-lg p-3">
                Get Direction
                </button>
            </div>
          </div>
        </div>
                    </>
                )
            })
        }
        
      </div>
    </>
  );
}
