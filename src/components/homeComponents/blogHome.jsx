import { homeData } from "../../data/home";

function BlogHome() {
  const { blogPosts } = homeData;

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 tracking-wide">
          OUR BLOG
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {blogPosts.map((post) => (
            <div key={post.id} className="group">

              <div className="overflow-hidden ">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-65 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 hover:text-red-500 cursor-pointer transition">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  by {post.author} on {post.date}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default BlogHome;
