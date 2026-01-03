import "./App.css";
import "./Loading.css";
import Loading from "./Loading";
import useFetch from "./useFetch";

function App() {
  const [data, loading, error, setData] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const deleted = (id) => {
    setData((prev) => prev.filter((post) => post.id !== id));
  };

  if (loading) return <Loading />;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>POSTS</h1>

      {data.map((post) => (
        <div key={post.id} className="box">
          <h3><strong>Title:</strong> {post.title}</h3>
          <p><strong>Body:</strong> {post.body}</p>

          <button className="del" onClick={() => deleted(post.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
