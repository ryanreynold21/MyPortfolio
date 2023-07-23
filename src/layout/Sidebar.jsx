import React from 'react'
import { NavLink } from 'react-router-dom'

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
    <div className='  w-[440px] h-screen shadow-2xl fixed left-0 bg-[#494B50] z-50'>
      <div className="">
        {/* Sidebar Brand */}
        <div className=" text-white text-[40px] font-bold hidden lg:block ml-28 mt-[100px]">
          <h1>A K W</h1>
        </div>
        {/* sidebar */}
        <div className=" mt-16">
          <ul className=' text-[#BBBBBB] text-[20px] flex ml-28 flex-col gap-3'>
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
    </div>
  )
}

export default Sidebar
