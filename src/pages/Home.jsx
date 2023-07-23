import React, { useEffect, useState } from 'react'
import RootLayout from '../layout/RootLayout'
import Loader from '../loader/Loader';

const Home = () => {
  const [panding,setPanding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPanding(false)
    },3000);
  },[panding])
  return (
    <div className=' relative'>
    {panding && <Loader /> }
    <RootLayout>
      <div className=" h-screen">a</div>
    </RootLayout>
    </div>
  )
}

export default Home
