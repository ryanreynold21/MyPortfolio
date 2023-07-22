import React, { useState } from 'react'
import Sidebar from './Sidebar'

const RootLayout = ({children}) => {
    const [sidebarOpen,setSidebarOpen] = useState(true)
  return (
    <div>
        {sidebarOpen && <Sidebar /> }
      <div className=" md:ml-[300px] bg-[#34353A]">
        {children}
      </div>
    </div>
  )
}

export default RootLayout
