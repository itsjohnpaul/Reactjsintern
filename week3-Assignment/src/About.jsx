import React from "react";
import "./About.css";

function About() {
  return (
    <div className="ab">
      <h1>About This Project</h1>
      <p>
        Hi, I'm <strong>John Paul</strong> 👋 and I created this page as part of my internship project.
        This is a simple and user-friendly eCommerce website built using React.
      </p>
      <p>
        During this internship, I learned how to build real-world applications using modern
        frontend concepts like <strong>state management, props, custom hooks, reducers</strong>,
        and reusable components.
      </p>
      <p>
        This project helped me understand how an eCommerce platform works — from displaying
        products to adding them to cart and calculating total price dynamically.
      </p>
      <p>
        I developed this website based on what I learned throughout this week and focused on
        writing clean, modular, and scalable code.
      </p>
      <p className="fo">
        Thanks for checking out my project 🚀
      </p>
    </div>
  );
}

export default About;
