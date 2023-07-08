import { useState } from 'react'

import { Progress } from "@material-tailwind/react";


export default function Experties() {
    

  return (
    <div className="bg-white dark:bg-gray-900 transition-all duration-100 ease-in">
     
      <div className="relative isolate px-6 pb-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div
            className="relative hidden left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[80deg] bg-gradient-to-tr from-red-300/50 to-purple-500/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>


        <div className="mx-auto md:max-w-xl lg:max-w-7xl py-16 sm:py-20 lg:py-24">
           <div className='text-center'>
                <p className='text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-amber-500'>Area Of</p>
                <h5 className='text-2xl md:text-4xl lg:text-4xl font-semibold text-black dark:text-white'>Experties</h5>
                <p className="text-base w-full lg:w-3/4 mx-auto mt-2 md:text-lg lg:text-lg leading-8 text-gray-900 dark:text-gray-100">
                Over the past few years, I have dedicated myself to becoming a skilled React developer. Alongside my expertise in React.js, I have also nurtured my passion for graphic design and illustration, utilizing Adobe Illustrator to create visually captivating designs. This combination of skills has enriched my proficiency in web development and design.
                </p>
                <div className='h-1 mb-6 mt-6 w-24 mx-auto bg-amber-500'></div>
           </div>
           <div>
                <div className="flex  flex-col justify-center items-center">
                    <div className="relative flex flex-col items-center rounded-xl w-full mx-auto ">
                        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 w-full">
                            
                            <div className="flex flex-col justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl shadow-shadow-500">
                                <p className="text-base lg:text-base text-gray-900 dark:text-gray-100">Web Development</p>
                                <div className="w-full py-2">
                                    <Progress value={85} color='green' />
                                </div>
                                <div className='flex justify-between'>
                                    <p className="text-base font-medium text-black dark:text-white">
                                        HTML, CSS, PHP & JavaScript
                                    </p>
                                    <p className="text-base font-medium text-gray-800 dark:text-gray-300">3 Years</p>
                                </div>
                               
                            </div>

                            <div className="flex flex-col items-start justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl">
                                <p className="text-base lg:text-base text-gray-900 dark:text-gray-100">Frameworks</p>
                                <div className="w-full py-2">
                                    <Progress value={70} color='teal' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-black dark:text-white">
                                        React JS, Laravel, JQuery, Tailwind & Bootstrap
                                    </p>
                                    <p className="text-base font-medium text-gray-800 dark:text-gray-300">3 Years</p>
                                </div>
                               
                            </div>

                            <div className="flex flex-col justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-base lg:text-base text-gray-900 dark:text-gray-100">Graphic Design</p>
                                <div className="w-full py-2">
                                    <Progress value={75} color='blue' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-black dark:text-white">
                                        Adobe Illustration & Canva
                                    </p>
                                    <p className="text-base font-medium text-gray-800 dark:text-gray-300">2 Years</p>
                                </div>
                           
                            </div>

                            <div className="flex flex-col justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-base lg:text-base text-gray-900 dark:text-gray-100">Database</p>
                                <div className="w-full py-2 ">
                                    <Progress value={70} color='amber' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-black dark:text-white">
                                        MySQL & MongoDB
                                    </p>
                                    <p className="text-base font-medium text-gray-800 dark:text-gray-300">3 Years</p>
                                </div>
                              
                            </div>

                                                           
                            <div className="flex flex-col items-start justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl shadow-shadow-500 ">
                                <p className="text-base lg:text-base text-gray-900 dark:text-gray-100">Digital Marketing</p>
                                <div className="w-full py-2">
                                    <Progress value={60} color='red' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-black dark:text-white">
                                        SEO
                                    </p>
                                    <p className="text-base font-medium text-gray-800 dark:text-gray-300">1 Year</p>
                                </div>
                                
                            </div>


                            <div className="flex flex-col items-start justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-base lg:text-base text-gray-900 dark:text-gray-100">Progmramming Language</p>
                                <div className="w-full py-2">
                                    <Progress value={60} color='yellow' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-black dark:text-white">
                                        Java, Javascript & Python
                                    </p>
                                    <p className="text-base font-medium text-gray-800 dark:text-gray-300">1 Year</p>
                                </div>
                            </div>

                        </div>
                    </div>  
                </div>
           </div>
            
        </div>


        <div
          className="absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] rotate-[-50deg] -translate-x-1/2 bg-gradient-to-tr from-brown-900/30 to-yellow-800/50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
