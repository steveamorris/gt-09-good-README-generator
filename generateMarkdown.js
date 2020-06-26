// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

  If you have any questions or comment please contact me via email at ${data.email}

  `;
}

module.exports = generateMarkdown;
