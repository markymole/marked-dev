import React from 'react';
import TimelineItem from '../../components/timeline-item';

const Experience = () => {

  return (
    <div className="bg-white dark:bg-gray-900 transition-all duration-100 ease-in">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[100deg] bg-gradient-to-tr from-yellow-300/50 to-amber-500/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto md:max-w-xl lg:max-w-7xl py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="text-center lg:text-start">
            <p className="text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-amber-500">My Work</p>
            <h5 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-black dark:text-white">Experience</h5>
            <div className="h-1 mb-6 w-24 mx-auto lg:mx-0 mt-6 bg-amber-500"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-24 justify-center ">
            <div className="lg:mt-20 col-span-1 lg:col-span-3 ">
              <div className="text-3xl md:text-6xl lg:text-6xl font-bold w-full text-black dark:text-white">
                  <div className='leading-[1.15]'>
                    <span>Experienced</span> 
                    <span className="text-amber-500"> Freelance Developer: </span>
                    Delivering Excellence for 
                    <span className="text-amber-500"> 2+ Years. </span>
                  </div>
                
              </div>
              <p className="text-base md:text-xl lg:text-xl mt-6 text-gray-900 dark:text-gray-100 font-normal">
              For the past 2 years, I have been actively engaged in diverse projects from clients abroad as well as local clients. With a primary focus on ReactJS, I have successfully delivered impactful solutions that exceed expectations.
              </p>
            </div>
            <div className='col-span-1 lg:col-span-3 w-11/12 mx-auto lg:w-full'>
              <ol>
                <TimelineItem
                  id={1}
                  prefixColor="purple"
                  title="Kapampangan Center OJT"
                  date="Oct 10, 2022 - Dec 20, 2022"

                  content="During my OJT at the Kapampangan Center for Kapampangan Studies, I developed a user-friendly Kapampangan translator, utilizing my web development skills to promote and preserve the Kapampangan language."
                />
                <TimelineItem
                  id={2}
                  prefixColor="blue"
                  title="Kapampangan Center Volunteer"
                  date="Sept 1, 2022 - Present"
                  content="Driven by the CKS vision, I volunteered to develop Minindal, a web application that offers users an extensive directory of local Kapampangan cuisine businesses. With this project, I aimed to support and highlight the vibrant culinary heritage of the Kapampangan region."
                />
                <TimelineItem
                  id={3}
                  prefixColor="green"
                  title="Freelance Web Developer"
                  date="Jan 2021 - Present"
                  content="Fueling my passion for creativity and problem-solving, I actively pursued a multitude of projects for clients, both locally and internationally. These dynamic endeavors showcased my expertise in web development and design, enabling me to deliver innovative solutions tailored to their unique requirements."
                />
              </ol>
            </div>
          </div>
        </div>

        <div
          className="hidden absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
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
  );
};

export default Experience;
