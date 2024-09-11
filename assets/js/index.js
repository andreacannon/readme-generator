
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const {getUserQuestions} = require("./assets/questions");
const getQuestions = getUserQuestions();

// // TODO: Create a function to initialize app
async function start(){
  
  const data = await inquirer.prompt(getQuestions);
  const result = 
`
# ${data.title}
    
## Description
    
${data.description}
    
## Table of Contents
 - [Description](#description) 
 - [Installation](#installation) 
 - [Usage](#usage)
 - [License](#license)
 - [Contribute](#contribute)
 - [Tests](#tests)

## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## License

This application is covered under the following license. You can learn more about the license by clicking the link on the badge.
${data.license}
    
## Contributing
    
${data.contribute}
    
## Tests
    
${data.test}
`

  // TODO: Create a function to write README file
  fs.writeFile("README.md", result, function(err){
    if(err) console.log(err)
  })
}

// Function call to initialize app
start()