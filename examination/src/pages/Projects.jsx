import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Projects.css";

export default function Projects() {
  // "projects" är en variabel som innehåller en array av objekt och
  // "setProjects" är funktionen som används för att uppdatera tillståndet för "projects":
  const [projects, setProjects] = useState([]);
  const theme = useSelector((state) => state.theme.theme);

  // useEffect förklaras i README.md:
  useEffect(() => {
    fetch("https://api.github.com/users/sofrosb/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="projects">
      <section
        className={`projects-container ${
          theme === "light" ? "light-theme" : "dark-theme"
        }`}
      >
        <h2>GitHub-projekt</h2>
        <ul>
          {/* när setProjects(data) anropas renderar React om komponenten och den
          uppdaterade arrayen "projects" visas i ul-elementet. */}
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer" // noopener noreferrer anger att länken ska öppnas i en ny flik, att den nya fliken inte ska ha tillgång till den ursprungliga sidan och att inga uppgifter om den ursprungliga sidan ska skickas när länken klickas på.
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
