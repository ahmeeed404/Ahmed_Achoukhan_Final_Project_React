import Navbar from "../components/navbar";
import CarouselHome from "../components/homeComponents/homeCarousel";
import BannerHome from "../components/homeComponents/bannerHome";
import ProductHome from "../components/homeComponents/productHome";
import HomeLotbook from "../components/homeComponents/homeLootBook";
import BlogHome from "../components/homeComponents/blogHome";
import Footer from "../components/footer";
import InstagramInfo from "../components/homeComponents/mediaHome";
function Home() {
  return (
    <>
      <Navbar />
      <CarouselHome />
     <BannerHome />
     <ProductHome />
     <HomeLotbook />
     <BlogHome />
     <InstagramInfo />
     <Footer />

    </>
  );
}

export default Home;
