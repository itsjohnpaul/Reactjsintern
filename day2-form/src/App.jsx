import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import FormComponent from "./Formcomponent";
import "./App.css"; 

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) 
    {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim())
    {
       newErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) 
    {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) 
    {
      newErrors.password = "Password is required";
    }
    else if (formData.password.length < 6)
    {
       newErrors.password = "Password should be 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", password: "" });
    }
  };

  const handleDelete = () => setSubmittedData(null);

  return (
    <div className="con">
      <h1>FORM REGISTRATION</h1>
      {!submittedData ? (
        <FormComponent  formData={formData} errors={errors}  handleChange={handleChange} handleSubmit={handleSubmit}/> ) :
         ( <DisplayComponent submittedData={submittedData} handleDelete={handleDelete}/> )}
    </div>
  );
}

export default App;
