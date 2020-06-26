// function to generate markdown for README
function generateMarkdown(data) {
  var badge = "";
  console.log(data.license);
  if(data.license == 'GNU v3.0'){
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }else if(data.license == 'MIT'){
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }else{
    console.log("No license");
  };
  return `# ${data.title}
  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contribution)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contribution}

  ## License

  ${data.license}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions or comment please contact me via email at ${data.email} adn find me at https://github.com/${data.github}

  `;
}

module.exports = generateMarkdown;
