import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const data = [{
    name:'Home',
    to:'/'
  },{
    name:'About',
    to:'/about'
  },{
    name:'Service',
    to:'/service'
  },{
    name:'Portfolio',
    to:'/portfolio'
  },{
    name:'News',
    to:'/news'
  },{
    name:'Contact',
    to:'/contact'
  },]
  return (
    <motion.div
    animate={{x:0}}
    transition={{duration:0.5}}
    initial={{x:"-100px"}}
    className='  w-[250px] lg:w-[380px] h-screen shadow-lg fixed left-0 bg-[#494B50] z-50'>
      <div className="">
        {/* Sidebar Brand */}
        <div className=" text-white text-[40px] font-bold hidden lg:block ml-28 mt-[100px]">
          <h1>A K W</h1>
        </div>
        {/* sidebar */}
        <div className=" mt-48 lg:mt-12 lg:ml-16">
          <ul className=' text-[#BBBBBB] text-[16px] lg:text-[20px] flex ml-5 lg:ml-10 flex-col gap-3 '>
            {data?.map(item => {
            return(
              <NavLink to={item.to}>
            <li>{item.name}</li>
              </NavLink>
            )  
            } )}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
