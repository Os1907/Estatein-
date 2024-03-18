import starts from "../../../../assets/Home Page/Stars.png";

export default function TitleCompre() {
  return (
    <>
     <div className="lg:mt-12 mt-5 lg:mx-20 mx-4">
        <img src={starts} alt="" className="w-14 h-7 mb-5" />
        <h2 className="lg:text-4xl text-3xl font-semibold text-white">
        Comprehensive Pricing Details
        </h2>
        <div className=" flex justify-between items-center pb-10 w-[85%] my-2">
          <p className="text-[#9999] lg:line-clamp-2   lg:text-base text-sm">
          At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision
          </p>
        </div>
      </div>
    
    
    
    </>
  )
}
