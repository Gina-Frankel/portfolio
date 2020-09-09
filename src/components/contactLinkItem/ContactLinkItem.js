import React from "react";
// import "./Footer.css";

export function ContactLinkItem(props) {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        // className="contactLink  px-2"
        href={props.value.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.value.name}
      </a>
    </li>
  );
}
