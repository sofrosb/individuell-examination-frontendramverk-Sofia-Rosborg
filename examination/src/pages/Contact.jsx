import React from "react";
import { useState } from "react";
import "./Contact.css";
import Icon from "@mdi/react";
import {
  mdiAccountOutline,
  mdiEmailOutline,
  mdiMessageTextOutline,
} from "@mdi/js";
export default function Contact() {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormState);
  };

  return (
    <div className="contact-container">
      <section className="contact-info">
        <div className="image-container">
          <img
            src="src/assets/connect.jpg"
            alt="connect"
            className="contact-image"
          />
        </div>
        <article className="contact-details">
          <p>Telefonnummer: 073-953 83 95</p>
          <p>Email: sofiarosborg@gmail.com</p>
          <a href="https://www.linkedin.com/in/sofia-rosborg-b5864015b/">
            LinkedIn
          </a>
        </article>
      </section>
      <form onSubmit={handleSubmit}>
        <h3>Eller skriv här:</h3>
        <div className="input-container">
          <Icon path={mdiAccountOutline} size={1} className="icon" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Namn"
          />
        </div>
        <div className="input-container">
          <Icon path={mdiEmailOutline} size={1} className="icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <div className="textarea-wrapper">
            <Icon
              path={mdiMessageTextOutline}
              size={1}
              className="textarea-icon"
            />
            <textarea
              name="message"
              placeholder="Meddelande"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Kontakta mig!
        </button>
      </form>
    </div>
  );
}
