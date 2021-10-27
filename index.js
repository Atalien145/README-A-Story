const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({ title, description, installation, usage, contribution, license, tests, questions, username, email }) =>
  `# ${title}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contibution)
  * [License](#license)
  * [Tests](#tests) 
  * [Questions](#questions)
  * [GitHub-Username](#github-username)
  * [Email](#email)
  
  
  ---
  
  ---
  ## Description 
  > ${description}
  
  ---
  
  ## Installation
  > ${installation}
  
  ## Usage
  
  > ${usage}
  
  ## Contribution 
  > ${contribution}
  
  ---
  
  ---
  ## License 
  > ${license}


   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  
  ## Tests 
  > ${tests}
  
  ## Questions
  > If you have any further 
  ${questions} you can contact me at (555)-555-5555

  
## GitHub Username 

> ${username}

## Email
> ${email}

  
  ---
  
  ---
  
  # And Thats All Folks!
  `;

inquirer
  .prompt([
    {
        type: "input",
        message: "what is the title of the project?",
        name: "title"
    }, 
    {
        type: "input",
        message: "what is the project about? Give a detailed description of how your app works?",
        name: "description"

    },
    {
        type: "input",
        message: "License used (We are using MIT for this project)",
        name: "license"

    },
    {
        type: "input",
        message: "what is does the user need to install the app?",
        name: "installation"

    },
    {
        type: "input",
        message: "how is the app used? Give detailed insructions on how to use your app and its features?",
        name: "usage"

    },
    {
        type: "input",
        message: "Contact info?",
        name: "questions"

    },
    {
        type: "input",
        message: "what is your GitHub username?",
        name: "Username"

    },
    {
        type: "input",
        message: "what is your email address?",
        name: "email"

    },
    
  ])
  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });