import React, {useContext} from 'react'

import AppContext from '../../provider/Context'

const ScrollDownButton = () => {
  
  const {scrollDownStyle, handleClick, showScrollDown} = useContext(AppContext);
  return (
    <div>

        <div
          id="scroll-down"  style={scrollDownStyle}
          className={`text-gray-900 dark:text-white hidden lg:flex flex-col gap-1 items-center fixed -bottom-4 left-10 lg:bottom-0 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 ${
            showScrollDown ? 'invisible' : 'visible'
          }`}
        >
         <div className="">
            <a className="anchor">
              <svg
                className="custom-svg"
                width="26px"
                height="100%"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  className='scrolled stroke-gray-900 dark:stroke-white fill-none stroke-[20px]'
                
                  d="M123.359,79.775l0,72.843"
                ></path>
                <path
                  className='stroke-gray-900 dark:stroke-white fill-none stroke-[20px]'
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                ></path>
              </svg>
            </a>
          </div>
          <p className='text-gray-900 dark:text-gray-400 font-normal'>scroll</p>
        </div>
    </div>
  )
}

export default ScrollDownButton