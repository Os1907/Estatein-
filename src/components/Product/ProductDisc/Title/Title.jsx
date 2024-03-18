import bed from '../../../../assets/Home Page/Building/Icons/bedroom.png'
import bath from '../../../../assets/Home Page/Building/Icons/bathroom.png'
import { BsTextarea } from "react-icons/bs";
export default function Title() {
  return (
    <>
    <div className="md:col-span-6 col-span-12 ">
            <div className="border border-[#242424] rounded-lg px-10 py-5">
              <h4 className="text-white text-lg font-medium">Description</h4>
              <p className="text-sm text-[#999] my-2 pb-6 border-b border-[#242424]">
                Discover your own piece of paradise with the Seaside Serenity
                Villa. T With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </p>
              <div className="grid grid-cols-12 justify-between pt-2 gap-y-2 "> 
              <div className=" md:col-span-4 col-span-6 pr-10 flex flex-col border-r border-[#242424]">
                <div className="flex  items-center ">
                  <img src={bed} alt="" className="size-3" />
                  <span className="ml-1 text-sm font-medium text-[#9999]">Bedroom </span>
                </div>
                  <p className="text-white my-2 ml-1">
                    04
                  </p>
              </div>
              <div className="md:col-span-4 col-span-6 pl-2 pr-10 flex flex-col lg:border-r border-[#242424] ">
                <div className="flex  items-center ">
                  <img src={bath} alt="" className="size-3" />
                  <span className="ml-1 text-sm font-medium text-[#9999]">Bedroom </span>
                </div>
                  <p className="text-white my-2 ml-1">
                    03
                  </p>
              </div>
              <div className="lg:col-span-4 col-span-12 pl-2 pr-10 flex flex-col border-t border-[#242424] lg:border-0 pt-3 lg:pt-0">
                <div className="flex  items-center ">
                <BsTextarea  className="size-3 text-white"/>
                  <span className="ml-1 text-sm font-medium text-[#9999]">Area </span>
                </div>
                  <p className="text-white my-2 ml-1 text-sm">
                    2,500 Square Feet
                  </p>
              </div>
              </div>
            </div>
          </div>
    
    </>
  )
}
