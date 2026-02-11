import Navbar from "../components/navbar";
import images from "../constant";
import CarouselHome from "../components/homeComponents/homeCarousel";
import BannerHome from "../components/homeComponents/bannerHome";
function Home() {
  return (
    <>
      <Navbar />
      <CarouselHome />
     <BannerHome />
    </>
  );
}

export default Home;
