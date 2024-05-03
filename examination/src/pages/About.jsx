import React from "react";
import "./About.css";
export default function About() {
  return (
    <main className="about">
      <section className="about-container">
        <article className="about-image-container">
          <img
            src="./src/assets/foto.jpg"
            alt="Sofia"
            className="about-image"
          />
        </article>
        <article className="about-details">
          <div className="about-title">
            <h2>Frontend Developer</h2>
            <span className="line"></span>
          </div>
          <p>
            Frontend-utvecklare in the making. Gillar ***. Finns i Stockholm men
            tillgänglig remote!
          </p>
        </article>
      </section>
    </main>
  );
}
