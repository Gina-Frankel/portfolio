import MissionCtrlImage from "./static/projectImages/mission-ctrl.jpg";
import StatueProjectImage from "./static/projectImages/statue-project.jpg";
import BankTest from "./static/projectImages/bank-test.jpg";
import StatementOrganiserImage from "./static/projectImages/statement-organiser.jpg";
import MySecretGardenImage from "./static/projectImages/garden-project.jpg";
import MissionCtrlInspirationImage from "./static/projectImages/mission-ctrl-inspiration.jpg";
import StoryCVImage from "./static/projectImages/story-cv.jpg";
import CustomisableCvDesign from "./static/projectImages/customisable-cv-designs.jpg";
import CustomisableCvUserFlow from "./static/projectImages/customisable-cv-user-flow.png";

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
        "The aesthetics for the project are based on 80s arcade style. We used a dark pixellated space themed background alongside pixellated text so as to create a lo-fi look. Flashes of bright colour referencing classic games such as space invaders, appear when you score a point. See image below for our inspiration board.",
      image: MissionCtrlInspirationImage,
    },
  },
  {
    name: "Story CV",
    repoLink: "https://github.com/makersacademy/example-story-website",
    deployedLink: "https://youthful-hopper-96a077.netlify.app/",
    technologies: "React, Gatsby, Typescript, Sass",
    summary:
      "Work In Progress - This project aims to provide a customisable template for developers to demonstrate their potential",
    image: StoryCVImage,
    process: {
      introduction: `I am working on a group project with Makers Academy to develop a new way for graduates to showcase their skills. As a result of the current COVID situation, there have been fewer jobs from Makers so the majority of graduates have to seek jobs externally. The problem is how to convey the value and potential of each graduate in a CV.`,
      explanation: `The design uses storytelling principles to reconceptualise the CV as a document that presents a person as more than their current skill set.

      The design process involved:
      \t * Analysing role of the CV in the journey from bootcamp student to developer
      \t * Plotting the content of the website using a narrative structure
      \t * Sketching different ideas for the design and evaluating the design in order to arrive at the best solution 
      \t * Creating wireframes and mockups on sketch
    `,
      imageDescription: "Mockups",
      image: CustomisableCvDesign,
      image2Description: `User Flow diagram`,
      image2: CustomisableCvUserFlow,
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
      "Developed website to provide historical context about public art so that people can have a deeper understanding of British involvement in the Slave Trade",
    image: StatueProjectImage,
    deployedLink: "https://problematic-statues.netlify.app/",
    process: {
      introduction:
        "The aim of this project was to  each people about slavery through examining public art in England. The project seeks to provide information about statues that represent people involved in slavery. Through looking at these people in more detail an understanding can be built  about the time-scale of slavery, and the context and values which enabled slavery.",
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
      explanation:
        "Many spreadsheet programs such as numbers and  excel offer a way to organise your data. The way the sorting mechanism works is by looking through a column, which is chosen by the user, and then grouping the data in this column which is the same.For example if you had a column called  ‘pets’ with five animals, three of which were dogs and three of which were cats, then it would group all the cats together, and group all the dogs together. Generally in bank statement there is a column called ‘description’ which provides the company were the transaction came from but this is combined with other information, so one is not able to sort it from the description.\n\n I created a script with Python, that uses regex to look through the description to find the company name. The company name is then used to create a ‘company’ column of data. This ‘company’ column can be used to organise the statement by company names. The above image illustrates the result of running the script, opening up the updated spreadsheet in the program Numbers and then using Numbers category function to create a spreadsheet organised by companies.",
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
        "This idea behind this website is to help people find gardens in and around London to explore. The learning motivation of the project was to learn a new react framework, Next; explore using React with Mongo DB, express and node js; and use the google maps API.",
    },
  },
];

export default projectList;
