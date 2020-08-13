import MissionCtrlImage from "./static/projectImages/mission-ctrl.jpg";
import StatueProjectImage from "./static/projectImages/statue-project.jpg";
import BankTest from "./static/projectImages/bank-test.jpg";
import StatementOrganiserImage from "./static/projectImages/statement-organiser.jpg";
import MySecretGardenImage from "./static/projectImages/garden-project.jpg";

const projectList = [
  {
    name: "Mission Ctrl",
    repoLink: "https://github.com/tommyrharper/mission-ctrl",
    technologies: "MongoDB, Express, React, Node, SCSS",
    summary: "An arcade style game to teach VSCode shortcuts",
    image: MissionCtrlImage,
    deployedLink: "http://mission-ctrl.surge.sh/",
  },
  {
    name: "Bank Tech Test",
    repoLink: "https://github.com/Gina-Frankel/bank_tech_tests",
    technologies: "Ruby",
    summary: "A Command Line Interface program imitating a bank account",
    image: BankTest,
  },
  {
    name: "Statues",
    repoLink: "https://github.com/Gina-Frankel/statues",
    technologies:
      "React, React Router, Javascript, Python, Spacey, Beautiful Soup",
    summary:
      "Currently developing website to provide historical context about public art so that people can have a deeper understanding of British involvement in the Slave Trade",
    image: StatueProjectImage,
    deployedLink: "https://problematic-statues.netlify.app/",
  },

  {
    name: "Statement Organiser",
    repoLink: "https://github.com/Gina-Frankel/statues",
    technologies: "Python, REGEX",
    summary: "A script made to help organsise bank statements by company name",
    image: StatementOrganiserImage,
  },

  {
    name: "My Secret Garden",
    repoLink: "https://github.com/Gina-Frankel/my-secret-garden.git",
    technologies: "Mongo DB, Express, Node.js, React",
    summary:
      "A website designed to help people locate gardens in and around London",
    image: MySecretGardenImage,
    deployedLink: "https://my-secret-garden-dun.vercel.app",
  },
];

export default projectList;
