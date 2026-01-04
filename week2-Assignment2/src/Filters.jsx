export default function Filters({ filter, setFilter, search, setSearch }) {
  return (
    <div className="filters">
      <input
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
    </div>
  );
}
