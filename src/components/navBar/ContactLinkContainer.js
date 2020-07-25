import React from "react";
// import "./Footer.css";
import { FooterLinks } from "../index";
import contactLinksList from "../../contactLinks";

export function Footer() {
  const FooterLinkItems = contactLinksList.map((contactLink, index) => (
    <FooterLinks key={index} value={contactLink} />
  ));

  return (
    <div className="container d-flex justify-content-end">
      <div>{FooterLinkItems}</div>
    </div>
  );
}
