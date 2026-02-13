import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import images from "../constant";



function Navbar() {
    return (
        <nav className=" ">
            <div className="flex items-center justify-between bg-[#f5f5f5]  p-3 pl-10 pr-10">
                <div className="flex gap-5">
                    <a className="text-2xl text-gray-500  hover:text-[#e65540] " href="">{<FaFacebookF />}</a>
                    <a className="text-2xl text-gray-500  hover:text-[#e65540]" href="">{<FaTwitter />}</a>
                    <a className="text-2xl text-gray-500  hover:text-[#e65540]" href="">{<FaPinterest />}</a>
                    <a className="text-2xl text-gray-500  hover:text-[#e65540]" href="">{<FaGooglePlusG />}</a>
                    <a className="text-2xl text-gray-500  hover:text-[#e65540]" href="">{< FaInstagram />}</a>
                </div>
                <div>
                    <p className="text-gray-500 ">Free shipping for standard order over $100</p>
                </div>
                <div className="flex items-center text-gray-500  gap-5">
                    <p>fashe@example.com</p>
                    <select>
                        <option value="">USD</option>
                        <option value="">EUR</option>
                        <option value="">GPB</option>
                        <option value="">PKR</option>
                        <option value="">CAD</option>
                        <option value="">JPY</option>
                    </select>

                </div>
            </div>

             <div className="border flex items-center justify-between bg-[#ffffff]  p-5 pl-10 pr-10">
                <div className="cursor-pointer" >
                    <img src={images.logo} alt="logo" />
                </div>
                <div className="flex gap-5">
                    <Link to= {"/"} className=" hover:text-[#e65540]" href="" >Home</Link>
                    <Link to={"/shop/"} className=" hover:text-[#e65540]" href="">Shop</Link>
                    <Link to={"/sale/"} className=" hover:text-[#e65540]" href="">Sale</Link>
                    <Link to={"/featured/"} className=" hover:text-[#e65540]" href="">Features</Link>
                    <Link to={"/Blog/"} className=" hover:text-[#e65540]" href="">Blog</Link>
                    <Link className=" hover:text-[#e65540]" href="">About</Link>
                    <Link to={"/contact"} className=" hover:text-[#e65540]" href="">Contact</Link>
                </div>
                <div className="flex items-center gap-5">
                    <a className="text-4xl text-gray-500" href=""><FaRegUserCircle/></a>
                    <span className="w-0.5 h-5 bg-gray-500"></span>
                    <a className="text-4xl text-gray-500" href=""><MdOutlineShoppingBag/></a>
                </div>
            </div>


        </nav>
    );
}

export default Navbar;