import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
        setBlog(null);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) return <center><h2>Loading...</h2></center>;
  if (!blog) return <h2>Blog not found !</h2>;

  return (
    <div style={{ padding: "20px" }}>


      <h2 style={{textAlign:"center"}}>{blog.title}</h2>
      <p>{blog.body}</p>
      <center>      
         <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: "15px", padding: "8px", cursor: "pointer", background: "#2563eb", color: "white", borderRadius: "10px" }}
      >
        Back
      </button></center>
    </div>
  );
}

export default BlogDetail;
