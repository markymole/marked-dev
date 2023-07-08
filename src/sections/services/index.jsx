import { useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import DevIcon from '../../assets/icons/web-development-2.png'
import DesignIcon from '../../assets/icons/responsive-design-2.png'
import GraphicIcon from '../../assets/icons/graphic-design-2.png'

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const [readMore4, setReadMore4] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 transition-all duration-100 ease-in pb-14">
     
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto md:max-w-xl lg:max-w-7xl py-16 sm:py-20 lg:py-24">
           <div className='text-center'>
                <p className='text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-amber-500'>Area Of</p>
                <h5 className='text-2xl md:text-4xl lg:text-4xl font-semibold text-black dark:text-white'>My Services</h5>
                <div className='h-1 mb-6 w-24 mx-auto mt-6 bg-amber-500'></div>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full'>
              <motion.div
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 0.5}}
               viewport={{once:true}}
               id="card" 
               className='p-8 h-fit lg:py-14  bg-clip-border shadow-xl bg-white/50 border border-brown-100/30 dark:border-none dark:bg-gray-800/40 transition-all duration-100 ease-in  rounded-lg text-gray-900 dark:text-white dark:shadow-gray-900/60 hover:bg-white hover:shadow-2xl cursor-default'
               >
                    <img src={DevIcon} alt="" className='w-16 lg:w-20' />
                    <h5 className='font-semibold text-base md:text-lg lg:text-lg mt-4 mb-2'>Web Development</h5>
                    <motion.p layout className={classNames(
                        'text-gray-800 line-clamp-6 dark:text-gray-200 text-base lg:text-base',
                        {'line-clamp-none' : readMore1, 'line-clamp-5' : !readMore1}
                    )}>
                    I offer comprehensive web development services, specializing in the creation of appealing and responsive full-stack applications. Leveraging a wide range of technologies, including React JS, Laravel, Tailwind, and various frameworks, I have the expertise to bring your vision to life. Whether you need a dynamic website or a complex web application, I am here to transform your ideas into reality.
                    </motion.p>
                    {
                          readMore1 ? 
                          <p  onClick={() => setReadMore1(false)} className='py-1  text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a>Show Less</a>
                          </p>
                          :
                          <p onClick={() => setReadMore1(true)} className='py-1 text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a >Show More</a>
                          </p>
                        }
                   
              </motion.div>
              <motion.div 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.5, delay: 0.2}}
              viewport={{once:true}}

              id="card" 
              className='p-8 h-fit lg:py-14 bg-clip-border shadow-xl bg-white/50 border border-brown-100/30 dark:border-none dark:bg-gray-800/40 transition-all duration-100 ease-in rounded-lg text-gray-800 dark:text-white dark:shadow-gray-900/60 hover:bg-white hover:shadow-2xl cursor-default'
              >
                    <img src={DesignIcon} alt="" className='w-18 lg:w-20' />
                    <h5 className='font-semibold text-base md:text-lg lg:text-lg mt-4 mb-2'>Website Manager</h5>
                    <motion.p layout className={classNames(
                        'text-gray-800 line-clamp-6 dark:text-gray-200 text-base lg:text-base',
                        {'line-clamp-none' : readMore2, 'line-clamp-5' : !readMore2}
                    )}>
                    With my website management service, I take care of all the essential aspects to ensure your website stays up-to-date and optimized. From updating content and managing marketing campaigns to implementing SEO strategies, I provide comprehensive website management solutions. You can rely on me to keep your website running smoothly while you focus on other aspects of your business.
                    </motion.p>
                    {
                          readMore2 ? 
                          <p  onClick={() => setReadMore2(false)} className='py-1  text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a>Show Less</a>
                          </p>
                          :
                          <p onClick={() => setReadMore2(true)} className='py-1 text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a >Show More</a>
                          </p>
                        }
                   
              </motion.div>
              <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.4}}
                viewport={{once:true}}

                id="card" 
                className='p-8 h-fit lg:py-14 bg-clip-border shadow-xl bg-white/50 border border-brown-100/30 dark:border-none dark:bg-gray-800/40 transition-all duration-100 ease-in  rounded-lg text-gray-800 dark:text-white dark:shadow-gray-900/60 hover:bg-white hover:shadow-2xl cursor-default'>
                    <img src={GraphicIcon} alt="" className='w-16 lg:w-20' />
                    <h5 className='font-semibold text-base md:text-lg lg:text-lg mt-4 mb-2'>Graphic Design </h5>
                    <motion.p layout className={classNames(
                        'text-gray-800 line-clamp-6 dark:text-gray-200 text-base lg:text-base',
                        {'line-clamp-none' : readMore3, 'line-clamp-5' : !readMore3}
                    )}>
                    In addition to managing websites, I offer professional graphic design services. I create eye-catching and visually appealing graphic content for your website and social media platforms. From designing captivating banners and logos to crafting engaging visuals for your posts, I enhance your online presence and help you leave a lasting impression on your audience.                    </motion.p >
                    {
                          readMore3 ? 
                          <p  onClick={() => setReadMore3(false)} className='py-1  text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a>Show Less</a>
                          </p>
                          :
                          <p onClick={() => setReadMore3(true)} className='py-1 text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a >Show More</a>
                          </p>
                        }
                   
              </motion.div>
              {/* <motion.div 
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.6}}
                viewport={{once:true}}

                id="card" 
                className='p-10 h-fit  lg:py-14 bg-white bg-clip-border shadow-3xl dark:bg-black/25 rounded-lg text-gray-800 dark:text-white shadow-lg dark:shadow-gray-900/60'>
                    <img src={GraphicIcon} alt="" className='w-16 lg:w-20' />
                    <h5 className='font-semibold text-base md:text-lg lg:text-lg mt-4 mb-2'>Graphic Design</h5>
                    <motion.p layout className={classNames(
                        'text-gray-800 line-clamp-6 dark:text-gray-300 text-base lg:text-base',
                        {'line-clamp-none' : readMore4, 'line-clamp-6' : !readMore4}
                    )}>
                    In addition to web development and design, I offer graphic design services to complement your online presence. From designing logos and branding materials to creating visually appealing illustrations, I can help you establish a strong visual identity that aligns with your brand and captures attention.
                    </motion.p >
                        {
                          readMore4 ? 
                          <p  onClick={() => setReadMore4(false)} className='py-1  text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a>Show Less</a>
                          </p>
                          :
                          <p onClick={() => setReadMore4(true)} className='py-1 text-base cursor-pointer md:text-base lg:text-base font-light text-amber-500 mt-2'>
                                <a >Show More</a>
                          </p>
                        }
                   
              </motion.div> */}
             
             
           </div>
            
        </div>


        <div
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
        </div>
      </div>
    </div>
  )
}
