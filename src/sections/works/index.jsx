import React, { useState, useEffect, useContext, useRef } from 'react';

//context
import AppContext from '../../provider/Context';
//component
import Card from '../../components/cards'
//animation
import { motion, AnimatePresence } from 'framer-motion';

const Works = () => {

  const { filterTab, projects, setFilterTab, filteredProjects, maxProjects, showMore, setMaxProjects } = useContext(AppContext);

  
  return (
    <div className="bg-white min-h-screen dark:bg-gray-900 transition-all duration-100 ease-in">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute hidden inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[120deg] bg-gradient-to-tr from-yellow-300/50 to-amber-500/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto md:max-w-xl lg:max-w-7xl py-16 sm:py-20 lg:py-24">
          <div className='flex flex-col items-center'>
            <div className="text-center lg:text-center">
              <p className="text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-amber-500">Portfolio</p>
              <h5 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-black dark:text-white">My Collection</h5>
              <div className="mb-6 h-1 w-24 mx-auto mt-6 bg-amber-500"></div>
            </div>
            <div>
              <div className='flex gap-10 font-medium text-base md:text-lg lg:text-lg justify-center lg:justify-start'>
                <a
                  className={filterTab === '*' ? 'cursor-pointer text-amber-500 transition-all duration-100 ease-in' : 'cursor-pointer text-gray-800 dark:text-white transition-all duration-200 ease-out hover:text-amber-400'}
                  onClick={() => setFilterTab('*')}
                >
                  All
                </a>
                <a
                  className={filterTab === 'web' ? 'cursor-pointer text-amber-500 transition-all duration-100 ease-in' : 'cursor-pointer text-gray-800 dark:text-white transition-all duration-200 ease-out hover:text-amber-400'}
                  onClick={() => setFilterTab('web')}
                >
                  Web Projects
                </a>
                <a
                  className={filterTab === 'art' ? 'cursor-pointer text-amber-500 transition-all duration-100 ease-in' : 'cursor-pointer text-gray-800 dark:text-white transition-all duration-200 ease-out hover:text-amber-400'}
                  onClick={() => setFilterTab('art')}
                >
                  Digital Arts
                </a>
              </div>
            </div>
          </div>

          <div
          className="mt-10" >
            <motion.div
             layout className="cards grid w-fit mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
              {filteredProjects?.slice(0, maxProjects).map((project) => (
                  <Card
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    type={project.type}
                    image={project.image}
                  />
     
              ))}
              </AnimatePresence>
            </motion.div>
            
            {maxProjects < projects.length ? (
                <div  className='flex justify-center mt-6'>
                <button
                  className="text-sm md:text-base lg:text-base rounded-md bg-amber-500 px-3.5 py-2.5 lg:px-3.5 lg:py-2 font-semibold text-white shadow-sm hover:bg-amber-400 "
                  onClick={showMore}
                >
                  Show More 
                </button>
              </div>
              ):
              <div className='flex justify-center mt-6'>
                <button
                  className="text-sm md:text-base lg:text-base rounded-md bg-amber-500 px-3.5 py-2.5 lg:px-3.5 lg:py-2 font-semibold text-white shadow-sm hover:bg-amber-400"
                  onClick={() => {setMaxProjects(6)}}
                >
                  Show Less
                </button>
              </div>
            
            }
          </div>
        </div>

        {/* <div
          className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-900/30 to-yellow-500/50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Works;
