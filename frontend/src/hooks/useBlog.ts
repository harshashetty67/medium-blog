import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../config";

interface Blog{
  id:string;
  title:string;
  content:string;
  author:{
    name:string
  }
}

export const useBlogs = () => {
  const [isLoading, setLoading] = useState(true);
  const[blogs,updateBlogs] = useState<Blog[]>([]);

  useState(()=>{
    axios.get(`${BACKEND_URL}/blog/all`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(respone=> {
      updateBlogs(respone.data.blogs);
      setLoading(false);
    })
  },[]);

  return {isLoading, blogs};
}

export const useBlog = ({id}:{id:string}) => {
  const [isLoading, setLoading] = useState(true);
  const[blog,updateBlog] = useState<Blog>();

  useState(()=>{
    axios.get(`${BACKEND_URL}/blog/${id}`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(respone=> {
      updateBlog(respone.data.blog);
      setLoading(false);
    })
  },[id]);

  return {isLoading, blog};
}