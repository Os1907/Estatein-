

export default function MonthlyCost() {
  return (
    <>
    <div className="py-8 my-8 lg:px-10 px-5 border border-[#242424] rounded-lg my-Shadow">
        <div className="mt-2 flex justify-between items-center pb-5 border-b border-[#242424]">
            <p className="text-white">Monthly Costs</p>
            <p className="text-white p-3 rounded-lg text-sm cursor-pointer bg-[#1a1a1a] border border-[#242424]">
                Learn More
            </p>
        </div>
        <div className="my-5 border-b border-[#242424] pb-5"> 
                <h5 className="text-[#999]  my-2">Property Taxes</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$ 1.250</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> Approximate monthly property tax based on the sale price and local rates</span>
                </div>
                 </div>
        <div className="my-5  "> 
                <h5 className="text-[#999]  my-2">{"Homeowners"} Association Fee</h5>
                <div className="flex  items-center ">
                    <p className="text-white text-xl font-semibold">$ 300</p>
                    <span className=" ml-3 text-[#999] bg-[#1a1a1a] border  border-[#242424] py-2 px-4 text-[12px] lg:text-[9px] xl:text-sm rounded-full"> Monthly fee for common area maintenance and security</span>
                </div>
                 </div>
    </div>
    
    
    
    
    </>
  )
}
