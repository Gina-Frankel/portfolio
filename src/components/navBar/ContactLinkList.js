import React from "react";
// import "./Footer.css";

import { ContactLinkItem } from "../index";
import contactLinksList from "../../contactLinks";

export function ContactLinkList() {
  const FooterLinkItems = contactLinksList.map((contactLink, index) => (
    <ContactLinkItem key={index} value={contactLink} />
  ));

  return (
    <div className="container d-flex justify-content-end">
      <div>{FooterLinkItems}</div>
    </div>
  );
}
