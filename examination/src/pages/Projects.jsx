import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    fetch("https://api.github.com/users/sofrosb/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
          {projects.map((project) => (
            <li key={project.id}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
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
