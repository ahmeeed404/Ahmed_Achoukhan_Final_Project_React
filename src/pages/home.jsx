import Navbar from "../components/navbar";
import images from "../constant";
import CarouselHome from "../components/homeCarousel";
function Home() {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <div>
        <div>
          <img src={images.banner02} alt="" />
          <img src={images.banner7} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
