import { Link } from "react-router-dom";

export const AppBar = ({ name }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <Link to={"/blogs"}>
        <div className="font-semibold text-lg rounded-full bg-black px-4 py-2 text-white flex justify-end cursor-pointer">
          Medium
        </div>
      </Link>

      <div className="flex items-center">
        <Link to={"/publish"}>
          <button className=" bg-green-600 text-white rounded-full px-4 py-2 font-medium">
            New Blog
          </button>
        </Link>
        <div>
          <span className="rounded-full font-semibold text-md border text-center px-4 py-2 object-cover bg-slate-300 text-black ml-4">
            {name[0].toLocaleUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};
