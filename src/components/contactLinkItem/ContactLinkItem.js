import React from "react";
import "./contactLinkItem.css";

export function ContactLinkItem(props) {
  return (
    <li className="nav-item px-3">
      <a
        className="nav-link"
        href={props.value.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">{props.value.icon} </div>
      </a>
    </li>
  );
}
