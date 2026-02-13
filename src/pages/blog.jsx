import { useContext, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogContext } from "../components/blog/blogContext";
import images from "../constant";

function Blog() {
  const { blogs } = useContext(BlogContext);
  const [page, setPage] = useState(1); 

  const animation = {
    initial: { backgroundSize: "100% 100%" },
    whileHover: { backgroundSize: "110% 110%" },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  if (!blogs || blogs.length === 0) {
    return <div className="text-center py-20">No Blogs Found</div>;
  }


  let visibleBlogs = [];
  if (page === 1) {
    visibleBlogs = blogs.slice(0, 2);
  } else if (page === 2) {
    visibleBlogs = blogs.slice(2, 3); 
  }

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div
          className="relative h-32 md:h-50 mb-12 overflow-hidden rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${images.blog2})` }}
        >
          <div className="absolute inset-0 text-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              BLOG
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {visibleBlogs.map((blog) => {
              const parts = blog.p1?.split("|") || [];

              return (
                <article
                  key={blog.id}
                  className="mb-12 bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <motion.div {...animation} className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <span className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 text-sm">
                      {parts[1]?.trim()}
                    </span>
                  </motion.div>

                  <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {blog.title}
                    </h2>

                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-1">
                      <span>{parts[0]?.trim()}</span>
                      <span className="mx-2">|</span>
                      <span>{parts[2]?.trim()}</span>
                      <span className="mx-2">|</span>
                      <span>{parts[3]?.trim()}</span>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {blog.p2?.substring(0, 150)}...
                    </p>

                    <Link
                      to={`/details/${blog.id}`}
                      className="text-gray-900 font-medium hover:text-red-500"
                    >
                      Continue Reading →
                    </Link>
                  </div>
                </article>
              );
            })}

            <div className="flex gap-4 mt-4">
              {page === 1 && blogs.length > 2 && (
                <button
                  onClick={() => setPage(2)}
                  className="px-6 py-2 bg-blue-300 text-white rounded hover:bg-blue-300"
                >
                  Next Page
                </button>
              )}
              {page === 2 && (
                <button
                  onClick={() => setPage(1)}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Previous Page
                </button>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Featured Posts
              </h3>

              <div className="space-y-4">
                {blogs.slice(0, 4).map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/Details/${blog.id}`}
                    className="flex gap-4 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h4 className="text-sm text-gray-900">
                        {blog.title.substring(0, 40)}...
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Tags Cloud
              </h3>

              <div className="flex flex-wrap gap-2">
                {blogs.map((blog) => (
                  <button
                    key={blog.id}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-500 hover:text-white transition"
                  >
                    {blog.b1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
