import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isOpen } from '../app/cardSlice';

const Navbar = ({setSidebarOpen,sidebarOpen}) => {
  const {open} = useSelector(state => state.card)
  const dispatch = useDispatch();
  console.log(open)
  const handler = () => {
    setSidebarOpen(!sidebarOpen)
    if(open === 'open'){
      dispatch(isOpen('close'))
    }else{
      dispatch(isOpen('open'))
    }
  }
  return (
    <div className=' fixed top-0 z-50 shadow-md block xl:hidden'>
      <div className="flex bg-[#494B50] w-screen justify-between">
        <div className=" text-white py-3 px-5">
            <a className=' text-[25px] font-[600]' href="/">AKW</a>
        </div>
        <div className=" h-12 mt-2 mr-4" onClick={handler}>
          <button className=" px-2 py-3">
            <p className="w-8 h-[3px] border-b-[1px] bg-white"></p>
            <p className="w-8 h-[3px] border-b-[1px] my-2 bg-white"></p>
            <p className="w-8 h-[3px] border-b-[1px] bg-white"></p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar