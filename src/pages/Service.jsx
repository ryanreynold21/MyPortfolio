import React, { useState } from 'react'
import RootLayout from '../layout/RootLayout'
import ServiceCard from '../component/ServiceCard'
import Pricing from '../component/Pricing'
import ServiceDetail from '../component/ServiceDetail'

const Service = () => {
  const [show,setShow] = useState(false)

  return (
    <>
    {show && <ServiceDetail show={show} setShow={setShow}/>}
    <RootLayout>
      <section>
        <div className="">
          {/* Section */}
          <div className=" mt-[100px] lg:mt-[120px] mb-[50px] lg:mb-[80px] ml-[20px] lg:ml-[50px] flex flex-col gap-5">
            <div className=" p-2 bg-[#3C3D42] text-[#959595] w-[100px]">
              <span className=' font-bold'>SERVICES</span> 
            </div>
            <h1 className=' text-white text-[25px] lg:[text-30px] font-[800]'>What I Do</h1>
          </div>
          {/* Card */}
          <div className="ml-[20px] lg:ml-[50px]">
            <ServiceCard show={show} setShow={setShow} />
          </div>
          {/* fun fact */}
          <div className=" bg-[#494B50]">
              <div className="ml-[20px] lg:ml-[50px]">
                  <div className=" mr-8">
                    <h3 className=' text-white text-[20px] font-[700] pt-[100px]'>Fun Fact</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 pb-[150px]">
                      <div className=" border px-[60px] py-10 flex flex-col items-center gap-4">
                        <h3 className=' text-white text-[18px] font-[700]'>7+</h3>
                        <span className=' text-[#BBBBBB] text-[15px]'>Projects Completed</span>
                      </div>
                      <div className=" border px-[60px] py-10 flex flex-col items-center gap-4">
                        <h3 className=' text-white text-[18px] font-[700]'>3k+</h3>
                        <span className=' text-[#BBBBBB] text-[15px]'>Happy Client</span>
                      </div>
                      <div className=" border px-[60px] py-10 flex flex-col items-center gap-4">
                        <h3 className=' text-white text-[18px] font-[700]'>9k+</h3>
                        <span className=' text-[#BBBBBB] text-[15px]'>Line Of Code</span>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          {/* pricing */}
          <div className="ml-[20px] lg:ml-[50px] mb-28">
            <div className="">
             <h3 className=' text-white text-[20px] font-[700] pt-[100px]'>Pricing</h3>
             <Pricing />
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
    </>
  )
}

export default Service
