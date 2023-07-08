import React, {useState, useEffect, useRef, useContext} from 'react'
import PortfolioContext from './PortfolioProvider';

import { createContext } from 'react'
import { useAnimate, stagger, motion, useScroll } from "framer-motion";

const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};



const AppContext = createContext();

export const Context = ({ children }) => {

  // ------------------------ nav-bar func's ---------------------------------
  const [activeTab, setActiveTab] = useState('home');
  const [active, setActive] = useState(false);

  const [showScrollDown, setShowScrollDown] = useState(false);

    const staggerMenuItems = stagger(0.05, { startDelay: 0.1 });

    function useMenuAnimation(active) {
    const [scope, animate] = useAnimate();


    useEffect(() => {
        animate(
        "li",
        active
            ? { opacity: 1, scale: 1, filter: "blur(0px)", translateX: "0%" }
            : { opacity: 0, scale: 0.3, filter: "blur(20px)", translateX: "-100%" },
        {
            duration: 0.05,
            delay: active ? staggerMenuItems : 0
        }
        );
    }, [active]);

    return scope;
    }


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop !== 0;

      setShowScrollDown(isAtTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUpStyle = {
    opacity: showScrollDown ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    visibility: showScrollDown ? 'visible' : 'hidden',
    pointerEvents: showScrollDown ? 'auto' : 'none',
  };

  const scrollDownStyle = {
    opacity: !showScrollDown ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    visibility: !showScrollDown ? 'visible' : 'hidden',
    pointerEvents: !showScrollDown ? 'auto' : 'none',
  };
  
  
  const toggleMenu = () => {
    setActive(!active);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let active = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          active = section.id;
        }
      });

      setActiveTab(active);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuContainer = document.getElementById('menu-container');
  
      if (active && menuContainer) {
        const rect = menuContainer.getBoundingClientRect();
        if (event.clientY > rect.bottom) {
          setActive(false);
        }
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [active]);

  const handleClick = (tab) => {
    setActiveTab(tab);
    scrollToSection(tab);
    
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ------------------------ end of nav-bar func's ---------------------------------

  // ------------------------ works section func's ---------------------------------

  const { projects } = useContext(PortfolioContext);

  const [filterTab, setFilterTab] = useState('*');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(()=>{
    if(filterTab === "*"){
      setFilteredProjects(projects);
      return;
    }
    const filtered = projects.filter((project) => project.type === filterTab)
    setFilteredProjects(filtered);
  },[filterTab])



  const [maxProjects, setMaxProjects] = useState(6);

  const showMore = () => {
    setMaxProjects(maxProjects + 3);
  }

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth < 768) {
        setMaxProjects(3);
      } else {
        setMaxProjects(6);
      }
    }, 200); // Adjust the delay as per your needs

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    // ------------------------ end of works section func's ---------------------------------

    return <AppContext.Provider value={{
        //navbar
        activeTab, setActiveTab, active, setActive, showScrollDown, scrollUpStyle, scrollDownStyle, toggleMenu, handleClick,  useMenuAnimation,
        //works
        filterTab, setFilterTab, filteredProjects, maxProjects, setMaxProjects, showMore, projects
      }}>{children}</AppContext.Provider>
}

export default AppContext
