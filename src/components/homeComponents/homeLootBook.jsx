import { homeData } from "../../data/home";
import { Link } from "react-router-dom";

function HomeLotbook() {
  const { lookbook, dealOfWeek } = homeData;

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={lookbook.image}
            alt={lookbook.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white p-6">
            <p className="uppercase tracking-widest text-sm mb-2">
              {lookbook.subtitle}
            </p>

            <h2 className="text-4xl md:text-6xl w-72 font-bold">
              {lookbook.title.toUpperCase()}
            </h2>

            <Link to = "/" className="mt-6 px-6 py-3  rounded-full hover:bg-white hover:text-black transition">
              VIEW COLLECTION
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <img
            src={dealOfWeek.image}
            alt={dealOfWeek.title}
            className="w-80  mb-6"
          />

          <h3 className="text-xl text-gray-500 font-medium mb-2">
            {dealOfWeek.title}
          </h3>

          <p className="text-2xl font-semibold text-gray-500 mb-6">
            ${dealOfWeek.price}.00
          </p>

          <div className="grid grid-cols-4 text-gray-500 gap-4">
            {["-2600", "-3", "-4", "-45"].map((value, index) => (
              <div
                key={index}
                className="border rounded-lg px-4 py-3"
              >
                <p className="text-lg font-semibold">{value}</p>
                <p className="text-xs uppercase text-gray-500">
                  {["Days", "Hrs", "Mins", "Secs"][index]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeLotbook;
