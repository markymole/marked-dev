import CKS from '../../assets/cks.jpg'

export default function Testimony() {
    return (
      <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 transition-all ease-in duration-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-0 " />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-gray-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center transition-all duration-100 ease-in" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
                <p className='text-lg md:text-xl lg:text-xl font-medium text-gray-800 dark:text-amber-600'>What My</p>
                <h5 className='text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-900 dark:text-white'>Client Say</h5>
                <div className='h-1 mb-4 lg:mb-6 w-20 mx-auto mt-4 lg:mt-6 bg-amber-500'></div>
          </div>
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-white sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={CKS}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900 dark:text-white">Leonardo Calma</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900 dark:fill-white">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600 dark:text-gray-400">Center for Kapampangan Studies</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    )
  }
  