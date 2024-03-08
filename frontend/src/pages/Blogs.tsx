import { AppBar } from "../components/AppBar";
import { AppBarSkeleton } from "../components/AppBarSkeleton";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useBlog";

export const Blogs = () => {
  const { isLoading, blogs } = useBlogs();

  return isLoading ? (
    <div>
      <div className="border-b border-gray-300 mt-5 pb-4 px-10">
        <AppBarSkeleton />
      </div>
      <div className="flex flex-col items-center">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    </div>
  ) : (
    <div>
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
