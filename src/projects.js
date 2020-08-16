import MissionCtrlImage from "./static/projectImages/mission-ctrl.jpg";
import StatueProjectImage from "./static/projectImages/statue-project.jpg";
import BankTest from "./static/projectImages/bank-test.jpg";
import StatementOrganiserImage from "./static/projectImages/statement-organiser.jpg";
import MySecretGardenImage from "./static/projectImages/garden-project.jpg";
import MissionCtrlInspirationImage from "./static/projectImages/mission-ctrl-inspiration.jpg";

const projectList = [
  {
    name: "Mission Ctrl",
    repoLink: "https://github.com/tommyrharper/mission-ctrl",
    technologies: "MongoDB, Express, React, Node, SCSS",
    summary: "An arcade style game to teach VSCode shortcuts",
    image: MissionCtrlImage,
    deployedLink: "http://mission-ctrl.surge.sh/",
    process: {
      introduction:
        "Mission Ctrl was my final group project while studying at Makers Academy. Mission Ctrl was born out of a need to learn shortcuts to help make writing code quicker. Visual Studio Code is a free source-code editor that many developers use. While studying at Makers Academy I was trying to learn the shortcuts but it was difficult to learn them while also trying to learn how to code.",
      explanation:
        "The aesthetics for the project are based on 80s arcade style. We used a dark pixellated space themed background alongside pixellated text so as to create a lo-fi look. Flashes of bright colour referencing classic games such as space invaders, appear when you score a point.",
      image: MissionCtrlInspirationImage,
    },
  },
  {
    name: "Bank Tech Test",
    repoLink: "https://github.com/Gina-Frankel/bank_tech_tests",
    technologies: "Ruby",
    summary: "A Command Line Interface program imitating a bank account",
    process: {
      introduction:
        "This is a Tech Test, which demonstrates Test Driven Development and Object Oriented Design principles and Agile iterations. The program allows you to create an account, deposit and withdraw funds and print statements using the command line.",
    },
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
    process: {
      introduction:
        "The aim of this project was to  teach people about slavery through examining public art in England. The project seeks to provide information about statues that represent people involved in slavery. Through looking at these people in more detail an understanding can be built  about the time-scale of slavery, and the context and values which enabled slavery.",
    },
  },

  {
    name: "Statement Organiser",
    repoLink: "https://github.com/Gina-Frankel/statues",
    technologies: "Python, REGEX",
    summary: "A script made to help organsise bank statements by company name",
    image: StatementOrganiserImage,
    process: {
      introduction:
        "Denmark Street Studios, a small business, asked me to find a way to help organise the spreadsheets of their bank account statements. They wanted a way to organise their bank statement by the company from where the transaction came from, as this would help them track and report their spending.",
    },
  },

  {
    name: "My Secret Garden",
    repoLink: "https://github.com/Gina-Frankel/my-secret-garden.git",
    technologies: "Mongo DB, Express, Node.js, React",
    summary:
      "A website designed to help people locate gardens in and around London",
    image: MySecretGardenImage,
    deployedLink: "https://my-secret-garden-dun.vercel.app",
    process: {
      introduction:
        "This idea behind this website is to help people find gardens in and around London to explore. The learning motivation of the project was to learn a new react framework, Next; explore using React with Mongo DB, express and node js; and use the google maps API. ",
    },
  },
];

export default projectList;
