import Note from "./Note/Note";
import Fees from "./TitleCompre/Fees/Fees";
import Monthly from "./TitleCompre/Fees/Monthly/Monthly";
import IntialCost from "./TitleCompre/MonthlyCost/IntialCost/IntialCost";
import MonthlyCost from "./TitleCompre/MonthlyCost/MonthlyCost";
import TitleCompre from "./TitleCompre/TitleCompre";

export default function Compre() {
  return (
    <>
    <section>
    <TitleCompre/>
    <Note/>
    <div className="grid grid-cols-12 lg:mx-20 mx-4 my-10">
        <div className="lg:col-span-2 col-span-12 my-4 lg:my-0 ">
            <p className="text-[#999] text-lg">Listing Price</p>
            <p className="text-white text-3xl font-semibold">$ 1,250,000</p>
        </div>
        <div className="lg:col-span-10 col-span-12">
                <Fees/>
                <MonthlyCost/>
                <IntialCost/>
                <Monthly/>

        </div>
    </div>
    </section>
    
    
    
    </>
  )
}
