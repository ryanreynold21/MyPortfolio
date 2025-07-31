import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Sidebar = ({sidebarOpen}) => {
  const {open} = useSelector(state => state.card)
  const data = [{
    id : 1,
    name:'Home',
    to:'/'
  },{
    id : 2,
    name:'About',
    to:'/about'
  },{
    id : 3,
    name:'Service',
    to:'/service'
  },{
    id : 4,
    name:'Portfolio',
    to:'/portfolio'
  },{
    id : 5,
    name:'News',
    to:'/news'
  },{
    id : 6,
    name:'Contact',
    to:'/contact'
  },]
  const contentVariants = {
    hidden :{x:'-100px'},
    visible:{
      x:0,
      transition:{duration:0.6}
    }
  }
  const exitVariants = {
   exit : {x:'100px'},
   transition :{duration : 1}
  }
  return (
    <motion.div
    {...(open === 'open' ? { variants: contentVariants } : { variants: exitVariants } )}
    animate='visible'
    initial='hidden'
    className='  w-[250px] lg:w-[380px] flex items-center h-screen shadow-lg fixed left-0 bg-[#494B50] z-50'>
      <div className="">
        {/* Sidebar Brand */}
        <div className=" text-white text-[35px] font-bold hidden xl:block ml-28 mb-10">
          <h3 className=' font-montserrat tracking-[6px]'>AKW</h3>
        </div>
        {/* sidebar */}
        <div className=" mt-48 lg:mt-12 lg:ml-16">
          <ul className='text-[#BBBBBB]  font-montserrat text-[18px] flex ml-5 lg:ml-10 flex-col gap-3 '>
            {data?.map(item => {
            return(
              <NavLink key={item.id} to={item.to}>
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
