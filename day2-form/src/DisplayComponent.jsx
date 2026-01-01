
import "./DisplayComponent.css";

function DisplayComponent({ submittedData, handleDelete }) {
  return (
    <div className="discon">
      <h2>Submitted Data</h2>
      <p><strong>Name:</strong> {submittedData.name}</p>
      <p><strong>Email:</strong> {submittedData.email}</p>

      <button onClick={handleDelete} className="disbut">
        Delete
      </button>
    </div>
  );
}

export default DisplayComponent;
