import images from "../../constant";    

function ShopBg() {
  return (
    <section
      className="relative h-350 md:h-105 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${images.banner})` }}
    >    
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4">
          PRODUCTS
        </h1>

  
      </div>
    </section>
  );
}

export default ShopBg;
