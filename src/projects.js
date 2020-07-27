import MissionCtrlImage from "./static/projectImages/mission-ctrl.jpg";
import StatueProjectImage from "./static/projectImages/statue-project.jpg";
import BankTest from "./static/projectImages/bank-test.jpg";
import StatementOrganiserImage from "./static/projectImages/statement-organiser.jpg";

const projectList = [
  {
    name: "Mission Ctrl",
    repoLink: "https://github.com/tommyrharper/mission-ctrl",
    technologies: "MongoDB, Express, React, Node, SCSS",
    summary: "An arcade style game to teach VSCode shortcuts",
    image: MissionCtrlImage,
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
  },

  {
    name: "Statement Organiser",
    repoLink: "https://github.com/Gina-Frankel/statues",
    technologies: "Python, REGEX",
    summary: "A script made to help organsise bank statements by company name",
    image: StatementOrganiserImage,
  },
];

export default projectList;
