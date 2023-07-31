import React from 'react'
import {AiOutlineDesktop} from 'react-icons/ai'

const ServiceCard = () => {
    const data= [{
        id:"1",
        number : '01',
        title: "Unique Design",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },{
        id:"2",
        number : '02',
        title: "Different Layout",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"3",
        number : '03',
        title: "Make It Simple",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"4",
        number : '04',
        title: "Responsiveness        ",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"5",
        number : '05',
        title: "Testing for Perfection",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },
    {
        id:"6",
        number : '06',
        title: "Advanced Options",
        desc: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites."
    },]
  return (
    <div>
      <div
        name="services"
        className=" mb-[150px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mr-5">
          {data.map((item) => (
            <div className="group">
              <div className=" bg-[#494B50] shadow-xl w-full px-[30px] py-[40px] rounded-sm">
                <div className=" mb-[22px] rounded-full inline-block px-5 py-4 bg-[#4F5155] text-white text-[15px] font-[700] group-hover:bg-gray-500 transition-all duration-[400ms]">
                  {item.number}
                </div>
                <div>
                  <h5 className="text-[18px] mb-3 font-[700] text-white">{item.title}</h5>
                  <p className="text-[15px] text-[#BBBBBB] py-5 leading-8">{item.desc}</p>
                  <div className="relative flex items-center mb-8 text-white">
                    <p className=' absolute opacity-0 group-hover:opacity-100 left-[-90px] group-hover:translate-x-[90px] transition-all duration-[200ms]'>Read more</p>
                     <p className=' bg-white w-[30px] h-[2px] group-hover:w-[30px] group-hover:translate-x-[100px] transition-all duration-[400ms]'></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard