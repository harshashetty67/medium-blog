import { BlogDetail } from "../components/BlogDetail";
import { useBlog } from "../hooks/useBlog";
import { useParams } from "react-router-dom";

// @ts-ignore
export const Blog = () => {
  const { id } = useParams();
  const { isLoading, blog } = useBlog({ id: id || "" });
  if (isLoading) return <div></div>;

  return (
    <div className="">
      {/* @ts-ignore */}
      <BlogDetail
        key={blog?.id}
        title={blog?.title}
        content={blog?.content}
        name={blog?.author.name}
      />
    </div>
  );
};
