import React from "react";

export function LinkContainer() {
  return (
    <div className="link">
      <div className="row ">
        <div className="">
          <a
            href="https://github.com/Gina-Frankel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="offset-md-1">
          <a
            href="https://www.linkedin.com/in/gina-frankel"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="offset-md-1">
          <a
            href="https://github.com/Gina-Frankel/CV"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github CV
          </a>
        </div>
      </div>
    </div>
  );
}
