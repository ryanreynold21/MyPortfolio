import React from 'react'
import RootLayout from '../layout/RootLayout'
import akw from '../images/1.jpg'
import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaGithubSquare} from 'react-icons/fa'

const Home = () => {
  return (
    <RootLayout>
      <section className=" h-screen">
        <div className=" flex items-center gap-10 pt-40">
          {/* photo */}
          <div className="ml-28 ">
            <img className='w-[300px] h-[300px] object-cover border-[10px] border-[#4D4D4D] rounded-full' src={akw} alt="" />
          </div>
          {/* content */}
          <div class=" flex flex-col gap-5">
            <h1 className=' text-white text-[60px] font-[700]'>Aung Kyaw Win</h1>
            <p className=' text-[#BBBBBB] w-[500px] text-lg'>I am a Frontend Developer at heart and create features that are best suited for the job at hand.</p>
            <div className=" flex text-white text-2xl gap-5">
              <span className=''> <a href="https://www.facebook.com/profile.php?id=100026937290228"> <FaFacebookSquare /> </a> </span>
              <span className=''> <FaTwitterSquare /> </span>
              <span className=''> <a href="https://www.instagram.com/aungkyawwin106/"> <FaInstagramSquare /> </a> </span>
              <span className=''> <a href="https://github.com/ryanreynold21"> <FaGithubSquare /> </a> </span>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

export default Home
