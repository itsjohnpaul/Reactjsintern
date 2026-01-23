import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "60px" }}>404 Error !</h1>
      <h2>Page Not Found</h2>

      <Link to="/home">Go Home</Link>
    </div>
  );
}

export default NotFound;
