import React from "react";
import { FaLinkedinIn, FaGithubAlt, FaEnvelope } from "react-icons/fa";

const contactLinksList = [
  {
    name: "Github",
    link: "https://github.com/Gina-Frankel",
    icon: <FaGithubAlt />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gina-frankel",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Email",
    link: "mailto:g.frankel22@gmail.com",
    icon: <FaEnvelope />,
  },
];

export default contactLinksList;
