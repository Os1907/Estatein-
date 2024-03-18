import grad from '../../../../assets/About/grad.png'

export default function ContentNavigation() {
    const Exper =[
        {
            number:"01" ,
            title : "Discover a World of Possibilities", 
            text : "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
        } ,
        {
            number:"02" ,
            title : "Narrowing Down Your Choices", 
            text : "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
        } ,
        {
            number:"03" ,
            title : "Personalized Guidance", 
            text : "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
        } ,
        {
            number:"04" ,
            title : "See It for Yourself", 
            text : "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
        } ,
        {
            number:"05" ,
            title : "Making Informed Decisions", 
            text : "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
        } ,
        {
            number:"06" ,
            title : "Getting the Best Deal", 
            text : "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
        } ,
    ]
  return (
    <>

<div className="grid grid-cols-12 lg:mx-20 gap-y-3 gap-x-3 ">

    {
        Exper.map((item , index)=>{
            return <>
            <div key={index + Math.random()} className="lg:col-span-4 md:col-span-6 col-span-12 z-20   mx-2 lg:mx-0  ">
                    <p className='border-l border-2-b border-[#703BF7]  inline-block pr-24 pb-2  pl-2 text-white z-30 text-lg'> Step {item.number}</p>
                  <div className="mainColor relative shadow border-r border-b border-t border-[#262626] z-20 flex flex-col items-left    md:mx-0  rounded-b-xl rounded-e-lg hover:border hover:border-[#703BF7] transition-all duration-700 ">
                    <div className="titles-Card  p-5 ">
                      <h3 className="text-white lg:text-lg text-base text-left font-semibold line-clamp-1">
                      {item.title}
                      </h3>
                      <p className="text-[#9999] xl:text-base text-sm my-4 line-clamp-3 ">
                      {item.text}
                      </p>
                    </div>
                    <img src={grad} alt="" className='absolute top-[-1px] lg:w-full left-0 w-[70%] sm:w-[50%] ' />
                  </div>
                </div>
            </>
        })
    }
                
                
    </div>
    
    </>
  )
}
