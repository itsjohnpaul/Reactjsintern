import React from "react";

function Profile() {
  return (
    <div
      style={{
        margin:"0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "white",
      }}
    >
      <div
        style={{
          width: "360px",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
          border: "1px solid rgba(99, 94, 166, 0.2)",
        }}
      >
        <h2
          style={{
            marginBottom: "10px",
            color: "#1f2937",
            textAlign: "center",
          }}
        >
          John Paul P
        </h2>

        <p style={{ margin: "6px 0", color: "#374151" }}>
          <strong>Role:</strong> React Developer
        </p>

        <p style={{ margin: "6px 0", color: "#374151" }}>
          <strong>About:</strong>
        </p>

        <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.6" }}>
          I am John Paul, a React developer. I developed this blog front-end
          application using React and navigation concepts like routing,
          NavLink, useParams, and protected routes.
        </p>
      </div>
    </div>
  );
}

export default Profile;
