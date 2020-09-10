import React from "react";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";

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
        {/* <img src={props.value.icon} alt={props.value.name} /> */}

        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "rgb(0, 123, 255)" } }}
        >
          <div>{props.value.icon}</div>
        </IconContext.Provider>
      </a>
    </li>
  );
}
