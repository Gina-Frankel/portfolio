import React from "react";
// import "./Footer.css";

export function ContactLinkItem(props) {
  return (
    <a
      className="contactLink  px-2"
      href={props.value.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.value.name}
    </a>
  );
}
