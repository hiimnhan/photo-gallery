import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import { motion } from 'framer-motion'
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')
  console.log(docs)
  return (
    <div className='my-5 mx-auto grid grid-cols-3 gap-10'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='overflow-hidden h-0 py-half px-0 relative opacity-80'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              className='min-w-full min-h-full max-w-150 absolute top-0 left-0'
              src={doc.url}
              alt='uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
