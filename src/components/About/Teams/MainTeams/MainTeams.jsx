import one from "../../../../assets/About/teams/Image (1).png";
import two from "../../../../assets/About/teams/Image (2).png";
import three from "../../../../assets/About/teams/Image (3).png";
import four from "../../../../assets/About/teams/Image (4).png";
import send from "../../../../assets/About/Send.png";
import { FaLinkedin } from "react-icons/fa6";
export default function MainTeams() {

    const teams = [
        {
        imag : one,
        name : "Max Mitchell" ,
        Position : "Founder" 
        } , 
        {
        imag : two,
        name : "Sarah Johnson" ,
        Position : "Chief Real Estate Officer"   
            } , 
        {
        imag : three,
        name : "David Brown" ,
        Position : " Head of Property Management" 
        } , 
        {
            imag : four ,
            name : "Jasmine Alexander" ,
            Position : " Legal Counsel" 
            } ,      
    ]

  return (
    <>
      <div className="grid grid-cols-12 lg:mx-20 gap-y-4 gap-x-1">

        {
            teams.map((item , index)=>{
                return <>
                
                <div key={index + Math.random()} className="lg:col-span-3 md:col-span-6 col-span-12    mx-4 md:mx-5 lg:mx-0  ">
          <div className="mainColor  shadow border border-[#262626] rounded-xl flex flex-col items-left  sm:mx-14  md:mx-0 lg:mx-0 xl:mx-5    ">
            <div className="titles-Card   ">
              <div className=" flex justify-center  my-5 mx-3 flex-col items-center relative">
                <img src={item.imag} alt="" />
              <div className="bg-[#703BF7] inline-block py-2 px-4 rounded-3xl absolute bottom-[-10px]  cursor-pointer">
                <FaLinkedin className=" text-white" />
              </div>
              </div>
              <h3 className="text-white lg:text-lg text-base text-center font-semibold line-clamp-1">
                {item.name}
              </h3>
              <p className="text-[#9999] xl:text-base text-sm text-center lg:line-clamp-3 my-1">
                {item.Position}
              </p>
              <div className="flex justify-between my-4 bg-[#1a1a1a] border border-[#242424]   mx-5 py-2 rounded-full">
              <input type="text" placeholder="Say Hello 👋" className="bg-[#1a1a1a]  rounded-full pl-3  text-sm text-white placeholder:text-white focus:outline-none focus:border-[#703BF7] xl:w-[70%] " />
              <div className="bg-[#703BF7] p-2 rounded-full flex items-center mr-3 lg:ml-[-50px] xl:ml-0 cursor-pointer">
                <img src={send} alt="" className="size-3 " />
              </div>
              </div>
            </div>
          </div>
        </div>
                </>
            })
        }
        
      </div>
    </>
  );
}
