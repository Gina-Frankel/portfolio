import React from "react";
import { IconContext } from "react-icons";

export function ContactLinkItem(props) {
  return (
    <li className="nav-item px-3">
      <a
        className="nav-link"
        href={props.value.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "rgb(27, 182, 187)" } }}
        >
          <div>{props.value.icon}</div>
        </IconContext.Provider>
      </a>
    </li>
  );
}
