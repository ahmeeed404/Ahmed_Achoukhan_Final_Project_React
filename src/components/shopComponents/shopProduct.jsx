import { useState } from "react";
import filters from "../../data/shop/filterData";
import products from "../../data/shop/shop";

function ShopProduct() {
  const [page, setPage] = useState(1); // page 1 = premiers 6 produits

  // Décider quels produits afficher selon page
  let visibleProducts = [];
  if (page === 1) {
    visibleProducts = products.slice(0, 6); // 6 premiers
  } else if (page === 2) {
    visibleProducts = products.slice(6, 8); // derniers 2
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-64 text-sm">
          {/* Sidebar */}
          <div className="mb-10">
            <h3 className="font-semibold text-lg mb-5 uppercase tracking-wide">
              Categories
            </h3>
            <ul className="space-y-3 text-gray-500">
              {filters.categories.map((cat) => (
                <li key={cat} className="hover:text-black cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="font-semibold text-lg mb-5 uppercase tracking-wide">
              Price
            </h3>
            <div className="space-y-3 text-gray-500">
              {filters.priceRanges.map((range) => (
                <label key={range.label} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-semibold text-lg mb-5 uppercase tracking-wide">
              Color
            </h3>
            <div className="space-y-3 text-gray-500">
              {filters.colors.map((color) => (
                <label key={color} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {color}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 uppercase tracking-wide">
              Size
            </h3>
            <div className="space-y-3 text-gray-500">
              {filters.sizes.map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {size}
                </label>
              ))}
            </div>
          </div>
        </div>

        <main className="flex-1 gap-3">
          <div className="flex justify-between m-6">
            <div className="flex gap-3">
            <select className="border border-gray-200 p-2 rounded bg-white">
              <option>Alphabetically, A-Z</option>
            </select>


          </div>
          <div className="flex justify-between">
            <select className="border border-gray-200 px-4 py-2 outline-none">
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>All</option>
            </select>
            
          </div>
          <div className="flex justify-between items-center mb-10 text-sm">
              <p className="text-gray-500">
                Showing {visibleProducts.length} of {products.length} results
              </p>
            </div>
          </div>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden bg-gray-100">
                  {product.sale && (
                    <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1">
                      Sale
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-105 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium hover:text-gray-600 cursor-pointer">
                    {product.title}
                  </h3>
                  {product.sale ? (
                    <div className="flex justify-center gap-2 mt-2 text-sm">
                      <span className="line-through text-gray-400">
                        ${product.oldPrice}
                      </span>
                      <span className="text-red-500 font-semibold">
                        ${product.price}
                      </span>
                    </div>
                  ) : (
                    <p className="text-gray-600 mt-2 text-sm">
                      ${product.price}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination buttons */}
          <div className="flex justify-center gap-3 mt-14">
            {page === 1 && products.length > 6 && (
              <button
                onClick={() => setPage(2)}
                className="w-10 h-10 border bg-black text-white"
              >
                2
              </button>
            )}
            {page === 2 && (
              <button onClick={() => setPage(1)} className="w-10 h-10 border">
                1
              </button>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}

export default ShopProduct;
