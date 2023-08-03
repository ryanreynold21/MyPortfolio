import React from 'react'
import { useSelector } from 'react-redux'

const ServiceDetail = ({show,setShow}) => {
    const {card} = useSelector(state => state.card)
    const ShowCard = () => {
        const data = card?.map(cd => console.log(cd.payload.title))
        return data
    }
    ShowCard()
    
    const overlayHandler= () => {
        setShow(!show)
    }
    return (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex z-[199] justify-center">
            <div className=" flex-col m-14 gap-5 grid justify-items-stretch ">
                {/* btn */}
                <div onClick={overlayHandler} className=" justify-self-end">
                    <button className="text-white text-lg font-bold rounded-full hover:scale-[1.2] transition-all duration-300 border-2 px-4 py-2">x</button>
                </div>
                {/* contact */}
                <div className="p-10 bg-[#494B50] h-[] overflow-y-auto">
                   {card?.map(item => {
                    return (
                        <div className=" flex flex-col items-center gap-5">
                            <img src={item.payload.src} className=' w-[400px]' alt="" />
                            <h1 className=' text-white text-xl font-bold'>{item.payload.title}</h1>
                            <div className=" max-w-[500px] text-[#BBBBBB] flex flex-col gap-5 text-[10px] lg:text-[15px]">
                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ullam quos voluptatum unde, culpa molestiae, esse assumenda aliquam vitae reprehenderit est doloremque, corporis soluta. Nesciunt reiciendis dicta natus error officiis?</p>
                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ullam quos voluptatum unde, culpa molestiae, esse assumenda aliquam vitae reprehenderit est doloremque, corporis soluta. Nesciunt reiciendis dicta natus error officiis?</p>
                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ullam quos voluptatum unde, culpa molestiae, esse assumenda aliquam vitae reprehenderit est doloremque, corporis soluta. Nesciunt reiciendis dicta natus error officiis?</p>
                            </div>
                        </div>
                    )
                   })}
                </div>
            </div>
        </div>
     
  )
}

export default ServiceDetail
