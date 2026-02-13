
// import Footer from "../components/footer";
// import Navbar from "../components/navbar";
// import { motion } from "framer-motion";
// import images from "../constant";
// import { CiSearch } from "react-icons/ci";
// import { Link } from "react-router-dom";


// function Blog() {

//     const back = {
//         backgroundImage: `url(${images.blog.blog1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat"


//     }

//     const back2 = {
//         backgroundImage: `url(${images.blog.blog2})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat"


//     }

//     const animation = {
//         initial: { backgroundSize: "100% 100%" },
//         animate: { backgroundSize: "100% 100%" },
//         whileHover: { backgroundSize: "110% 110%" },
//         transition: { duration: 0.4, ease: "easeOut" }
//     };
//     return (
//         <div>
//             <Navbar />
//             <div className="w-full h-60 bg-amber-800 flex justify-center items-center">
//                 <h1 className="text-6xl font-bold">NEWS</h1>

//             </div>
//             <div className="p-20 pl-32 pr-32 flex flex-col gap-y-10">
//                 <div className="w-full  grid grid-cols-[65%_1fr] gap-15  ">
//                     <div>
//                         <motion.div {...animation} className="w-full h-150 bg-amber-950 relative" style={{
//                         ...back, backgroundRepeat: "no-repeat",
//                         backgroundPosition: "center"
//                     }}>
//                         <button className="text-white bg-black w-30 h-10 absolute bottom-15">28 Dec, 2017</button>
//                     </motion.div>
//                     <div className="hna_content">
                        
//                     </div>
//                     </div>
//                     <div className="flex flex-col gap-15">
//                         <div className="relative">
//                             <input type="text" className="border rounded-full w-70 h-13 p-5 " placeholder="shearch all the articles..." />
//                             <CiSearch className="absolute top-4 right-30 text-2xl"/>
//                         </div>
//                         <div className="flex flex-col gap-5">
//                             <h1 className="text-3xl font-bold">Featured Products</h1>
//                             <div className="flex gap-5">
//                                 <div className="w-23 h-30">
//                                     <img className="w-full h-full" style={back2}  alt="" />
//                                 </div>
//                                 <div className="flex flex-col gap-2">
//                                 <Link><p className="w-50">Boxy7 T-Shirt with Roll Sleeve</p></Link>
//                                 <span>Rs.5,577.73</span>
//                                 </div>
//                             </div>
//                             <div className="flex gap-5">
//                                 <div className="w-23 h-30">
//                                     <img className="w-full h-full" style={back2}  alt="" />
//                                 </div>
//                                 <div className="flex flex-col gap-2">
//                                     <Link><p className="w-50">Boxy6 T-Shirt with Roll Sleeve</p></Link>
//                                 <span>Rs.5,577.73</span>
//                                 </div>
//                             </div>
//                             <div className="flex gap-5">
//                                 <div className="w-23 h-30">
//                                     <img className="w-full h-full" style={back2}  alt="" />
//                                 </div>
//                                 <div className="flex flex-col gap-2">
//                                     <Link><p className="w-50">Boxy5 T-Shirt with Roll Sleeve</p></Link>
//                                 <span>Rs.5,577.73</span>
//                                 </div>
//                             </div>
//                             <div className="flex gap-5">
//                                 <div className="w-23 h-30">
//                                     <img className="w-full h-full" style={back2}  alt="" />
//                                 </div>
//                                 <div className="flex flex-col gap-2">
//                                     <Link><p className="w-50">Boxy4 T-Shirt with Roll Sleeve</p></Link>
//                                 <span>Rs.5,577.73</span>
//                                 </div>
//                             </div>
//                             <div className="flex gap-5">
//                                 <div className="w-23 h-30">
//                                     <img className="w-full h-full" style={back2}  alt="" />
//                                 </div>
//                                 <div className="flex flex-col gap-2">
//                                     <Link><p className="w-50">Boxy3 T-Shirt with Roll Sleeve</p></Link>
//                                 <span>Rs.5,577.73</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full  grid grid-cols-[65%_1fr] gap-15  ">
//                     <div>
//                         <motion.div {...animation} className="w-full h-150 bg-amber-950 relative" style={{
//                         ...back2, backgroundRepeat: "no-repeat",
//                         backgroundPosition: "center"
//                     }}>
//                         <button className="text-white bg-black w-30 h-10 absolute bottom-15">28 Dec, 2017</button>
//                     </motion.div>
//                     <div className="hna_content">
                        
//                     </div>
//                     </div>
//                     <div className=" flex flex-col gap-y-10 p-10">
//                         <h1 className="text-2xl font-bold">Tags Cloud</h1>
//                         <div className="flex gap-3">
//                             <button className="w-20 h-10 border rounded-full hover:border-[#e65540] hover:text-[#e65540] ">crafts</button>
//                             <button className="w-25 h-10 border rounded-full hover:border-[#e65540] hover:text-[#e65540] ">street style</button>
//                         </div>
//                     </div>
//                 </div>

//             </div>


//             <Footer />

//         </div>
//     );
// }

// export default Blog;
