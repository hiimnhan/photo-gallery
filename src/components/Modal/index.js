import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div
      className='backdrop fixed top-0 left-0 w-full h-full bg-black opacity-50'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        className='block max-w-60/100 max-h-80/100 my-16 mx-auto shadow-custom border-2 border-solid border-white'
        src={selectedImg}
        alt='enlarged pic'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal
