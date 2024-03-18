import main from '../../../assets/products/main.png'
import main2 from '../../../assets/products/main2.png'
import img1 from '../../../assets/products/Image.png'
import img2 from '../../../assets/products/Image-1.png'
import img3 from '../../../assets/products/Image-2.png'
import img4 from '../../../assets/products/Image-3.png'
import img5 from '../../../assets/products/Image-4.png'
import img6 from '../../../assets/products/Image-5.png'
import img7 from '../../../assets/products/Image-6.png'
import img8 from '../../../assets/products/Image-7.png'
import img9 from '../../../assets/products/Image-8.png'
import { useState } from 'react'
export default function ImgSlider() {
    const images = [
      {
        image: img1,
      },
      {
        image: main2,
      },
      {
        image: img2,
      },
      {
        image: img3,
      },
      {
        image: img4,
      },
      {
        image: img5,
      },
      {
        image: img6,
      },
      {
        image: img7,
      },
      {
        image: img8,
      },
      {
        image: img9,
      },
      
    ];
    const [view, setView] = useState(main)
    const [viewTwo, setViewTwo] = useState(true)

  return (
    <>
    <div className="lg:mx-20 mx-4 bg-[#1a1a1a] mt-5 p-6 rounded-lg border border-[#242424] flex flex-col ">
        <div className="lg:grid lg:grid-flow-col flex  justify-center lg:gap-x-3  mt-2 mb-4 border border-[#242424] p-2 rounded-lg mainColor">
            {
                images.map((i ,index)=>{
                    return <>
                    <div  onClick={()=>{
                        setView(`${i.image}`)
                        setViewTwo (false)

                        if (index == 0 ) {
                        setView(main)
                        }
                    }}
                     key={index} className='cursor-pointer'>
            <img src={i.image} alt="" className={  index > 4 ? 'h-24 w-28 hidden xl:inline ' : 'h-16 w-24 sm:w-44 sm:h-24 px-1  '} />
        </div>
                    </>
                })
            }

        </div>

        <div className='w-full flex justify-center gap-x-5 p-2 -order-1 lg:order-1'>
            <img src={view} alt="" className={viewTwo?  'size-[50%] ' :"lg:size-[60%] size1 rounded-3xl scale-in-ver-top"} />
            {
                viewTwo? <img src={main2} alt="" className='size-[50%] ' /> : ""
            }
            
        </div>




    </div>
    
    
    </>
  )
}

