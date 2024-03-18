import pettern from '../../../assets/contact/ContactPettern.png'
import img1 from '../../../assets/contact/team/Image.png'
import img2 from '../../../assets/contact/team/Image-1.png'
import img3 from '../../../assets/contact/team/Image-2.png'
import img4 from '../../../assets/contact/team/Image-3.png'
import img5 from '../../../assets/contact/team/Image-4.png'
import img6 from '../../../assets/contact/team/Image-5.png'
import starts from '../../../assets/Home Page/Stars.png'

export default function Gallery() {
  return (
    <>
      <section className="my-5 ">
        <div className="grid grid-cols-12 gap-3 lg:mx-20 mx-4 lg:p-16 p-5 relative bg-[#141414] overflow-hidden rounded-lg border border-[#242424]">
          <div className="col-span-6 z-20">
            <img src={img1} alt="" className="w-full" />
          </div>
          <div className="col-span-6 z-20">
            <img src={img3} alt="" className="w-full" />
          </div>
          <div className="col-span-6 z-20">
            <img src={img2} alt="" className="w-full" />
          </div>
          <div className="col-span-3 z-20">
            <img src={img4} alt="" className="w-full" />
          </div>
          <div className="col-span-3 z-20">
            <img src={img5} alt="" className="w-full" />
          </div>
          <div className=" md:col-span-6 col-span-12 z-20">
          <div className='  mx-4 '>
            <img src={starts} alt="" className='w-14 h-7 mb-5' />
            <h2 className=' lg:text-3xl xl:text-5xl text-2xl font-semibold text-white'>
            Explore {"Estatein'"}s World
            </h2>
            <div className='w-full flex justify-between items-center pb-10'>
                <p className='text-[#9999]  mt-3  lg:w-full xl:text-base text-sm '>
                Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>

            </div>
            
        </div>
          </div>
          <div className="md:col-span-6 col-span-12 z-20">
            <img src={img6} alt="" className="w-full" />
          </div>

          <img src={pettern} alt="" className="absolute top-0 z-10  h-full" />
        </div>
      </section>
    </>
  );
}
