import React from 'react'
import RootLayout from '../layout/RootLayout'

const Contact = () => {
  return (
    <RootLayout>
      <section>
        <div className="">
          {/* contact */}
          <div className=" mt-[100px] lg:mt-[120px] mb-[50px] lg:mb-[80px] ml-[20px] lg:ml-[50px] flex flex-col gap-5">
            <div className=" p-2 bg-[#3C3D42] text-[#959595] w-[100px]">
              <span className=' font-bold'>CONTACT</span> 
            </div>
            <h1 className=' text-white text-[25px] lg:[text-30px] font-[800]'>Get In Touch</h1>
          </div>
          {/* map */}
          <div className=" mx-[20px] md:mx-[30px] lg:mx-[50px] h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.188767404719!2d96.18895454502409!3d16.86655412151727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193bf69c3aeeb%3A0xcefeaee48731458c!2sSepak%20Takraw%20Factory!5e0!3m2!1sen!2smm!4v1679830505158!5m2!1sen!2smm"
              className="w-full h-full mt-5"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* form */}
          <div className=" h-screen mx-[20px] md:mx-[30px] lg:mx-[50px] mt-[60px] ">
            <form action="">
              <div className=" grid grid-cols-1 gap-10">
                <div className="w-full">
                <input placeholder='Name' type="text" className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-white text-white text-[17px] placeholder:text-[17px]"/>
                </div>
                <div className="">
                <input placeholder='Email' type="text" className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-white text-white text-[17px] placeholder:text-[17px]"/>
                </div>
                <div className=" w-full">
                  <textarea name="" placeholder='Message' className="mt-1 block w-full p-4 bg-[#34353A] border border-slate-500 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-white text-white text-[17px] placeholder:text-[17px]" id="" cols="100" rows="6"></textarea>
                </div>
                <div className="">
                  <div className="">
                    <button onClick={(e) => e.preventDefault()} className=' bg-white text-black px-[40px] py-[15px]'>Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

export default Contact
