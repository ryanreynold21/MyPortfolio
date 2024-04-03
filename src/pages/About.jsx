import React, { useEffect, useState } from 'react'
import RootLayout from '../layout/RootLayout'
import akw from '../images/akw.jpg'
import { status1 } from '../component/status'
import { status2 } from '../component/status'
import {RiArrowRightSFill} from 'react-icons/ri'
import Testimonial from '../component/Testimonial'
import AOS from 'aos'
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <RootLayout>
      <section>
        <div className="" data-aos="fade-right" data-aos-duration="1000">
          {/* about */}
          <div className=" mt-[100px] lg:mt-[120px] mb-[50px] lg:mb-[80px] ml-[20px] lg:ml-[50px] flex flex-col gap-5">
            <div className=" p-2 bg-[#3C3D42] text-[#959595] w-[80px]">
              <span className=' font-bold'>ABOUT</span> 
            </div>
            <h1 className=' text-white text-[25px] lg:[text-30px] font-[800]'>About Me</h1>
          </div>
          {/* Photo */}
          <div className="flex justify-center items-center">
            <img src={akw} className='h-[200px] md:h-[400px] lg:h-[600px] w-[350px] md:w-[600px] lg:w-[900px] object-cover object-top shadow-xl' alt="" />
          </div>
          {/* name */}
          <div className=" mx-[20px] md:mx-[30px] lg:mx-[50px] mt-[40px]  mb-[50px] border-b border-[#BBBBBB] pb-[22px] flex flex-col gap-2">
            <h3 className=' text-[20px] lg:text-[22px] font-[700] text-white'>Aung Kyaw Win</h3>
            <span className=' text-[#bbbbbb]'>Front-end Developer</span>
            {/* <p className=' w-full bg-[#FFFFFF] h-[1px]'></p> */}
          </div>
          {/* myself */}
          <div className="mx-[20px] md:mx-[30px] lg:mx-[50px]">
            <div className=" text-[13px] lg:text-[15px] text-[#BBBBBB] flex flex-col gap-5 border-b border-[#BBBBBB] pb-[30px]">
                <p className=' leading-6 lg:leading-7'>Hello, I'm Aung Kyaw Win, an experienced React developer. My journey began in web development with React, but over the last decade, I've devoted most of my waking hours to mastering React and creating exceptional web applications.</p>
                <p className=' leading-6 lg:leading-7'>My specialty lies in crafting full-fledged platforms from scratch, where I transform ideas into reality. I take great pride in delivering websites and applications with a unique, outstanding, and contemporary look-and-feel. Thanks to my extensive knowledge of web mechanics, I excel in optimizing complex integrations to ensure minimal maintenance while ensuring they run smoothly for years to come. As a React developer, I'm passionate about building seamless user experiences and pushing the boundaries of what's possible with cutting-edge technologies.</p>
            </div>
          </div>
          {/* status */}
          <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] flex flex-wrap justify-between py-[40px] pr-[100px] border-b border-[#BBBBBB]">
              <div className="">
                  <ul className='flex flex-col gap-3'>
                    {status1.map(status => (
                      <li className=' grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-3 text-[13px] md:text-[14px] lg:text-[15px]' key={status.id}>
                        <span className=' text-white font-[700]'>{status.name}</span>
                        <span className=' lg:col-span-2 text-[#BBBBBB] font-[400]'>{status.data}</span>
                      </li>
                    ))}
                  </ul>
              </div>
              <div className="mt-2 md:mt-3 lg:mt-0">
                  <ul className='flex flex-col gap-3'>
                    {status2.map(status => (
                      <li className=' grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-16 md:gap-4 lg:gap-3 text-[13px] md:text-[14px] lg:text-[15px]' key={status.id}>
                        <span className=' text-white font-[700]'>{status.name}</span>
                        <span className=' lg:col-span-2 text-[#BBBBBB] font-[400]'>{status.data}</span>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
          {/* button */}
          <div className="">
            <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] mt-[50px] mb-[100px]">
              <button className=' bg-white text-black px-[40px] py-[15px]'>
                <a href='https://drive.google.com/file/d/1rrZUSwKqgVD3QeV6yoZeVGBlYSMD3jGV/view?usp=drive_link' target='_blink'>Download CV</a>
              </button>
            </div>
          </div>
          {/* skills */}
          <div className=" px-[20px] md:px-[30px] lg:px-[50px] bg-[#494B50] py-[100px]">
            <div className="">
              <h1 className='text-white text-[18px] md:text-[20px] lg:text-[22px] mb-10 md:mb-2 font-[700]'>My Skills</h1>
              {/* html */}
              <div className="flex px-2 md:px-3 lg:px-4">
                <div className="text-semibold text-white">HTML5</div>
                <div className=" sm:mx-80 mx-[200px] text-sm text-white">90%</div>
              </div>
              <div className="px-2 md:px-3 lg:px-4 mt-2 flex">
                <div className="bg-[#FFFFFF] h-1 w-[90%] md:w-[60%] lg:w-[45%]"></div>
                <div className="bg-[#595B60] h-1 w-[10%] md:w-[20%] lg:w-[5%]"></div>
              </div> 

              {/* CSS */}
              <div className="flex px-2 md:px-3 lg:px-4 mt-5">
                <div className="text-semibold text-white">CSS</div>
                <div className=" sm:mx-80 mx-[200px] text-sm text-white">85%</div>
              </div>
              <div className="px-2 md:px-3 lg:px-4 mt-2 flex">
                <div className="bg-[#FFFFFF] h-1 w-[85%] md:w-[55%] lg:w-[43%]"></div>
                <div className="bg-[#595B60] h-1 w-[15%] md:w-[45%] lg:w-[7%]"></div>
              </div> 
              

              {/* Javascript */}
              <div className="flex px-2 md:px-3 lg:px-4 mt-5">
                <div className="text-semibold text-white">JavaScript</div>
                <div className=" sm:mx-80 mx-[200px] text-sm text-white">80%</div>
              </div>
              <div className="px-2 md:px-3 lg:px-4 mt-2 flex">
                <div className="bg-[#FFFFFF] h-1 w-[80%] md:w-[50%] lg:w-[40%]"></div>
                <div className="bg-[#595B60] h-1 w-[25%] md:w-[40%] lg:w-[10%]"></div>
              </div> 
              
              {/* REACT */}
              <div className="flex px-2 md:px-3 lg:px-4 mt-5">
                <div className="text-semibold text-white">REACT</div>
                <div className=" sm:mx-80 mx-[200px] text-sm text-white">85%</div>
              </div>
              <div className="px-2 md:px-3 lg:px-4 mt-2 flex">
                <div className="bg-[#FFFFFF] h-1 w-[85%] md:w-[55%] lg:w-[43%]"></div>
                <div className="bg-[#595B60] h-1 w-[15%] md:w-[45%] lg:w-[7%]"></div>
              </div> 
            </div>
          </div>
          {/* knowledge & Interest */}
          <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] my-[100px]">
            <div className=" flex flex-wrap gap-10 md:gap-40 lg:gap-60">

            {/* Knowledge */}
            <div className="">
              <h1 className=' text-white text-[20px] font-[700]'>Knowledge</h1>
              <div className=" mt-[40px]">
                <ul className=' flex flex-col gap-3'>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Bootstrap, TailwindCss</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>React, Vue, Laravel</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Stylus, Sass, Less</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Redux,RTK Query</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>React Native</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Interest */}
            <div className="">
              <h1 className=' text-white text-[20px] font-[700]'>Interests</h1>
              <div className=" mt-[40px]">
                <ul className=' flex flex-col gap-3'>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Make UI/UX Design</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Create Mobile App</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Site Optimization</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Custom Website</span>
                  </li>
                  <li className=' flex gap-4 items-center  text-white'>
                    <RiArrowRightSFill className='text-xl' />
                    <span className=' text-[#BBBBBB]'>Learn Ecommerce</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          {/* Testimonial */}
          <div className=" bg-[#494b50] pb-[80px]">
            <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] pt-[100px]">
              <h1 className='text-white text-[20px] font-[700]'>Testimonials</h1>
            <Testimonial />
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

export default About
