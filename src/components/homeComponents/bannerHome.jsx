import images from "../../constant";

function BannerHome() {
    return(
        <>
        <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="space-y-6">
                    <div className="relative overflow-hidden">
                      <img
                        src={images.card1}
                        alt=""
                        className="w-full h-132.5 object-cover hover:scale-105 transition duration-500"
                      />
                      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 font-semibold">
                        DRESSE
                      </button>
                    </div>
        
                    <div className="relative overflow-hidden">
                      <img
                        src={images.card4}
                        alt=""
                        className="w-full h-87.5 object-cover hover:scale-105 transition duration-500"
                      />
                      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 font-semibold">
                        SUNGLASSES
                      </button>
                    </div>
                  </div>
        
                  <div className="space-y-6">
                    <div className="relative overflow-hidden">
                      <img
                        src={images.card2}
                        alt=""
                        className="w-full h-87.5 object-cover hover:scale-105 transition duration-500"
                      />
                      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 font-semibold">
                        WATCHES
                      </button>
                    </div>
        
                    <div className="relative overflow-hidden">
                      <img
                        src={images.card5}
                        alt=""
                        className="w-full h-132.5 object-cover hover:scale-105 transition duration-500"
                      />
                      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 font-semibold">
                        FOOTERWEAR
                      </button>
                    </div>
                  </div>
        
                  <div className="space-y-6">
                    <div className="relative overflow-hidden">
                      <img
                        src={images.card3}
                        alt=""
                        className="w-full h-132.5 object-cover hover:scale-105 transition duration-500"
                      />
                      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 font-semibold">
                        BAGS
                      </button>
                    </div>
        
                    <div className="relative overflow-hidden">
                      <img
                        src={images.card6}
                        alt=""
                        className="w-full h-87.5 object-cover hover:scale-105 transition duration-500"
                      />
                      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 font-semibold">
                        ACCESSORIES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}
export default BannerHome;