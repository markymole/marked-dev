import React, {useEffect, useState, useRef, useContext} from 'react'
import classNames from 'classnames';
import AppContext from '../../provider/Context';
import {
    Collapse,
    Card,
    CardBody
  } from "@material-tailwind/react";

import Switcher from '../switcher';

const NavBar = () => {
  const { useMenuAnimation, active, showScrollDown, activeTab, toggleMenu, handleClick } = useContext(AppContext); 

  const scope = useMenuAnimation(active);


  return (
    <div>
            <div
              id="nav-bar"
              className={classNames(
                'fixed top-0 z-40 w-full flex justify-between items-center px-4 lg:px-24 xl:px-28 2xl:px-40 py-1 lg:py-10 transition-all duration-100 ease-in',
                { 'bg-white shadow-md  dark:shadow-gray-800/20  dark:bg-gray-900 lg:py-6': showScrollDown, 'bg-transparent lg:py-7 border-transparent': !showScrollDown }
              )}
              >
              <div id="logo" className={!showScrollDown ? "text-black dark:text-white" : "text-black dark:text-white"}>
                <h1 onClick={() => handleClick('home')} className="flex cursor-pointer items-baseline font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">
                  Mark
                  <span className="text-amber-500">ed</span>
                  <div className="w-2 h-2 ml-0.5 rounded-full bg-red-500"></div>
                </h1>
              </div>
              <div id="tabs">
                <div id="nav" className={!showScrollDown ? "hidden lg:flex gap-12 text-black dark:text-white  text-lg font-medium" : "hidden lg:flex gap-12 text-gray-900 dark:text-white text-lg font-medium"}>
                  <p
                    className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out ${
                      activeTab === 'home' ? 'text-amber-500' : ''
                    }`}
                    onClick={() => handleClick('home')}
                  >
                    Home
                  </p>
                  <p
                    className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out ${
                      activeTab === 'about' ? 'text-amber-500' : ''
                    }`}
                    onClick={() => handleClick('about')}
                  >
                    About
                  </p>
                  <p
                    className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out ${
                      activeTab === 'experience' ? 'text-amber-500' : ''
                    }`}
                    onClick={() => handleClick('experience')}
                  >
                    Experience
                  </p>
                  <p
                    className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out ${
                      activeTab === 'works' ? 'text-amber-500' : ''
                    }`}
                    onClick={() => handleClick('works')}
                  >
                    Works
                  </p>
                  <p
                    className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out ${
                      activeTab === 'services' ? 'text-amber-500' : ''
                    }`}
                    onClick={() => handleClick('services')}
                  >
                    Services
                  </p>
                  <p
                    className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out ${
                      activeTab === 'contact' ? 'text-amber-500' : ''
                    }`}
                    onClick={() => handleClick('contact')}
                  >
                    Contact
                  </p>
         
            
                    <div className={classNames(
                      'scale-110 absolute right-10 p-1.5 -mt-1')}>
                        <Switcher/>
                    </div>
           
                </div>

                        
                {/* ---------------------------------------------- Mobile Nav --------------------------------------------------------*/}
                <div className='flex items-center gap-2 lg:hidden transition-all duration-200 ease-in'>    
                    <div className='scale-105 p-1'>
                      <Switcher/>
                    </div>
                    <div className='flex'>
                        {
                        !active?  
                        <div className="group h-10 w-10 cursor-pointer mt-2 self-center lg:hidden rounded-lg p-2 " onClick={() => { toggleMenu();}}>
                          <div className="space-y-2">
                            <span className="block h-1 w-6 origin-center rounded-full bg-amber-500 transition-transform ease-in-out"></span>
                            {
                              !showScrollDown ? 
                              <span className="block h-1 w-4 origin-center rounded-full bg-gray-900 dark:bg-white transition-transform ease-in-out"></span>
                              :
                              <span className="block h-1 w-4 origin-center rounded-full bg-gray-900 dark:bg-white transition-transform ease-in-out"></span>
                            }
                          </div>
                        </div> 
                        : 
                        <div className="group h-10 w-10 cursor-pointer mt-2 self-center lg:hidden rounded-lg p-2" onClick={() => { toggleMenu();}}>
                          <div className="space-y-2">
                            <span className="block h-1 w-6 origin-center rounded-full bg-amber-500 transition-transform ease-in-out translate-y-1.5 rotate-45"></span>
                            {
                              !showScrollDown ?
                              <span className="block h-1 w-6 origin-center rounded-full bg-gray-900 dark:bg-white transition-transform ease-in-out -translate-y-1.5 -rotate-45" ></span>
                              :
                              <span className="block h-1 w-6 origin-center rounded-full bg-gray-900 dark:bg-white transition-transform ease-in-out -translate-y-1.5 -rotate-45" ></span>
        
                            }
                          </div>
                        </div>
                        }
                  </div>
                </div>
                
              
              </div>
      
              <div id='menu-container' ref={scope}  className='lg:hidden fixed z-40 top-10 left-1/2 transform -translate-x-1/2  w-full'>
              <Collapse open={active} >
                <Card className="my-4  rounded-none w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-100 ease-in" >
                  <CardBody>
                    <div id="nav" className="flex flex-col gap-3 text-black dark:text-white text-lg font-medium ">
                    <li
                      className={`cursor-pointer hover:text-amber-500 transition-all flex gap-2 items-center duration-200 ease-in-out list-none ${
                        activeTab === 'home' ? 'text-amber-500' : ''
                      }`}
                      onClick={() => handleClick('home')}
                    >
                      Home
                    </li>
                    <li
                      className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out list-none ${
                        activeTab === 'about' ? 'text-amber-500' : ''
                      }`}
                      onClick={() => handleClick('about')}
                    >
                      About
                    </li>
                  
                    <li
                      className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out  list-none ${
                        activeTab === 'experience' ? 'text-amber-500' : ''
                      }`}
                      onClick={() => handleClick('experience')}
                    >
                      Experience
                    </li>
                    <li
                      className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out list-none ${
                        activeTab === 'works' ? 'text-amber-500' : ''
                      }`}
                      onClick={() => handleClick('works')}
                    >
                      Works
                    </li>
                    <li
                      className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out list-none ${
                        activeTab === 'services' ? 'text-amber-500' : ''
                      }`}
                      onClick={() => handleClick('services')}
                    >
                      Services
                    </li>
                    <li
                      className={`cursor-pointer hover:text-amber-500 transition-all duration-200 ease-in-out list-none ${
                        activeTab === 'contact' ? 'text-amber-500' : ''
                      }`}
                      onClick={() => handleClick('contact')}
                    >
                      Contact
                    </li>
                  </div>
                  </CardBody>
                </Card>
              </Collapse>
              </div>
            </div>      
    </div>
  )
}

export default NavBar