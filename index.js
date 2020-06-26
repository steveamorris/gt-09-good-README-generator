// import pacakges
const generateMarkdown = require("./generateMarkdown");
const questions = require("./questions");
const fs = require("fs");
const inquirer = require("inquirer");

// Function Definitions
// Write output of generateMarkdown to filename
function writeToFile(filename, md){
    fs.writeFile(filename, md, function(err) {
        if (err) {
          throw err;
        };
    });
};

//  Pass questions object to inquirer prompt method, take Answers and pass to generateMarkdown, save to variable
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        // call geneateMarkdown
        const newMD = generateMarkdown(answers);
        // pass generated markdown to writeTo File fucntion
        writeToFile("readme1.md", newMD);
    });
};

init();

