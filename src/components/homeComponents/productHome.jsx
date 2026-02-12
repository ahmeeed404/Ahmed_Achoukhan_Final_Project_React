import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { homeData } from "../../data/home/home";

function FeaturedCarousel() {
  const products = homeData.featuredProducts || [];
  const cardsPerView = 4;
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) =>
      prev + cardsPerView >= products.length ? 0 : prev + cardsPerView,
    );
  };

  const prev = () => {
    setStartIndex((prev) =>
      prev - cardsPerView < 0
        ? Math.max(products.length - cardsPerView, 0)
        : prev - cardsPerView,
    );
  };

  const visibleProducts = products.slice(startIndex, startIndex + cardsPerView);

  if (products.length === 0) {
    return (
      <div className="py-10 text-gray-500 text-center">
        No featured products available.
      </div>
    );
  }

  return (
    <div className="max-w-7xl  mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">FEATURED PRODUCTS</h2>

      <div className="relative text-gray-500  ">
        <div className="flex gap-6 w-full overflow-hidden">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="relative flex-1 bg-white shadow  rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity rounded">
                  ADD TO CART
                </button>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-sm md:text-base font-semibold">
                  {product.title}
                </h3>
                <p className=" font-bold mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black text-blue-50 p-3 rounded-full "
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute -right-12 top-1/2 -translate-y-1/2 bg-black text-blue-50 p-3 rounded-full "
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default FeaturedCarousel;
