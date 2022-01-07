import * as React from "react";
import { StarIcon } from "./StarIcon";

export const ProjectCard = ({ project }) => {
  const linkRef = React.useRef(null);

  const handleClick = () => {
    linkRef?.current?.click();
  };

  return (
    <article
      className="card"
      aria-labelledby={`project-${project.id}`}
      onClick={handleClick}
    >
      <div className="card-content">
        <div>
          <h3 className="card-title" id={`project-${project.id}`}>
            <a
              ref={linkRef}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </h3>
          <p className="card-description">{project.description}</p>
        </div>

        <div>
          <p className="stargazer">
            <StarIcon /> {project.stargazerCount}
          </p>
        </div>
      </div>
    </article>
  );
};
