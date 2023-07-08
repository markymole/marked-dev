import { useState } from 'react'

import { Progress } from "@material-tailwind/react";


export default function Experties() {
    

  return (
    <div className="rounded-xl dark:bg-gray-900 transition-all duration-100 ease-in">
     
        <div className="">
            
           {/* <div className='text-center'>
                <p className='text-lg md:text-xl lg:text-xl font-medium text-gray-800 dark:text-amber-600'>Area Of</p>
                <h5 className='text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-900 dark:text-white'>Experties</h5>
                <div className="mt-2 mb-6 w-full lg:w-3/4 mx-auto">
                            <p className="mt-2 px-2 text-base lg:text-lg text-gray-800 dark:text-gray-100">
                            As we live, our hearts turn colder. Cause pain is what we go through
                            as we become older. We get insulted by others, lose trust for those
                            others. We get back stabbed by friends. It becomes harder for us to
                            give others a hand. We get our heart broken by people we love, even
                            that we give them all...
                            </p>
                </div> 
                <div className='h-1 mb-6 mt-6 w-24 mx-auto bg-amber-500'></div>
           </div> */}
           <div>
             
                <div className="flex flex-col justify-center items-center ">
                 
                    <div className="relative flex flex-col items-center rounded-xl w-full mx-auto ">
                        <div className="grid grid-cols-1 gap-1 lg:gap-6 w-full">
                            <div className="flex flex-col items-start justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl">
                                <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200">Web Development</p>
                                <div className="w-full py-2">
                                    <Progress value={85} color='green' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-gray-800 dark:text-white">
                                        React Js, Laravel, Php, JQuery
                                    </p>
                                    <p className="text-base font-medium text-gray-600">3 Years</p>
                                </div>
                                
                            </div>

                            <div className="flex flex-col items-start justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl">
                                <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200">Web Design</p>
                                <div className="w-full py-2">
                                    <Progress value={80} color='blue' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">
                                        Tailwind & Bootstrap
                                    </p>
                                    <p className="text-base font-medium text-gray-600">3 Years</p>
                                </div>
                               
                            </div>

                            <div className="flex flex-col items-start justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl">
                                <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200">Database</p>
                                <div className="w-full py-2">
                                    <Progress value={70} color='amber' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">
                                        MySQL & MongoDB
                                    </p>
                                    <p className="text-base font-medium text-gray-600">3 Years</p>
                                </div>
                               
                            </div>

                            <div className="flex flex-col items-start justify-center rounded-2xl bg-transparent bg-clip-border shadow-3xl">
                                <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200">Graphic Design</p>
                                <div className="w-full py-2">
                                    <Progress value={70} color='red' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">
                                        Adobe Illustration & Canva
                                    </p>
                                    <p className="text-base font-medium text-gray-600">1 Year</p>
                                </div>
                            
                            </div>
{/* 
                            <div className="flex flex-col justify-center rounded-2xl bg-transparent bg-clip-border p-2 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200">Graphic Design</p>
                                <div className="w-full py-2">
                                    <Progress value={70} color='blue' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">
                                        Adobe Illustration & Canva
                                    </p>
                                    <p className="text-base font-medium text-gray-600">2 Years</p>
                                </div>
                           
                            </div>

                            <div className="flex flex-col justify-center rounded-2xl bg-transparent bg-clip-border p-2 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                <p className="text-sm lg:text-base text-gray-700 dark:text-gray-200">Database</p>
                                <div className="w-full py-2">
                                    <Progress value={70} color='blue' />
                                </div>
                                <div className='flex justify-between w-full'>
                                    <p className="text-base font-medium text-gray-900 dark:text-white">
                                        MySQL & MongoDB
                                    </p>
                                    <p className="text-base font-medium text-gray-600">3 Years</p>
                                </div>
                              
                            </div> */}
                        </div>
                    </div>  
                </div>
           </div>
            
        </div>
    </div>
  )
}
