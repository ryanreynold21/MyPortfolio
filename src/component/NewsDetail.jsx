import React from 'react'
import { useSelector } from 'react-redux'
import {FaQuoteLeft} from 'react-icons/fa'

const NewsDetail = ({show,setShow}) => {
    const {blog} = useSelector(state => state.card)
    const overlayHandler= () => {
    setShow(!show)
    }
  return (
    <div>
             <div className=" fixed inset-0 bg-black bg-opacity-70 flex z-[199] justify-center">
            <div className=" flex-col mx-10 lg:mx-32 my-5 gap-5 grid justify-items-stretch ">
                {/* btn */}
                <div onClick={overlayHandler} className=" justify-self-end">
                    <button className="text-white text-lg font-bold rounded-full hover:scale-[1.2] transition-all duration-300 border-2 px-4 py-2">x</button>
                </div>
                {/* contact */}
                <div className=" px-5 lg:px-20 py-10 bg-[#34353A] h-[] overflow-y-auto">
                   {blog?.map(item => {
                    return (
                        <div className=" flex flex-col gap-5">
                            <img src={item.payload.src} className='' alt="" />
                            <div className=' text-[#FFFFFF] text-[13px] lg:text-[13px] border-b border-[#8f8383] mb-6  p-2'>{item?.payload.by}</div>
                            <div className=" text-start">
                              <h1 className=' text-white font-[600] text-[18px] lg:text-[22px]'>{item?.payload.title}</h1>
                            </div>
                            <p className=' text-[16px] lg:text-[20px] text-stone-300'>Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
                            <p className=' text-[14px] lg:text-[18px] text-stone-400'>Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now so we can remember them when it is all over.</p>

                            <div className=" flex-col lg:flex-row items-stretch gap-5 lg:px-10 py-5">
                              <div className="">
                               <FaQuoteLeft className=' text-white text-[20px] lg:text-[50px] self-end' />
                              </div>
                              <p className=' text-[21px] text-stone-300'>Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.</p>
                            </div>
                            <div className=" text-stone-400 text-[15px] lg:text-[18px] flex flex-col gap-5 mb-5">
                              <p className=' leading-6 lg:leading-8'>Streets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar. Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart we should be.</p>
                              <p className=' leading-6 lg:leading-8'>Pretend everything is new and that you haven’t seen it before, and then you will be free to notice the leading lines, the places where one edge meets another in delightful geometric harmony, and how the ordinary things in the kitchen are transformed when the light is on or off.</p>
                              <p className=' leading-6 lg:leading-8'>The trick here is to look slowly, and then look again. Take the time to look in detail and to look at the same thing from different angles, with different light, long lenses and wide lenses. Then move to the left a bit. You may never feel the need to leave the house again.</p>
                            </div>
                        </div>
                    )
                   })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsDetail
