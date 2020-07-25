import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer id="stickyFooter" className="bg-dark ">
      <div className="container text-center">
        <div className="row ">
          <div className="">
            <a
              className="contactLink"
              href="https://github.com/Gina-Frankel"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="offset-md-1">
            <a
              className="contactLink"
              href="https://www.linkedin.com/in/gina-frankel"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="offset-md-1">
            <a
              className="contactLink"
              href="https://github.com/Gina-Frankel/CV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
