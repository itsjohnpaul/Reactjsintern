import React, { useEffect, useState } from 'react';
import "./App.css";
import "./Loading.css";
import Loading from './Loading';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error in fetching!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const deleted= (id) => {
    setData((pre) =>
      pre.filter((user) => user.id !== id)
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>DATA</h1>

      {data.map((user) => (
        <div key={user.id} className="box">
          <h3><strong>Name:</strong> {user.name}</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="del" onClick={() => deleted(user.id)} >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
