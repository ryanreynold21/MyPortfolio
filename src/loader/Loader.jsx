import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div>
       <div className=" w-screen h-screen flex absolute z-50">
        <motion.div
        initial={{x:'0px' , opacity:1}}
        animate={{x:'-800px',opacity:0.4  }}
        transition={{ duration: 0.8 }}
        className=" bg-white w-full"></motion.div>
        <motion.div
         initial={{x:'0px' , opacity:1}}
         animate={{x:'800px',opacity:0.54}}
         transition={{ duration: 0.8 }}
         className=" bg-white w-full"></motion.div>
      </div>
    </div>
  )
}

export default Loader
