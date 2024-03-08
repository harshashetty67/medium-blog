import { BlogDetail } from "../components/BlogDetail";
import { BlogDetailSkeleton } from "../components/BlogDetailSkeleton";
import { useBlog } from "../hooks/useBlog";
import { useParams } from "react-router-dom";

// @ts-ignore
export const Blog = () => {
  const { id } = useParams();
  const { isLoading, blog } = useBlog({ id: id || "" });
  if (isLoading) return <BlogDetailSkeleton />;

  return (
    <BlogDetail
      key={blog?.id}
      title={blog?.title}
      content={blog?.content}
      name={blog?.author.name || "Anonymous"}
    />
  );
};
