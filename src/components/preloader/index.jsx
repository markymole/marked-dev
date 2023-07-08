import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Loading = ({loading}) => {
  const dotVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className={classNames(
      'h-screen w-full grid grid-cols-2 overflow-hidden bg-transparent fixed z-50',
    )}
  >

        <motion.div
          layout
          className={classNames('h-screen col-span-1 bg-white dark:bg-gray-900')}
          initial={{ x: 0 }}
          animate={{ x: loading ? 0 : '-100%' }}
          transition={{ duration: 0.3, delay: 0.3 }}
        ></motion.div>
   
      <motion.div
          layout
          className={classNames('h-screen col-span-1 bg-white dark:bg-gray-900')}
          initial={{ x: 0 }}
          animate={{ x: loading ? 0 :'100%'}}
          transition={{ duration: 0.3, delay: 0.3 }}
        ></motion.div>

        <motion.div
        initial={{opacity: 1}}
        animate={{ opacity: loading ? 1 : 0}}
        transition={{ duration: 0.2 }} 
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40'>
        <h1 className="overflow-hidden px-2 flex cursor-pointer text-gray-900 dark:text-white  items-baseline font-bold text-3xl sm:text-3xl lg:text-3xl xl:text-5xl">
          Mark
          <span className="flex items-baseline text-amber-600">
            ed
            <motion.div
              className="w-2 h-2 ml-0.5 rounded-full bg-red-500"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />
          </span>
        </h1>
        </motion.div>
    </div>
  );
}

export default Loading;
