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
          <p className="about-text">
            Hej där! Jag är en blivande frontend-utvecklare med en passion för
            att skapa intuitiva och användarvänliga gränssnitt. Med mina
            kunskaper och kreativitet strävar jag efter att göra webbupplevelser
            både tilltalande och funktionella. Jag är baserad i Stockholm men är
            också tillgänglig för fjärrarbete, redo att bidra till spännande
            projekt världen över. Utöver kodning älskar jag att umgås med nära
            och kära, dricka öl, simma och gamea samt spenderar gärna tid på att
            utforska nya teknologier och designmönster. Jag ser fram emot att
            kombinera min tekniska expertis med mina personliga intressen för
            att skapa innovativa och engagerande digitala lösningar. Låt oss
            skapa något fantastiskt tillsammans! 🚀
          </p>
        </article>
      </section>
    </main>
  );
}
