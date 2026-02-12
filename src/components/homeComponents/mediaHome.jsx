function InstagramInfo() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 tracking-wide">
          @ FOLLOW US ON INSTAGRAM
        </h2>

        <div className="grid md:grid-cols-3 text-center">

          <div className="px-6 md:border-r border-gray-300">
            <h3 className="text-lg font-medium mb-2">
              Free Delivery Worldwide
            </h3>
            <p className="text-sm text-gray-500 italic">
              Mirum est notare quam littera gothica
            </p>
          </div>

          <div className="px-6 md:border-r border-gray-300 mt-10 md:mt-0">
            <h3 className="text-lg font-medium mb-2">
              30 Days Return
            </h3>
            <p className="text-sm text-gray-500 italic">
              Simply return it within 30 days for an exchange.
            </p>
          </div>

          <div className="px-6 mt-10 md:mt-0">
            <h3 className="text-lg font-medium mb-2">
              Store Opening
            </h3>
            <p className="text-sm text-gray-500 italic">
              Shop open from Monday to Sunday
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default InstagramInfo;
