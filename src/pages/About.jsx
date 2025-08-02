import React, { useEffect, useState } from "react";
import RootLayout from "../layout/RootLayout";
import akw from "../images/akw2.jpg";
import { status1 } from "../component/status";
import { status2 } from "../component/status";
import { RiArrowRightSFill } from "react-icons/ri";
import Testimonial from "../component/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const cvFilePath = "./myCV.pdf";

  return (
    <RootLayout>
      <section>
        <div className="" data-aos="fade-right" data-aos-duration="1000">
          {/* about */}
          <div className=" mt-[100px] lg:mt-[120px] mb-[50px] lg:mb-[80px] ml-[20px] lg:ml-[50px] flex flex-col gap-5">
            <div className=" p-2 bg-[#3C3D42] text-[#959595] w-[80px]">
              <span className=" font-bold">ABOUT</span>
            </div>
            <h1 className=" text-white text-[25px] lg:[text-30px] font-[800]">
              About Me
            </h1>
          </div>
          {/* Photo */}
          <div className="flex justify-center items-center ">
            <img
              src={akw}
              className="h-[200px] md:h-[400px] lg:h-[600px] min-w-[90%] object-cover shadow-xl"
              alt=""
            />
          </div>
          {/* name */}
          <div className=" mx-[20px] md:mx-[30px] lg:mx-[50px] mt-[40px]  mb-[50px] border-b border-[#BBBBBB50] pb-[22px] flex flex-col gap-2">
            <h3 className=" text-[20px] lg:text-[22px] font-[700] text-white">
              Aung Kyaw Win
            </h3>
            <span className=" text-[#bbbbbb]">Front-end Developer</span>
            {/* <p className=' w-full bg-[#FFFFFF] h-[1px]'></p> */}
          </div>
          {/* myself */}
          <div className="mx-[20px] md:mx-[30px] lg:mx-[50px]">
            <div className=" text-[13px] lg:text-[15px] text-[#BBBBBB] flex flex-col gap-5 border-b border-[#BBBBBB50] pb-[30px]">
              <p className=" leading-6 lg:leading-7">
                Hello, I'm Aung Kyaw Win, an experienced React developer. My
                journey began in web development with React, but over the last
                decade, I've devoted most of my waking hours to mastering React
                and creating exceptional web applications.
              </p>
              <p className=" leading-6 lg:leading-7">
                My specialty lies in crafting full-fledged platforms from
                scratch, where I transform ideas into reality. I take great
                pride in delivering websites and applications with a unique,
                outstanding, and contemporary look-and-feel. Thanks to my
                extensive knowledge of web mechanics, I excel in optimizing
                complex integrations to ensure minimal maintenance while
                ensuring they run smoothly for years to come. As a React
                developer, I'm passionate about building seamless user
                experiences and pushing the boundaries of what's possible with
                cutting-edge technologies.
              </p>
            </div>
          </div>
          {/* status */}
          <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] flex flex-wrap justify-between py-[40px] pr-[100px] border-b border-[#BBBBBB50]">
            <div className="">
              <ul className="flex flex-col gap-3">
                {status1.map((status) => (
                  <li
                    className=" grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-3 text-[13px] md:text-[14px] lg:text-[15px]"
                    key={status.id}
                  >
                    <span className=" text-white font-[700]">
                      {status.name}
                    </span>
                    <span className=" lg:col-span-2 text-[#BBBBBB] font-[400]">
                      {status.data}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2 md:mt-3 lg:mt-0">
              <ul className="flex flex-col gap-3">
                {status2.map((status) => (
                  <li
                    className=" grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-16 md:gap-4 lg:gap-3 text-[13px] md:text-[14px] lg:text-[15px]"
                    key={status.id}
                  >
                    <span className=" text-white font-[700]">
                      {status.name}
                    </span>
                    <span className=" lg:col-span-2 text-[#BBBBBB] font-[400]">
                      {status.data}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* button */}
          <div className="">
            <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] mt-[50px] mb-[100px]">
              <button className=" bg-white text-black px-[40px] py-[15px]">
                {/* <a href='https://drive.google.com/file/d/11kOxcxy7dwq6lviotaU_VdcTFJghZySU/view?usp=drive_link' target='_blink'>Download CV</a> */}
                <a href={cvFilePath} download>
                  Download CV
                </a>
              </button>
            </div>
          </div>
          {/* skills */}
          <div className=" px-[20px] md:px-[30px] lg:px-[50px] bg-[#494B50] py-[100px]">
            <div className="">
              <h1 className="text-white text-[18px] md:text-[20px] lg:text-[22px] mb-10 md:mb-8 font-[700]">
                My Skills
              </h1>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Column */}
                <div className="">
                  {/* HTML */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">HTML5</div>
                    <div className="ml-auto text-sm text-white">90%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex mb-5">
                    <div className="bg-[#FFFFFF] h-1 w-[90%]"></div>
                    <div className="bg-[#595B60] h-1 w-[10%]"></div>
                  </div>

                  {/* CSS */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">CSS</div>
                    <div className="ml-auto text-sm text-white">85%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex mb-5">
                    <div className="bg-[#FFFFFF] h-1 w-[85%]"></div>
                    <div className="bg-[#595B60] h-1 w-[15%]"></div>
                  </div>

                  {/* Javascript */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">JavaScript</div>
                    <div className="ml-auto text-sm text-white">80%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex mb-5">
                    <div className="bg-[#FFFFFF] h-1 w-[80%]"></div>
                    <div className="bg-[#595B60] h-1 w-[20%]"></div>
                  </div>

                  {/* REACT */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">REACT</div>
                    <div className="ml-auto text-sm text-white">85%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex">
                    <div className="bg-[#FFFFFF] h-1 w-[85%]"></div>
                    <div className="bg-[#595B60] h-1 w-[15%]"></div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="">
                  {/* TypeScript */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">TypeScript</div>
                    <div className="ml-auto text-sm text-white">75%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex mb-5">
                    <div className="bg-[#FFFFFF] h-1 w-[75%]"></div>
                    <div className="bg-[#595B60] h-1 w-[25%]"></div>
                  </div>

                  {/* Tailwind CSS */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">Tailwind CSS</div>
                    <div className="ml-auto text-sm text-white">95%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex mb-5">
                    <div className="bg-[#FFFFFF] h-1 w-[95%]"></div>
                    <div className="bg-[#595B60] h-1 w-[5%]"></div>
                  </div>

                  {/* Redux */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">Redux</div>
                    <div className="ml-auto text-sm text-white">80%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex mb-5">
                    <div className="bg-[#FFFFFF] h-1 w-[80%]"></div>
                    <div className="bg-[#595B60] h-1 w-[20%]"></div>
                  </div>

                  {/* Next.js */}
                  <div className="flex px-2 md:px-3 lg:px-4">
                    <div className="text-semibold text-white">Next.js</div>
                    <div className="ml-auto text-sm text-white">75%</div>
                  </div>
                  <div className="px-2 md:px-3 lg:px-4 mt-2 flex">
                    <div className="bg-[#FFFFFF] h-1 w-[75%]"></div>
                    <div className="bg-[#595B60] h-1 w-[25%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* knowledge & Interest */}
          <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] my-[100px]">
            <div className=" flex flex-wrap gap-10 md:gap-40 lg:gap-60">
              {/* Knowledge */}
              <div className="">
                <h1 className=" text-white text-[20px] font-[700]">
                  Knowledge
                </h1>
                <div className=" mt-[40px]">
                  <ul className=" flex flex-col gap-3">
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">
                        Bootstrap, TailwindCss
                      </span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">
                        React, Vue, Laravel
                      </span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">
                        Stylus, Sass, Less
                      </span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">Redux,RTK Query</span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">React Native</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Interest */}
              <div className="">
                <h1 className=" text-white text-[20px] font-[700]">
                  Interests
                </h1>
                <div className=" mt-[40px]">
                  <ul className=" flex flex-col gap-3">
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">Make UI/UX Design</span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">Create Mobile App</span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">Site Optimization</span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">Custom Website</span>
                    </li>
                    <li className=" flex gap-4 items-center  text-white">
                      <RiArrowRightSFill className="text-xl" />
                      <span className=" text-[#BBBBBB]">Learn Ecommerce</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div className="px-[20px] md:px-[30px] lg:px-[50px] py-[100px] bg-[#494B50]">
            <h1 className="text-white text-[20px] lg:text-[22px] font-[700] mb-[50px]">
              Experience
            </h1>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[17px] top-0 bottom-0 w-[2px] bg-[#595B60]"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {/* Experience 1 */}
                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-[35px] h-[35px] bg-[#595B60] rounded-full border-4 border-[#494B50] flex-shrink-0"></div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      {/* Date */}
                      <div className="bg-[#595B60] text-white px-5 py-3 rounded-full text-[16px] font-medium mb-3 lg:mb-0 inline-block w-fit">
                        2023 - Now
                      </div>

                      {/* Company and Role */}
                      <div className="lg:text-right">
                        <h3 className="text-white text-[18px] lg:text-[20px] font-[700]">
                          Movie and Entertainment
                        </h3>
                        <p className="text-[#BBBBBB] text-[14px] lg:text-[16px]">
                          Frontend Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-[35px] h-[35px] bg-[#595B60] rounded-full border-4 border-[#494B50] flex-shrink-0"></div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      {/* Date */}
                      <div className="bg-[#595B60] text-white px-5 py-3 rounded-full text-[16px] font-medium mb-3 lg:mb-0 inline-block w-fit">
                        2022 - 2023
                      </div>

                      {/* Company and Role */}
                      <div className="lg:text-right">
                        <h3 className="text-white text-[18px] lg:text-[20px] font-[700]">
                          CMS, POS, and Admin Dashboard
                        </h3>
                        <p className="text-[#BBBBBB] text-[14px] lg:text-[16px]">
                        Frontend Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="flex items-start gap-6 hidden">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-[35px] h-[35px] bg-[#595B60] rounded-full border-4 border-[#494B50] flex-shrink-0"></div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      {/* Date */}
                      <div className="bg-[#595B60] text-white px-4 py-2 rounded-full text-sm font-medium mb-3 lg:mb-0 inline-block w-fit">
                        2012 - 2016
                      </div>

                      {/* Company and Role */}
                      <div className="lg:text-right">
                        <h3 className="text-white text-[18px] lg:text-[20px] font-[700]">
                          Innovations Park
                        </h3>
                        <p className="text-[#BBBBBB] text-[14px] lg:text-[16px]">
                          Web Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial */}
          <div className=" bg-[#494b50] pb-[80px]">
            <div className="mx-[20px] md:mx-[30px] lg:mx-[50px] pt-[100px]">
              <h1 className="text-white text-[20px] font-[700]">
                Testimonials
              </h1>
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default About;
