import electric from '../../../../assets/Home Page/Building/Icons/electric.png'
export default function KeyFeature() {
    const feature = [
        {
            title : "Expansive oceanfront terrace for outdoor entertaining"
        } ,
        {
            title : "Gourmet kitchen with top-of-the-line appliances"
        } ,
        {
            title : "Private beach access for morning strolls and sunset views"
        } ,
        {
            title : "Master suite with a spa-inspired bathroom and ocean-facing balcony"
        } ,
        {
            title : "Private garage and ample storage space"
        } ,

    ]
  return (
    <>
    <div className="md:col-span-6 col-span-12 my-Shadow">
    <div className="border border-[#242424] rounded-lg px-10 py-5">
        <h3 className="text-white font-semibold text-lg mt-7">
        Key Features and Amenities
        </h3>
        {
            feature.map((i , index) =>{
                return <>
                 <div key={index} className="w-full p-2 my-7 flex items-center border-l-2 border-[#703bf7] bg-gradient-to-r from-[#1a1a1a]">
            <img src={electric} alt="" className='size-5' />
            <p className='ml-2 text-[#999]'>{i.title}</p>
        </div>
                </>
            })
        }
       
    </div>
    </div>
    
    
    
    </>
  )
}
