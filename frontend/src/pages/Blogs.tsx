import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlog";

export const Blogs = () => {
  const { isLoading, blogs } = useBlogs();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="">
      <div className="border-b border-gray-300 mt-5 pb-4 px-10">
        <AppBar name="John" />
      </div>

      <div className="flex flex-col items-center">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            key={blog.id}
            name={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate="Dec 2, 2023"
          />
        ))}
      </div>
    </div>
  );
};
