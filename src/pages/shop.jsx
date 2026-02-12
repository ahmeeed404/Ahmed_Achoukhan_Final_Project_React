import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ShopBg from "../components/shopComponents/shopBackg";
import ShopProduct from "../components/shopComponents/shopProduct";
function Shop() {
    return(
        <>
        <Navbar />
        <ShopBg />
        <ShopProduct />
        <Footer />
        </>
    )
}
export default Shop;