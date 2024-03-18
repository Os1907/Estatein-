import TitleModelOne from "./TitleModelOne";
import ModelOne from "./ModelOne";
import ModelTwo from "./ModelTwo";
import TitleModelTwo from "./TitleModelTwo";
import TitleModelThree from "./TitleModelThree";
import ModelThree from "./ModelThree";

export default function Models() {
    
  return (
    <>
        <div>
        <TitleModelOne/>
        <div className="grid grid-cols-12 lg:mx-20 mx-4 gap-5">
            <ModelOne/>
        </div>
        <TitleModelTwo/>
        <div className="grid grid-cols-12 lg:mx-20 mx-4 gap-5">
            <ModelTwo/>
        </div>
    <div className="grid grid-cols-12 mt-20 overflow-hidden border-b border-[#242424]">

        <TitleModelThree/>
            <ModelThree/>
        </div>

    </div>
    
    
    
    </>
  )
}
