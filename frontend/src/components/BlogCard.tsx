import { Link } from "react-router-dom";

interface BlogCard {
  id: string;
  name: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  name,
  title,
  content,
  publishedDate,
}: BlogCard) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="px-4 py-6 w-8/12 cursor-pointer  md:w-6/12">
        <div className="flex items-center">
          <span className="rounded-full font-semibold text-md border text-center px-3 py-1 object-cover bg-slate-300 text-black ">
            {name[0].toLocaleUpperCase()}
          </span>
          <span className="ml-2 font-medium text-md">{name}</span>
          <span className="ml-1 text-slate-500 font-medium relative bottom-0.5">
            .
          </span>
          <span className="ml-1 text-slate-500 text-md font-normal">
            {publishedDate}
          </span>
        </div>
        <div className="mt-2 font-bold text-2xl">{title}</div>
        <div className="mt-2 font-serif text-slate-600">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="mt-5 text-slate-500 font-normal text-md font-sans">
          {Math.floor(content.length / 100)} min read
        </div>

        <div className="w-full h-0 border border-gray-100 mt-5"></div>
      </div>
    </Link>
  );
};
