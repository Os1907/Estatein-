

export default function IntialCost() {
  return (
    <>
    <div className="py-8 lg:px-10 px-5 border border-[#242424] rounded-lg my-Shadow">
        <div className="mt-2 flex justify-between items-center pb-5 border-b border-[#242424]">
            <p className="text-white"> Total Initial Costs</p>
            <p className="text-white p-3 rounded-lg text-sm cursor-pointer bg-[#1a1a1a] border border-[#242424]">
                Learn More
            </p>
        </div>
        <div className="grid grid-cols-12 gap-4 border-b border-[#242424] ">
            <div className="my-5 lg:col-span-6  col-span-12 lg:border-r border-[#242424] border-b lg:border-b-0 pb-5"> 
                <h5 className="text-[#999]  my-2">Listing Price</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$ 1,250,000</p>
                </div>
                 </div>
                 <div className="my-5 lg:col-span-6  col-span-12  pb-5"> 
                <h5 className="text-[#999]  my-2">Additional Fees</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$ 29,700</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full">Property transfer tax, legal fees, inspection, insurance</span>
                </div>
                 </div>
            <div>
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4 ">
            <div className="my-5 lg:col-span-6  col-span-12 lg:border-r border-[#242424] border-b lg:border-b-0 pb-5"> 
                <h5 className="text-[#999]  my-2">Down Payment</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$ 250,000</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> 20% </span>
                </div>
                 </div>
                 <div className="my-5 lg:col-span-6  col-span-12  pb-2"> 
                <h5 className="text-[#999]  my-2">Mortgage Amount</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$1,000,000</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> If applicable </span>
                </div>
                 </div>
        </div>
    </div>
    
    
    
    </>
  )
}
