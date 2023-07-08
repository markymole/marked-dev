
import MyImage from '../../assets/my-image2.jpg'
import Experties from '../../components/experties'

export default function About() {

  return (
    <div className="bg-white dark:bg-gray-900 transition-all duration-100 ease-in">
     
      <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-70"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[0deg] bg-gradient-to-tr from-amber-300/70 to-amber-500/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto md:max-w-xl lg:max-w-7xl py-16 sm:py-20 lg:py-24">
               <div className=''>
                  <div className='text-center'>
                    <p className='text-lg md:text-xl lg:text-xl font-medium text-gray-800 dark:text-amber-600'>Know</p>
                    <h5 className='text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-900 dark:text-white'>About Me</h5>
                    <div className='h-1 mb-4 lg:mb-6 w-24 mx-auto  mt-4 lg:mt-4 bg-amber-500'></div>

                  </div>
                </div>
              <div className='flex flex-row gap-20 mt-10'>
                <div className='w-1/2'>
                    <Experties/>
                </div>
                <div className='w-1/2 mt-20 md:mt-4 lg:mt-0'>
                     <div className='text-start'>
                      <p className='text-lg md:text-xl lg:text-2xl font-medium text-gray-800 dark:text-amber-600 mb-4'>My Story</p>
                    </div>

                    <p className="text-base md:text-lg lg:text-lg leading-8 text-gray-800 dark:text-gray-100">
                    I am a passionate web developer specializing in React.js, with expertise in both front-end and back-end development. My love for coding ignited when I delved into the world of web development, despite having no prior background. I am driven by the challenge of creating responsive websites and captivating web designs. As a natural leader, I enjoy guiding teams to successfully deliver projects. Coding has become more than a skill; it has become my true passion.

                    </p>
                    <div className="mt-6 flex  flew-wrap items-center justify-start gap-x-6">
                          <a
                              href="#"
                              className="text-sm md:text-base lg:text-base rounded-md bg-amber-600 px-3.5 py-2.5 lg:px-3.5 lg:py-2.5   font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                              Download CV
                          </a>
                      </div>
                
                </div>
              </div>
          
        </div>
       
      </div>
    </div>
  )
}
