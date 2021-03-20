const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

inquirer
.prompt( [
    {
        type: "input",
        name: "employee",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?", 
    },
    {
        type: "input",
        name: "office",
        message: "What is your office number?",
    },
    {
        type: "input",
        name: "githubUser",
        choices: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "school",
        message: "What school do you attend?"
    },
])
.then((response) => {
    const pageContent = makeHTML(response);

    fs.writeFile("index.html", pageContent, (err) => err ? console.log(err) : console.log("An index.html file was created.")
    );
})

function pageContent(){
    
}