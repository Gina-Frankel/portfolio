import React from "react";
import "./Footer.css";
import { FooterLinks } from "../index";
import contactLinksList from "../../contactLinks";

export function Footer() {
  const FooterLinkItems = contactLinksList.map((contactLink, index) => (
    <FooterLinks key={index} value={contactLink} />
  ));

  return (
    <footer id="stickyFooter" className="bg-dark ">
      <div className="container d-flex justify-content-end">
        <div>{FooterLinkItems}</div>
      </div>
    </footer>
  );
}

{
  /* <a
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
          </a> */
}
