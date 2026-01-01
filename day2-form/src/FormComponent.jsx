import "./FormComponent.css";

function FormComponent({ formData, errors, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="formcon">
      <h2>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="input"
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="input"
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="input"
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <button type="submit" className="rebut" >Register</button>
    </form>
  );
}

export default FormComponent;
