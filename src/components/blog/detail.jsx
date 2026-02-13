import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";
import images from "../../constant";
import { BlogContext } from "./blogContext";

function Details() {
    const { id } = useParams();
    const { blogs } = useContext(BlogContext);

    const pruduct = blogs.find((p) => p.id === Number(id));

    if (!pruduct) {
        return <p className="text-center py-20">Product not found</p>;
    }

    const parts = pruduct.p1?.split("|") || [];

    return (
        <div>
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 text-sm text-gray-600">
                    <Link to="/" className="hover:text-gray-900">Home</Link>
                    <span className="mx-2">›</span>
                    <Link to="/blog" className="hover:text-gray-900">News</Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-900">{pruduct.title}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Side */}
                    <div className="w-full lg:w-2/3">
                        <div className="mb-8">
                            <img
                                src={pruduct.image}
                                alt={pruduct.title}
                                className="w-full h-64 md:h-96 `lg:h-[500px]` object-cover rounded-lg"
                            />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {pruduct.title}
                        </h1>

                        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-1">
                            <span>{parts[0]?.trim()}</span>
                            <span className="mx-2">|</span>
                            <span>{parts[1]?.trim()}</span>
                            <span className="mx-2">|</span>
                            <Link to="/" className="hover:text-red-500">{pruduct.b1}</Link>
                            <span>,</span>
                            <Link to="/" className="hover:text-red-500">{pruduct.b2}</Link>
                            <span className="mx-2">|</span>
                            <span>{parts[3]?.trim()}</span>
                        </div>

                        <div className="prose max-w-none mb-8">
                            <p className="text-gray-700 leading-relaxed mb-4">{pruduct.p2}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">{pruduct.p3}</p>
                        </div>

                        {/* Tags */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">{pruduct.Tags}</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-500 hover:text-white transition">
                                    {pruduct.b1}
                                </button>
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-500 hover:text-white transition">
                                    {pruduct.b2}
                                </button>
                            </div>
                        </div>

                        {/* Comments */}
                        <div className="border-t pt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                {parts[3]?.trim().toUpperCase()} TO SHOW
                            </h3>

                            {parts.includes("1 Comments") && (
                                <div className="flex gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 shrink-0"></div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="font-bold text-gray-900">test name</span>
                                            <span className="text-sm text-gray-500">/ Jan 11, 2018</span>
                                            <Link to="/" className="text-sm text-gray-600 hover:text-red-500">Reply</Link>
                                        </div>
                                        <p className="text-gray-700">test message</p>
                                    </div>
                                </div>
                            )}

                            {/* Comment Form */}
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{pruduct.comment.toUpperCase()}</h3>
                                <p className="text-sm text-gray-600 mb-6">{pruduct.titlecomment}</p>

                                <form className="space-y-4">
                                    <textarea placeholder="Message" rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 resize-none"></textarea>
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400" />
                                    <input type="email" placeholder="Email address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400" />
                                    <button type="submit" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">{pruduct.post}</button>
                                    <p className="text-sm text-gray-500 italic">{pruduct.lastcomment}</p>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="w-full lg:w-1/3">
                        {/* Featured Posts */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Posts</h3>
                            <div className="space-y-4">
                                {blogs.slice(0, 4).map((blog) => (
                                    <Link key={blog.id} to={`/Details/${blog.id}`} className="flex gap-4 hover:opacity-80 transition">
                                        <img src={blog.image} alt={blog.title} className="w-20 h-24 object-cover rounded" />
                                        <div className="flex-1">
                                            <h4 className="text-sm text-gray-900 mb-2">{blog.title.substring(0, 40)}...</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Tags Cloud */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Tags Cloud</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-500 hover:text-white transition">{pruduct.b1}</button>
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-500 hover:text-white transition">{pruduct.b2}</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Details;
