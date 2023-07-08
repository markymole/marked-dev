import React from 'react'
import { motion } from 'framer-motion'

import InIcon from '../../assets/icons/linkedin-color-icon.svg'

const Contact = () => {
  return (
    <div className="bg-white overflow-hidden  dark:bg-gray-900 transition-all duration-100 ease-in pb-36">
      
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-auto md:max-w-xl lg:max-w-7xl py-16 sm:py-20 lg:py-24">
            <div className='text-center'>
                <p className='text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-amber-500'>Inquiry</p>
                <h5 className='text-2xl md:text-4xl lg:text-4xl font-semibold text-black dark:text-white'>Contact Me</h5>
                <p className="text-base w-full lg:w-2/4 mx-auto mt-2 md:text-lg lg:text-lg leading-8 text-gray-900 dark:text-gray-100">
                Let's Connect and Bring Your Vision to Life - Reach Out to Discuss Your Web Development Project              
              </p>
                <div className='h-1 mb-4 lg:mb-6 w-20 mx-auto mt-4 lg:mt-6 bg-amber-500'></div>
            </div>
            <div className='flex flex-col-reverse gap-20 lg:flex-row-reverse lg:justify-between mt-10'>
              <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5}}
                viewport={{once:true}}

              className='p-2 w-full lg:w-1/2'>
                <div className='grid grid-cols-2 gap-6'>
                  <div className="col-span-1">
                    <label htmlFor="name" className="block text-base font-medium leading-6 text-gray-900 dark:text-white">
                      Your name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900 dark:text-white">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        autoComplete="given-name"
                        className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  
                </div>
                <div className="mt-4">
                    <label htmlFor="subject" className="block text-base font-medium leading-6 text-gray-900 dark:text-white">
                      Subject
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                </div>
                <div className="col-span-full mt-4">
                  <label htmlFor="content" className="block text-base font-medium leading-6 text-gray-900 dark:text-white">
                    Content
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="content"
                      name="content"
                      rows={3}
                      className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                  {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
                </div>
                <button
                  type='button'
                  className="mt-6 text-sm md:text-base lg:text-base rounded-md bg-amber-500 px-3.5 py-2.5 lg:px-3.5 lg:py-2   font-semibold text-white shadow-sm hover:bg-amber-400"
                >
                  Submit Now
                </button>
              </motion.div>
              <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.5}}
              viewport={{once:true}}
            
              className=''>
                <div className='flex gap-4 items-center mt-4'>
                  <div className='p-3 lg:p-4 bg-red-200/40 rounded-full text-red-400 dark:bg-red-400 dark:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                      <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
                    </svg>
                  </div>
               
                  <div>
                    <h5 className='font-medium text-gray-800 dark:text-white'>Address</h5>
                    <p className='text-gray-800 dark:text-gray-100'>357 San Simon St, Sta. Cruz, Porac, Pampanga, Philippines</p>
                  </div>
                </div>
                <div className='flex gap-4 items-center mt-6'>
                  <div className='p-3 lg:p-4 bg-amber-300/30 rounded-full text-amber-500 dark:bg-amber-500 dark:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                      <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                      <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                    </svg>
                  </div>
                  <div>
                    <h5  className='font-medium text-gray-800 dark:text-white'>Email Address</h5>
                    <p className='text-gray-800 dark:text-gray-100'>nmark.raphael07@gmail.com</p>
                  </div>

                </div>
                <div className='flex gap-4 items-center mt-6'>
                  <div className='p-3 lg:p-4 bg-green-300/40 dark:bg-green-600 rounded-full text-green-600 dark:text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5  className='font-medium text-gray-800  dark:text-white'>Phone Number</h5>
                    <p className='text-gray-800 dark:text-gray-100'>+63-945 758 4087</p>
                  </div>

                </div>
                <div className='flex gap-4 items-center mt-6'>
                  <div className='p-3 lg:p-4 bg-blue-300/40 dark:bg-white rounded-full text-blue-600'>
                  <img src={InIcon} alt="" className='w-5 h-5 lg:w-6 lg:h-6'/>
                  </div>
                  <div>
                    <h5  className='font-medium text-gray-800 dark:text-white'>LInkedIn</h5>
                    <p className='text-gray-800 dark:text-gray-100'>linkedin.com/in/mark-raphael-nuguid/</p>
                  </div>

                </div>
              </motion.div>
            </div>
      </div>
      {/* <div className="absolute inset-x-0  transform-gpu overflow-hidden left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-brown-400/60 to-amber-600/50 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
     
     
    </div>
    
  </div>
  )
}

export default Contact