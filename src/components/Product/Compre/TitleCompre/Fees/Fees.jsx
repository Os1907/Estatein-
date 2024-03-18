
export default function Fees() {
  return (
    <>
    <div className="py-8 lg:px-10 px-5 border border-[#242424] rounded-lg my-Shadow">
        <div className="mt-2 flex justify-between items-center pb-5 border-b border-[#242424]">
            <p className="text-white"> Additional Fees</p>
            <p className="text-white p-3 rounded-lg text-sm cursor-pointer bg-[#1a1a1a] border border-[#242424]">
                Learn More
            </p>
        </div>
        <div className="grid grid-cols-12 gap-4 border-b border-[#242424] ">
            <div className="my-5 lg:col-span-6  col-span-12 lg:border-r border-[#242424] border-b lg:border-b-0 pb-5"> 
                <h5 className="text-[#999]  my-2">Property Transfer Tax</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$25,000</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> Based on the sale price and local regulations </span>
                </div>
                 </div>
                 <div className="my-5 lg:col-span-6  col-span-12  pb-5"> 
                <h5 className="text-[#999]  my-2">Legal Fees</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$3,000</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> Approximate cost for legal services, including title transfer </span>
                </div>
                 </div>
            <div></div>
        </div>
        <div className="grid grid-cols-12 gap-4 border-b border-[#242424] ">
            <div className="my-5 lg:col-span-6  col-span-12 lg:border-r border-[#242424] border-b lg:border-b-0 pb-5"> 
                <h5 className="text-[#999]  my-2">Home Inspection</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$500</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> Recommended for due diligence </span>
                </div>
                 </div>
                 <div className="my-5 lg:col-span-6  col-span-12  pb-5"> 
                <h5 className="text-[#999]  my-2">Property Insurance</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$1,200</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> Annual cost for comprehensive property insurance </span>
                </div>
                 </div>
        </div>
        <div className="my-5  "> 
                <h5 className="text-[#999]  my-2">Mortgage Fess</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">Varies</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> If applicable, consult with your lender for specific details</span>
                </div>
                 </div>
    </div>
    
    </>
  )
}
