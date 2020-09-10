import React from "react";
import { FaBeer } from "react-icons/fa";
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
        <img src={props.value.icon} alt={props.value.name} />
      </a>
      <FaBeer />
    </li>
  );
}
