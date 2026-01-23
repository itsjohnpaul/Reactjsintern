import React from "react";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div
        style={{  padding: "30px",
          textAlign: "center",
          background: "#f4f6ff",
          minHeight: "80vh",
        }}
      >
        <h1 style={{ color: "#1f2937", marginBottom: "10px" }}>
          Welcome to MY Blogs
        </h1>

        <p style={{ color: "#374151", fontSize: "16px" }}>
          Read blogs, explore ideas, and learn something new every day ✨
        </p>
      </div>
    </div>
  );
}

export default Home;
