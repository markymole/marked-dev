import React, {useContext} from 'react'
import AppContext from '../../provider/Context'
import classNames from 'classnames';

const ScrollUpButton = () => {
  const {handleClick, scrollUpStyle, showScrollDown} = useContext(AppContext);
  
  return (
    <div>
         <div className=''>
              
                <div
                    id="scroll-down"  style={scrollUpStyle}
                    onClick={() => handleClick('home')}
                    className={`active:scale-95 cursor-pointer text-white flex gap-2 items-center fixed z-40 m-auto right-8 bottom-8 lg:right-10 lg:bottom-10 w-fit ${
                      showScrollDown ? 'visible' : 'invisible'
                    }`}
                  >
                    <div className=" text-white bg-amber-500  hover:bg-amber-400 transition-all duration-150 ease-in-out p-2 rounded-full">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                      </svg> */}

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </div>
                  
                </div>
                  
              </div>
    </div>
  )
}

export default ScrollUpButton