import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogDetail, increment } from '../app/cardSlice';

const NewsCard = ({data,show,setShow}) => {
  const dispatch = useDispatch();
  const {blog} = useSelector(state => state.card)
  
  const showData = (item) => {
    setShow(!show)
    dispatch(blogDetail(item))
  }

  return (
    <div className='relative'>
      <div
      onClick={() => showData(data)}
      className="w-[450px] shadow-xl rounded-md group bg-[#494B50]">
        <div className=" overflow-hidden">
          <img className=' w-[600px] h-[300px] object-cover  duration-980 transition-all hover:scale-110' src={data?.src} alt="" />
        </div>
        <div className=" px-10 py-5">
            <div className=' text-[#BBBBBB] text-[13px] lg:text-[13px] border-b border-[#8f8383] mb-6  p-2'>{data?.by}</div>
            <p className='font-[600] text-[18px] text-white'>{data?.title}</p>
            {/* readmore */} 
        <div className="relative flex items-center mb-8 text-white mt-5">
            <p className=' absolute opacity-0 group-hover:opacity-100 left-[-90px] group-hover:translate-x-[90px] transition-all duration-[200ms]'>Read more</p>
            <p className=' bg-white w-[30px] h-[2px] group-hover:w-[30px] group-hover:translate-x-[100px] transition-all duration-[400ms]'></p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default NewsCard
