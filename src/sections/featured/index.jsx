import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import React, {useContext} from 'react'
import PortfolioContext from '../../provider/PortfolioProvider'

import FeaturedCard from '../../components/featured-card'

export default function Featured() {

  const { projects } = useContext(PortfolioContext);

  return (
    <div className="relative isolate  bg-white  dark:bg-gray-900 py-16 sm:py-24 lg:py-30 transition-all duration-100 ease-in">
      <div className='relative isolate px-6  lg:px-8'>

      
        <div className="mx-auto md:max-w-xl lg:max-w-7xl py-16 sm:py-20 lg:py-24">
          <div className='text-start'>
              <p className="text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-amber-500">Featured</p>
              <h5 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-black dark:text-white">Works</h5>
              <div className="mb-6 lg:mb-0 h-1 w-24 mx-0 lg:mx-0 mt-6 bg-amber-500"></div>
          </div>
          <div className='featured mt-8 flex flex-col gap-20 lg:gap-16'>
                  {
                    projects.map((project, i) => {
                      if (project.featured) {
                        return (
                          <FeaturedCard
                            key={project.id}
                            index={i}
                            id={project.id}
                            title={project.title}
                            case_study={project.case_study}
                            technology={project.technology}
                            link={project.link}
                            featuredImage={project.featuredImage}
                          />
                        );
                      }
                      return null; // or any alternative component if you don't want to display non-featured projects
                    })
                  }
          </div>

        </div>
      </div>
      <div
          className="absolute inset-x-0 -top-0 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[0deg] bg-gradient-to-tr from-amber-400 to-amber-500 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    </div>
  )
}
