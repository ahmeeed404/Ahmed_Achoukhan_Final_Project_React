import { createContext, useState } from "react";
import blogsData from "../../data/blog/blog";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState(blogsData || []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
