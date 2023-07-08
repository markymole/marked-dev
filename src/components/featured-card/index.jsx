import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const FeaturedCard = ({index, id, title, case_study, technology, link, featuredImage}) => {
  return (
    <div >
         {/* <div className='block p-6 rounded-lg shadow-xl bg-white/50 border border-brown-100/30 dark:border-none dark:bg-gray-800/40 transition-all duration-100 ease-in '>
        </div> */}
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-10'
          >
            <div className='w-full lg:w-1/2'>
                <LazyLoadImage
                 alt={title}
                 src={featuredImage}
                 effect='blur'
                 className='h-full w-full object-cover rounded-lg shadow-xl border border-brown-100/30 dark:border-none'
                />

                
                {/* <img src={featuredImage} alt="" className='h-full w-full object-cover rounded-lg shadow-xl border border-brown-100/30 dark:border-none'/> */}
            </div>
            <div className='w-full lg:w-1/2'>
                <h5 className='text-xl md:text-3xl lg:text-3xl text-gray-900 font-semibold dark:text-white'>{title}</h5>
                <p className='text-base lg:text-lg mt-2 lg:mt-4 text-gray-900 dark:text-gray-100'>{case_study}</p>
                <div className='tags mt-4 flex flex-wrap gap-4'>
                  
                      {
                        technology.split(",").map((technology) => (
                          <div className='bg-gray-300 w-fit px-4 py-1.5 text-sm rounded-full text-gray-800 dark:bg-gray-800/70 dark:text-white' key={technology}>
                            <p>{technology}</p>
                          </div>
                        ))
                      }
                   
                </div>
                <div className='mt-6 lg:mt-8 w-fit cursor-pointer flex gap-2 items-center text-sm md:text-base lg:text-base rounded-md bg-amber-500 px-3.5 py-2 md:py-1.5 lg:px-4 lg:py-1.5 font-semibold text-white shadow-sm hover:bg-amber-400  transition-all duration-100 ease-linear'>
                  <a href={link} target='_blank' className=''>
                  Go to Live Version
                  </a>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  
                </div>
            </div>
                
          </div>
    </div>
  )
}

export default FeaturedCard