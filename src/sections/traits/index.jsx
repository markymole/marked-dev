import MyImage from '../../assets/hero-bg.jpg'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const features = [
  {
    name: 'Dedication to Excellence.',
    description:
      'I firmly believe in the mantra "Follow excellence and success will chase you down." This philosophy drives me to deliver work of the highest quality, ensuring that every project I undertake reflects my commitment to excellence.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Adaptability.',
    description: 'My ability to adapt allows me to effectively tackle complex issues and find innovative solutions. I thrive in dynamic environments and excel in situations that require quick thinking and agile problem-solving.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Effective Communication.',
    description: 'I value building strong relationships with my clients. By actively listening to their requirements, understanding their goals, and maintaining clear and open communication, I ensure that the end result aligns perfectly with your vision.',
    icon: CheckCircleIcon,
  },
]

export default function Traits() {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 transition-all duration-100 ease-in py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div layout className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-amber-500">Know</h2>
              <p className="text-2xl md:text-4xl lg:text-4xl font-semibold mt-1 text-black dark:text-white">About Me?</p>
              <div className='h-1 mb-6 w-24 mx-start mt-6 bg-amber-500'></div>
              <p className="text-base md:text-lg lg:text-lg leading-8 text-gray-900 dark:text-white">
              I am a highly dedicated and adaptable freelance web developer with a passion for excellence. From overcoming challenges to achieving top performance, I am committed to understanding my client's needs and fostering a positive relationship.
              </p>
              <div className="mt-8 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-amber-500">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-gray-800 dark:text-gray-100">{feature.description}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            {/* <img
              src={MyImage}
              alt="Product screenshot"
              className="w-[24rem] shadow-xl max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[50rem] xl:w-[60rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            /> */}

            <LazyLoadImage
              alt={'Mark Raphael Image'}
              src={MyImage}
              effect='blur'
              className="w-[24rem] shadow-xl max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[50rem] xl:w-[60rem] md:-ml-4 lg:-ml-0"
              // className={isHovered ? "scale-105 transition-all duration-400 ease-in" : "transition-all duration-400 ease-out"}

            />    


          </div>
         
        </motion.div>
      </div>
     
    </div>
  )
}
