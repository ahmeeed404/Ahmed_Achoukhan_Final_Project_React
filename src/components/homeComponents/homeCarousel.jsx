import images from "../../constant";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
function CarouselHome() {
    return(
            <div className="mx-auto">
                <div
                  id="default-carousel"
                  className="relative rounded-lg overflow-hidden shadow-lg"
                  data-carousel="static"
                >
                  <div className="relative h-[60vh] md:h-[80vh]" data-carousel-inner>
                    <div
                      className="duration-700 ease-in-out"
                      data-carousel-item="active"
                    >
                      <img
                        src={images.carousel1}
                        className="object-cover w-full h-full"
                        alt="Slide 1"
                      />
        
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          Women Collection 2018
                        </h3>
        
                        <h2 className="text-4xl md:text-6xl font-bold mt-3">
                          New Arrivals
                        </h2>
        
                        <button className="mt-6 bg-white text-black px-6 py-2 font-semibold rounded-md hover:bg-gray-200 transition">
                          Shop Now
                        </button>
                      </div>
                    </div>
        
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img
                        src={images.carousel2}
                        className="object-cover w-full h-full"
                        alt="Slide 2"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          Women Collection 2018
                        </h3>
        
                        <h2 className="text-4xl md:text-6xl font-bold mt-3">
                          New Arrivals
                        </h2>
        
                        <button className="mt-6 bg-white text-black px-6 py-2 font-semibold rounded-md hover:bg-gray-200 transition">
                          Shop Now
                        </button>
                      </div>
                    </div>
        
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img
                        src={images.carousel3}
                        className="object-cover w-full h-full"
                        alt="Slide 3"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
                        <h3 className="text-xl md:text-2xl font-semibold">
                          Women Collection 2018
                        </h3>
        
                        <h2 className="text-4xl md:text-6xl font-bold mt-3">
                          New Arrivals
                        </h2>
        
                        <button className="mt-6 bg-white text-black px-6 py-2 font-semibold rounded-md hover:bg-gray-200 transition">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
        
                  <div
                    className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
                    data-carousel-indicators
                  >
                    <button className="w-3 h-3 rounded-full bg-white"></button>
                    <button className="w-3 h-3 rounded-full bg-white/50"></button>
                    <button className="w-3 h-3 rounded-full bg-white/50"></button>
                  </div>
        
                  <button
                    type="button"
                    className="flex absolute top-1/2 left-3 -translate-y-1/2 z-40 items-center justify-center w-10 h-10 bg-white/30 rounded-full hover:bg-white/50 transition"
                    data-carousel-prev
                  >
                    <FaChevronLeft />
                  </button>
        
                  <button
                    type="button"
                    className="flex absolute top-1/2 right-3 -translate-y-1/2 z-40 items-center justify-center w-10 h-10 bg-white/30 rounded-full hover:bg-white/50 transition"
                    data-carousel-next
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
    )
    
}
export default CarouselHome;