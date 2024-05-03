import React from "react";
import { useEffect, useState } from "react";
import "./Projects.css";
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sofrosb/repos")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="projects">
      <section className="projects-container">
        <h2>GitHub-projekt</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
