import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mr-8 mt-10 gap-10">
        {/* card1 */}
        <div className=" border px-[60px] py-10 flex flex-col">
            <div className="">
                <div className=" flex items-center">
                   <h3 className=' text-white text-[40px] font-[600]'>0 </h3>
                   <span className=' text-white mt-4'>$</span> 
                </div>
                <span className=' text-white text-[20px] font-[600]'>Free</span>
            </div>
            <div className=" text-[#BBBBBB] mt-[40px] flex flex-col gap-3">
                <span>Premiun Icons</span>
                <span>Quality Logo</span>
                <span className=' opacity-50'>Stock Images</span>
                <span className=' opacity-50'>Free Support</span>
            </div>
            <div className=" mt-10">
                <button className=' px-10 py-4 font-[500] bg-white'>Purchase</button>
            </div>
        </div>

          {/* card2 */}
          <div className=" border px-[60px] py-10 flex flex-col relative">
          <div className=" absolute top-[-15px] left-40">
                <span className=' px-6 py-3 bg-white text-sm'>Popular</span>
            </div>
            <div className="">
                <div className=" flex items-center">
                   <h3 className=' text-white text-[40px] font-[600]'>30 </h3>
                   <span className=' text-white mt-4'>$</span> 
                </div>
                <span className=' text-white text-[20px] font-[600]'>Basic</span>
            </div>
            <div className=" text-[#BBBBBB] mt-[40px] flex flex-col gap-3">
                <span>Premiun Icons</span>
                <span>Quality Logo</span>
                <span className=' opacity-50'>Stock Images</span>
                <span className=' opacity-50'>Free Support</span>
            </div>
            <div className=" mt-10">
                <button className=' px-10 py-4 font-[500] bg-white'>Purchase</button>
            </div>
        </div>

          {/* card3 */}
          <div className=" border px-[60px] py-10 flex flex-col">
            <div className="">
                <div className=" flex items-center">
                   <h3 className=' text-white text-[40px] font-[600]'>70 </h3>
                   <span className=' text-white mt-4'>$</span> 
                </div>
                <span className=' text-white text-[20px] font-[600]'>Premuum</span>
            </div>
            <div className=" text-[#BBBBBB] mt-[40px] flex flex-col gap-3">
                <span>Premiun Icons</span>
                <span>Quality Logo</span>
                <span className=' opacity-50'>Stock Images</span>
                <span className=' opacity-50'>Free Support</span>
            </div>
            <div className=" mt-10">
                <button className=' px-10 py-4 font-[500] bg-white'>Purchase</button>
            </div>
        </div>

         </div>
    </div>
  )
}

export default Pricing
