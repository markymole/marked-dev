import React, { useContext } from 'react'
import classNames from 'classnames'

//icons
import ReactIcon from '../../assets/icons/react-js-icon.svg'
import AiIcon from '../../assets/icons/adobe-illustrator-icon.svg'
import FBICon from '../../assets/icons/facebook-app-icon.svg'
import LinkedIn from '../../assets/icons/linkedin-square-color-icon.svg'
import GithubIcon from '../../assets/icons/github-icon.svg'
import LaraIcon from '../../assets/icons/laravel-icon.svg'
//resume
import CV from '../../assets/files/Mark Raphael D Nuguid - CV.pdf'
//css
import './index.css'

//images
import backgroundImage from '../../assets/hero-bg.jpg';
import MyImage from '../../assets/cropped-me3.png'
import InitialImage from '../../assets/cropped-me-tiny.png'

//context
import AppContext from '../../provider/Context'
import ScrollDownButton from '../../components/scroll-down-button'
//component
import HeroImage from '../../components/hero-img/HeroImage'


export default function Hero() {

  const {handleClick, scrollDownStyle, showScrollDown} = useContext(AppContext);

  return (
    <div className='min-h-screen  bg-gradient-to-b from-gray-200 via-gray-150 to-white  dark:bg-gradient-to-b dark:from-[#222222] dark:via-[#212121] dark:to-gray-900 transition-all duration-100 ease-in'>
      
      <div className='w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] 2xl:w-[50rem] 2xl:h-[50rem] absolute right-0 bottom-0 lg:mb-0 lg:mt-0 lg:absolute 3xl:right-32 lg:bottom-0'>
          {/* <div 
            className='elevator-animation w-fit absolute top-4 left-20 lg:top-20 lg:left-44 rounded-2xl shadow-lg shadow-brown-700/20 z-20'>
            <img src={AiIcon} className='w-10 h-10 md:w-12 md:h-12  lg:w-[4.5rem] lg:h-[4.5rem] ' alt="" />
          </div> */}

          <div 
           className='elevator-animation bg-white shadow-lg shadow-brown-700/20 p-2 lg:p-4 w-fit rounded-xl absolute bottom-20 left-2 lg:bottom-32 lg:left-20 z-20 '>
            <img src={ReactIcon} className='w-8 h-8 md:w-12 md:h-12  lg:w-14 lg:h-14' alt="" />
          </div>

          <div
            className='elevator-animation bg-white shadow-lg shadow-brown-700/20 p-2 lg:p-3 w-fit rounded-xl absolute bottom-8 right-8 lg:bottom-60 lg:right-8 z-20'
          >
            <img src={LaraIcon} className='w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12' alt="" />
          </div>

        

          <div 
            className='elevator-animation w-fit absolute top-4 left-24 lg:top-20 lg:left-44 z-20'>
            <img src={AiIcon} className='w-10 h-10 md:w-12 md:h-12  lg:w-[4.5rem] lg:h-[4.5rem]' alt="" />
          </div>


          {/* without background */}
          {/* 
          <div 
           className='elevator-animation w-fit absolute bottom-20 left-4 lg:bottom-44 lg:left-12 z-20'>
            <img src={ReactIcon} className='w-9 h-9 md:w-12 md:h-12  lg:w-24 lg:h-24' alt="" />
          </div>
          
          <div
            className='elevator-animation w-fit absolute bottom-4 right-8 lg:bottom-72 lg:right-8 z-20'
          >
            <img src={LaraIcon} className='w-7 h-7 md:w-10 md:h-10 lg:w-16 lg:h-16' alt="" />
          </div> */}

          <div className='w-5/6 h-5/6 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-400/20 to-gray-300 dark:from-gray-100 dark:to-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
          <div className='transform scale-x-[-1] w-full object-cover'>
            <HeroImage 
              src={MyImage}
              placeholderSrc={InitialImage}
            />
          </div>
       
          {/* <img src={MyImage} alt="" id='hero-img' className='transform scale-x-[-1] w-full object-cover' /> */}
      </div>  
      <div className="w-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:left-0 lg:top-0 px-6 lg:px-8 lg:pt-10 z-20">
        <div className="mx-auto max-w-xl lg:max-w-4xl 2xl:max-w-7xl py-20 sm:py-48 lg:py-44 ">
          <div className="text-start lg:text-start">
            <p className='text-start lg:text-start text-lg md:text-3xl 2xl:text-4xl mb-1 lg:mb-2 text-gray-800 dark:text-amber-100 text-font-normal'>Hello, I'm</p>
            <h1 className="text-3xl  md:text-6xl lg:text-7xl font-semibold tracking-tight text-black dark:text-white">
                Mark Raphael
            </h1>
            <p className='mt-4 lg:mt-6 text-lg md:text-2xl lg:text-2xl leading-4 font-normal text-amber-500 dark:text-amber-500'>Professional Freelance Web Developer</p>
            <p className="mt-4 lg:mt-6 text-base md:text-xl lg:text-xl leading-6 text-gray-900 font-normal dark:text-gray-100 text-start w-full lg:text-start lg:w-2/4">
              A skilled web developer specializing in React.js, with expertise in front and back-end development. Let's build something remarkable together!
            </p>
            <div className="mt-6 lg:mt-10 flex flew-wrap items-center justify-start lg:justify-start gap-x-6">
              <a
                href={CV} target='_blank'
                className="cursor-pointer text-sm md:text-base lg:text-base rounded-md bg-amber-500 px-3.5 py-2 lg:px-3.5 lg:py-2   font-semibold text-white shadow-sm hover:bg-amber-400 transition-all duration-100 ease-linear"
              >
                Download CV
              </a>
              <a onClick={() => handleClick('about')} className="cursor-pointer text-sm md:text-base  lg:text-base font-semibold px-3.5 py-2 lg:px-3.5 lg:py-2 rounded-md text-white bg-gray-700 dark:bg-gray-100 dark:text-gray-900 border-gray-900 hover:bg-gray-600 hover:text-white dark:hover:bg-white transition-all duration-150 ease-out">
                About Me <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <div className='text-gray-900 dark:text-white hidden lg:flex flex-col lg:flex-row gap-4 lg:gap-6 items-center relative mt-14 lg:mt-0 lg:absolute lg:bottom-0'>
            {/* <h5 className='text-lg lg:text-xl font-medium mr-4'>Connect</h5>
            <div className='hidden lg:flex border-r-2 border-gray-900 dark:border-white h-9'></div> */}
            <div className='lg:hidden border-b-2 w-1/3 -mt-6 border-white h-6'></div>
            <div className='flex gap-5 lg:gap-8 lg:ml-4 flex-wrap justify-center'>
              <a href="https://www.linkedin.com/in/mark-raphael-nuguid/" target='_blank'>
                <img src={LinkedIn} alt="" className='w-10 h-10 hover:scale-110 transition-all duration-150 ease-in-out'/>
              </a>
              <a href='https://www.facebook.com/nmarkraphael/' target='_blank'>
                <img src={FBICon} alt="" className='w-10 h-10 hover:scale-110 transition-all duration-150 ease-in-out'/>
              </a>
              <a href='https://github.com/markymole' target='_blank'>
                <img src={GithubIcon} alt="" className='w-10 h-10 hover:scale-110 transition-all duration-150 ease-in-out dark:bg-white dark:rounded-lg dark:p-1'/>
              </a>
            
            </div>
          </div>
          
        </div>
      </div>
      <ScrollDownButton/>
        <div
          className="absolute inset-x-0 top-[calc(100%-25rem)] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(25%-40rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] rotate-[-60deg] -translate-x-1/2 bg-gradient-to-tr from-amber-600/40 to-amber-500 opacity-30 sm:left-[calc(60%+10rem)] sm:w-[80.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    </div>
  )
}
