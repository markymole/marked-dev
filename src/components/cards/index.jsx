import React, { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//icon
import GitIcon from '../../assets/icons/github-icon.svg'

import 'react-lazy-load-image-component/src/effects/blur.css';


const Card = ({id, title, description, link, type, image}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <motion.div layout
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{staggerChildren: 0.07, delayChildren: 0.2}}
      exit={{opacity: 0}}

      className={classNames(
        `relative cursor-pointer max-w-sm lg:max-w-lg overflow-hidden bg-cover bg-no-repeat rounded-xl shadow-xl ${type}`)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* <img
          src={image}
          className={isHovered ? "scale-105 transition-all duration-400 ease-in" : "transition-all duration-400 ease-out"}
          alt="Louvre"
        /> */}

        <LazyLoadImage
          alt={title}
          src={image}
          effect='blur'
          className='scale-105'
          // className={isHovered ? "scale-105 transition-all duration-400 ease-in" : "transition-all duration-400 ease-out"}

        />
        <div>
          <div
            className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black to-gray-400/70 bg-fixed transition duration-300 ease-in-out ${
              isHovered && type == 'web' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              id="content"
              className={`absolute bottom-10 left-8 transition-all duration-150 ease-in w-4/5 ${
                isHovered ? '-translate-y-0' : 'translate-y-8'
              }`}
            >
              <p className="text-white text-start mb-2 font-semibold text-base lg:text-lg ">
                {title}
              </p>
              <p className="text-white text-start mb-3 text-sm lg:text-base line-clamp-3">
                {description}
              </p>
              {
                type == 'web' && 
                <div className="flex gap-4">
                  {/* <button className="text-sm rounded-md bg-amber-500 px-3.5 py-1 lg:py-2 font-semibold text-white shadow-sm hover:bg-amber-400 transition-all duration-100 ease-out">
                    Read More
                  </button> */}
                
                  <a href={link} target="_blank" className="flex items-center gap-2 text-sm font-semibold px-3.5 py-1.5 lg:py-2 rounded-md text-white bg-amber-500 hover:bg-amber-400  transition-all duration-150 ease-out">
                    Live Version
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <a target='_blank' className='flex items-center gap-2 text-sm font-semibold px-3.5 py-1.5 lg:py-2 rounded-md text-gray-900 bg-white hover:bg-gray-100 hover:text-gray-900 transition-all duration-150 ease-out'>
                    Github
                    <img src={GitIcon} alt="github icon" className='w-5'/>
                  </a>
                </div>
              }
             
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export default Card;
