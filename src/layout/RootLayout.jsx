import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const RootLayout = ({children}) => {
    const [sidebarOpen,setSidebarOpen] = useState(true)
    useEffect(() => {
      const handleWindowResize = () => {
        const isMobile = window.matchMedia("(max-width: 900px)").matches;
        setSidebarOpen(!isMobile);
      };
 
      handleWindowResize(); // Set initial state on component mount
      window.addEventListener("resize", handleWindowResize);
 
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
 
  return (
    <div>
        {sidebarOpen && <Sidebar /> }
      <div className=" lg:ml-[380px] bg-[#34353A] overflow-hidden">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  )
}

export default RootLayout
