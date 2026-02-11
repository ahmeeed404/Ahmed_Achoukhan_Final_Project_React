import Navbar from "../components/navbar";
import images from "../constant";
import CarouselHome from "../components/homeComponents/homeCarousel";
import BannerHome from "../components/homeComponents/bannerHome";
import ProductHome from "../components/homeComponents/productHome";
function Home() {
  return (
    <>
      <Navbar />
      <CarouselHome />
     <BannerHome />
     <ProductHome />
    </>
  );
}

export default Home;
