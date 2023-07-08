import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ id, prefixColor, title, date, content}) => {

  return (
    <motion.div
    className='timeline-card'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.7}}
    viewport={{once:true}}
    >
      <li
        className={`border-l-2 transition-opacity duration-1000 ease-in-out border-red-600`}
      >
        <div className="flex flex-start flex-wrap ">
          <div className={`bg-red-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5`}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </div>
          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5}}
          viewport={{once:true}}
          className={`block p-6 rounded-lg shadow-xl bg-white/50 border border-brown-100/30 dark:border-none dark:bg-gray-800/40  max-w-lg ml-6 mb-10 transition-all duration-100 ease-in cursor-default `}>
            <div className="flex justify-between mb-4">
              <h3 className="text-base md:text-lg lg:text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-base md:text-base lg:text-base text-gray-700 dark:text-gray-300">{date}</p>
            </div>
            <p className="mt-2 text-base md:text-base lg:text-base text-gray-800 dark:text-gray-200">{content}</p>
          </motion.div>
        </div>
      </li>
    </motion.div>
  );
};

export default TimelineItem;
