import { IoLocationSharp } from "react-icons/io5";
export default function LocationProduct() {
  return (
    <>
    <div className="pt-20 lg:mx-20 mx-4 relative ">

        <div className="flex justify-between  md:flex-row flex-col gap-y-4">
        <div className="flex items-center md:justify-start justify-between">
        <h2 className="text-white text-3xl font-semibold  ">Seaside Serenity Villa </h2>
        <span className="ml-2 text-white rounded-xl  lg:text-sm text-[12px] p-2 border border-[#242424] hidden md:block"> <IoLocationSharp className="inline mb-1 "/> Malibu, California</span> 
        </div>
        <div className="flex justify-start items-center ">
            <div className="md:hidden">
        <span className="ml-2 text-white rounded-lg   p-2 border border-[#242424]"> <IoLocationSharp className="inline mb-1 "/> Malibu, California</span> 

            </div>
            <div className="flex md:flex-col flex-row ml-5 lg:mr-0 text-lg">
                <div className="mr-2 md:pl-5  ">
            <p className="text-[#999]">Price</p>
                </div>
            <p className="text-white font-medium">$ 1,250,000 </p>
            </div>
        </div>
        </div>
    </div>
    
    
    </>
  )
}
