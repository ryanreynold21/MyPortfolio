import React, { useEffect, useState } from 'react'
import RootLayout from '../layout/RootLayout'
import details1 from '../images/details1.jpg'
import details2 from '../images/details2.jpg'
import details3 from '../images/details3.jpg'
import details4 from '../images/details4.jpg'
import NewsCard from '../component/NewsCard'
import NewsDetail from '../component/NewsDetail'
import AOS from 'aos'
import "aos/dist/aos.css";

const News = () => {
  const [show,setShow] = useState(false);

  useEffect(() => {
    AOS.init();
  },[]);
  const data = [
    {
      id : 1,
      title : 'Format releases a new tool that enables direct video hosting',
      by : 'By Alex Watson / 22 Oct 2022',
      src : details1
    },
    {
      id : 2,
      title : 'Sony announced two new full frame cameras with zero fanfare',
      by : 'By Brook Kennedy / 15 Oct 2022',
      src : details2
    },
    {
      id : 3,
      title : 'Why every photographer should shoot film, even in 2022',
      by : 'By Alex Watson / 22 Oct 2022',
      src : details3
    },
    {
      id : 4,
      title : 'Format releases a new tool that enables direct video hosting',
      by : 'By Kevin Stone / 25 Sep 2022',
      src : details4
    },
  ]
  return (
    <>
    {show && <NewsDetail show={show} setShow={setShow} /> }
    <RootLayout>
     <section data-aos="fade-right" data-aos-duration="1000">
      <div className="">
        {/* news */}
      <div className=" mt-[100px] lg:mt-[120px] mb-[50px] lg:mb-[80px] ml-[20px] lg:ml-[50px] flex flex-col gap-5">
            <div className=" p-2 bg-[#3C3D42] text-[#959595] w-[80px] text-center">
              <span className=' font-bold'>NEWS</span> 
            </div>
            <h1 className=' text-white text-[25px] lg:[text-30px] font-[800]'>Latest News</h1>
          </div>
      </div>
      {/* card */}
      <div className="mx-[10px] overflow-hidden lg:ml-[50px] mb-32">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          {data?.map(data => <NewsCard data={data}  show={show} setShow={setShow} /> )}
        </div>
          </div>
     </section>
    </RootLayout>
    </>
  )
}

export default News
