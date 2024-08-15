import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data, reference}) {
  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      whileDrag={{ scale: 1.1 }} 
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}
      className='relative flex-shrink-0 w-48 h-60 rounded-[35px] bg-zinc-900/90 text-white px-4 py-8 overflow-hidden'
    >
        <FaRegFileAlt size="1.2em" />
        <p className='text-xs mt-4 font-semibold leading-tight'>
          {data.desc}
        </p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-6 py-2 mb-2'>
            <h5 className='text-xs'>{data.filesize}</h5>
            <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoCloseSharp /> : <FaDownload size=".6em" color='#fff'/>}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-4 flex items-center justify-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
              <h3 className='text-sm font-semibold text-center'>{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
    </motion.div>
  );
}

export default Card;
