import icon from '../../../../assets/About/Valued/Icon (1).png'
import iconTwo from '../../../../assets/About/Valued/Icon (2).png'
import Slider from "react-slick";

export default function MainValued() {
    var settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
            },
          },
        ],
      };
    const details = [
      {
        year: 2019,
        category: "Luxury Home Development",
        Text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
      },
      {
        year: 2018,
        category: "Retail Space",
        Text: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
      },
      {
        year: 2019,
        category: "Luxury Home Development",
        Text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
      },
      {
        year: 2018,
        category: "Retail Space",
        Text: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
      },
      {
        year: 2019,
        category: "Luxury Home Development",
        Text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
      },
      {
        year: 2018,
        category: "Retail Space",
        Text: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
      },
    ];
  return (
    <>
    <div className="overflow-hidden">
    <Slider {...settings} className='grid grid-cols-12 lg:mx-20 mx-4 gap-y-4 gap-x-2 '>

        {
            details.map((item , index)=>{
                return <>
                 <div key={index + Math.random()} className="md:col-span-6 col-span-12 border-[5px] border-[#242424] lg:mx-5 md:mx-2 p-10 rounded-xl ">
                <span className="text-[#9999] text-sm ">Sine {item.year}</span>
                <div className=" flex justify-between items-center">
                    <p className="text-white text-xl font-semibold">{"ABC Corporation"}</p>
                    <div>
                        <button className="px-3 py-2 bg-[#1a1a1a] rounded-lg border-[#242424] border text-white font-medium "> Visit WebSite</button>
                    </div>
                </div>
                <div className="flex mt-5">
                    <div className=" border-r border-[#242424] w-[50%]">
                        <div className='flex  items-center gap-1'>
                            <img src={icon} alt="" className='size-5' />  
                        <p className="text-sm text-[#999]"> Domain</p>
                        </div>
                        
                        
                        <p className="text-white">Commercial Real Estate</p>
                    </div>
                    <div className=" ml-10 w-[50%]">
                    <div className='flex  items-center gap-1'>
                            <img src={iconTwo} alt="" className='size-5' />  
                        <p className="text-sm text-[#999]"> Category</p>
                        </div>
                        <p className="text-white">{item.category}</p>
                    </div>


                </div>
                    <div className='w-full border border-[#242424] rounded-lg mt-4  p-4'>
                        <p className=' text-[#9999] mb-3'>What They Said 🤗</p>
                        <span className='text-white text-sm '>{item.Text}</span>
                    </div>
        </div>
        </>

            })
        }
        </Slider>
       
        
    </div>
    </>
  )
}
