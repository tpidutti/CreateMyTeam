// use of dependencies that were added and file system
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const employee = require("./lib/employee.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");
const manager = require("./lib/manager.js");


inquirer
.prompt( [
    // questions for all employees
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
    // manager
    {
        type: "input",
        name: "office",
        message: "What is your office number?",
    },
    // engineer
    {
        type: "input",
        name: "githubUser",
        choices: "What is your GitHub username?",
    },
    // intern
    {
        type: "input",
        name: "school",
        message: "What school do you attend?"
    },
])
.then((response) => {
    const pageContent = makeHTML(response);
// create index.html file with user input to questions and action stated in makeHTML, if errors state and if created state
    fs.writeFile("index.html", pageContent, (err) => err ? console.log(err) : console.log("An index.html file was created.")
    );
})

function makeHTML(){
    
}