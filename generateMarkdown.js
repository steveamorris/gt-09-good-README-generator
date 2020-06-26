// function to generate markdown for README


function generateMarkdown(data) {

    return [`"# Title",
    "## Title",
    "Here is a paragraph"
 
    `].join(`\n`);
//     return `# ${data.title}
//      ## Description   

//      ${data.description}   
          
     
//      ## Installation Instructions
     
//      ${data.installation}
     
     
//      ## Usage Instructions
     
//      ${data.usage}
     
     
//      ## Contribution Instructions
     
//      ${data.contribution}
    
     
//      ## Tests
     
//      ${data.test}
     
//      ## Questions

//   `;
  }
  
  module.exports = generateMarkdown;