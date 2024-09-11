function getUserQuestions(){
  return [
    {
      type: "input",
      message: "Title of  project?",
      name: "title"
    },
    {
      type: "input",
      message: "Description of the project?",
      name: "description"
    },
    {
      type: "input",
      message: "Installation instructions?",
      name: "installation"
    },
    {
      type: "input",
      message: "How to use app?",
      name: "usage"
    },
    {
      type: "list",
      message: "Licenses?",
      name: "license",
      choices: licenseOptions
    },
    {
      type: "input",
      message: "Github username?",
      name: "github"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
    },
    {
      type: "input",
      message: "How to contribute?",
      name: "contribute"
    },
    {
      type: "input",
      message: "How to test the project?",
      name: "test"
    },
  ]
};

module.exports = {getUserQuestions}

const licenseOptions = [
  {
      name: "Apache - [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

  },
  {
      name: "boost - [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
      name: "BSD2 - [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  },
  {
      name: "CC0 - [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  },
  {
      name: "GNU GPL v3 - [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  },
  {
      name: "IBM Public License - [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  },
  {
      name: "The MIT License - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  {
      name: "Mozilla Public License 2.0 - [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }


]
