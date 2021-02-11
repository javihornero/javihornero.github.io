import React from "react";
import './SocialNetworks.scss'

import { IconContext } from "react-icons";
import { FaCodepen, FaLinkedin,FaGithub } from "react-icons/fa";

const networks = [
  {
    component: <FaCodepen />,
    link: "https://codepen.io/javihornero",
    tooltip: "",
  },
  {
    component: <FaLinkedin />,
    link: "https://www.linkedin.com/in/javier-hornero-fatás-95972a17b",
    tooltip: "",
  },
  {
    component: <FaGithub />,
    link: "https://github.com/javihornero",
    tooltip: "",
  },
];

const SocialNetworks = () => {
  return (
    <IconContext.Provider value={{ className: "sn-icon" }}>
      <div className="social-networks">
        {networks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link ? item.link : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.component}
            </a>
          );
        })}
      </div>
    </IconContext.Provider>
  );
};

export default SocialNetworks;
