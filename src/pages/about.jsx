import Navbar from "../components/navbar";
import Footer from "../components/footer";
import images from "../constant";

function About() {
  return (
    <>
      <Navbar />

      <section
        className="relative h-11 md:h-50 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${images.blog3})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative text-white text-4xl md:text-6xl font-semibold tracking-widest">
          ABOUT
        </h1>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={images.shopy4}
              alt="About"
              className="w-full `h-80` object-cover rounded"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
              Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
              dolor quis lorem accumsan, vitae molestie urna dapibus.
              Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis
              magna ut interdum laoreet. Donec gravida lorem elit, quis
              condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam
              aliquam imperdiet sodales. Ut fringilla turpis in vehicula
              vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat
              volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus
              sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo
              eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis
              ut commodo efficitur, quam velit convallis ipsum, et maximus enim
              ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae
              ultrices orci.
            </p>

            <p className="italic text-gray-500 border-l-4 border-black pl-4">
              “Creativity is allowing yourself to make mistakes. Design is
              knowing which ones to keep.”
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
          <p className="text-gray-600 leading-relaxed">
            We focus on quality, modern design and customer satisfaction. Our
            mission is to provide premium fashion products at the best price.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
