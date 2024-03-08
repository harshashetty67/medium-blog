import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";

interface BlogContent {
  title: string;
  content: string;
}

export const NewBlog = () => {
  const [blogContent, setBlogContent] = useState<BlogContent>({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  async function createPost() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/blog`,
        {
          title: blogContent?.title,
          content: blogContent?.content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (err) {
      alert(`Some error occured : ${err}`);
    }
  }

  return (
    <div>
      <div className="flex justify-between border-b-2 border-slate-200 px-12 py-2">
        <Link to={"/blogs"}>
          <div className="font-semibold text-lg rounded-full bg-black px-4 py-2 text-white flex justify-end cursor-pointer">
            Medium
          </div>
        </Link>

        <div>
          <button
            onClick={createPost}
            className=" bg-green-600 text-white rounded-full px-5 py-2 font-medium"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="mt-4 w-full flex justify-center ">
        <div className="w-6/12">
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setBlogContent({ ...blogContent, title: e.target.value });
            }}
            type="text"
            placeholder="Title"
            className="block w-full p-3 mb-4 text-black rounded-lg bg-gray-50 text-5xl"
          />

          <textarea
            onChange={(e) => {
              console.log(e.target.value);
              setBlogContent({ ...blogContent, content: e.target.value });
            }}
            rows={8}
            className="block p-4 w-full text-black bg-gray-50 rounded-lg text-lg"
            placeholder="Tell your story..."
          ></textarea>

          <button
            onClick={createPost}
            className="mt-4 bg-green-600 text-white font-medium px-4 py-2 rounded-full"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};
