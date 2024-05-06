import React from "react";
import { useSelector } from "react-redux";
import "./About.css";
export default function About() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <main className="about">
      <section
        className={`about-container ${
          theme === "light" ? "light-theme" : "dark-theme"
        }`}
      >
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
            <span
              className={`line ${
                theme === "light" ? "light-theme" : "dark-theme"
              }`}
            ></span>
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
