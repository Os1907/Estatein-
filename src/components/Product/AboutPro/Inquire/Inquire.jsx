import starts from "../../../../assets/Home Page/Stars.png";

export default function Inquire() {
  return (
    <>
    <div className="lg:mt-20 mt-10 lg:col-span-4 col-span-12 ">
        <img src={starts} alt="" className="w-14 h-7 mb-5" />
        <h2 className="lg:text-4xl text-3xl font-semibold text-white">
        Inquire About Seaside Serenity Villa
        </h2>
        <div className="w-full flex justify-between items-center pb-10">
          <p className="text-[#9999]  line-clamp-4  lg:text-base text-sm">
          Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
          </p>
        </div>
      </div>
    
    </>
  )
}
