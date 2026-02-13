import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Features() {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white flex items-center justify-center 'h-[350px]' h-87.5">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-widest">
          FEATURES
        </h1>
      </section>

      <section className="bg-gray-100 h-62.5"></section>

      <Footer />
    </>
  );
}

export default Features;
