import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [contact, setCon] = useState({ name: "", email: "",message: ""});
  const Submit = (e) => {
    if(contact.email==""| contact.name==""|contact.message==""){
        alert("Please fill the fields !");
    }
    e.preventDefault();
    alert("Form submitted successfully!");
  setCon({ name: "", email: "", message: "" });
  };

  return (
    <div className="form">
      <h2>Contact Me!</h2>

      <form onSubmit={Submit}>
        <div className="fi">
          <label>Name</label>
          <input type="text"
            name="name"
            placeholder="Enter your name"
            value={contact.name}
            onChange={(e)=>setCon(e.target.value)}
          />
        </div>
        <div className="fi">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={contact.email}
            onChange={(e)=>setCon(e.target.value)}
          />
        </div>
        <div className="fi">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={contact.message}
            onChange={(e)=>setCon(e.target.value)}
          />
        </div>
        <button className="cbtn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;