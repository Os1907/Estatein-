
export default function Monthly() {
  return (
    <>
    <div className="py-8 lg:px-10 px-5 border border-[#242424] rounded-lg my-Shadow my-8">
        <div className="mt-2 flex justify-between items-center pb-5 border-b border-[#242424]">
            <p className="text-white"> Monthly Expenses</p>
            <p className="text-white p-3 rounded-lg text-sm cursor-pointer bg-[#1a1a1a] border border-[#242424]">
                Learn More
            </p>
        </div>
        <div className="grid grid-cols-12 gap-4 border-b border-[#242424] ">
            <div className="my-5 lg:col-span-6  col-span-12 lg:border-r border-[#242424] border-b lg:border-b-0 pb-5"> 
                <h5 className="text-[#999]  my-2">Property Taxes</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$ 1,250</p>
                </div>
                 </div>
                 <div className="my-5 lg:col-span-6  col-span-12  pb-5"> 
                <h5 className="text-[#999]  my-2">{"Homeowner's Association Fee"}</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$ 300</p>
                </div>
                 </div>
            <div>
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4 ">
            <div className="my-5 lg:col-span-6  col-span-12 lg:border-r border-[#242424] border-b lg:border-b-0 pb-5"> 
                <h5 className="text-[#999]  my-2">Mortgage Payment</h5>
                <div className="flex  items-start justify-start flex-col md:flex-row lg:flex-col xl:flex-row ">
                    <p className="text-white text-base font-semibold ">Varies based on terms and interest rate If applicable</p>
                    <span className=" ml-3 text-[#999]  bg-[#1a1a1a] border block  border-[#242424] py-2 px-4  text-[9px] lg:text-[12px] xl:text-sm rounded-full"> If applicable </span>
                </div>
                 </div>
                 <div className="my-5 lg:col-span-6  col-span-12  pb-2"> 
                <h5 className="text-[#999]  my-2">Mortgage Amount</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$100</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> Approximate monthly cost </span>
                </div>
                 </div>
        </div>
    </div>



    </>
  )
}
