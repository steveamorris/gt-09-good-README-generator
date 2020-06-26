const questions = [
    {
        type: "input",
        message: "Title",
        name: "title",
    },
    {
        type: "input",
        message: "Description",
        name: "description",
    },
    {
        type: "input",
        message: "Installation Instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage Instructions",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution Guidelines",
        name: "contribution",
    },
    {
        type: "input",
        message: "Test Instructions",
        name: "test",
    },
    {
        type: "checkbox",
        message: "Which License do you want to use?",
        name: "license",
        choices: [
            "None",
            "GNU v3.0",
            "MIT",
        ],
    },
    {
        type: "input",
        message: "GitHub Username",
        name: "github",
    },
    {
        type: "input",
        message: "Email",
        name: "email",
    },
];

module.exports = questions;