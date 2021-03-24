// use of dependencies that were added, file system, and created classes
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const makeHTML = require("./src/makeHTML");

const members = [];

// user asked to give info on characteristics of manager and this function take that info, creates a unique manager with it and puts that in the members array
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your name?",
      },
      {
        type: "number",
        name: "managerID",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your email address?",
      },
      {
        type: "number",
        name: "managerOffice",
        message: "What is your office number?",
      },
    ])
    .then((response) => {
      let manager = new Manager(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
      );
      members.push(manager);
      createTeam();
    });
}
// user asked to give info on characteristics of engineer and this function take that info, creates a unique engineer with it and puts that in the members array
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your name?",
      },
      {
        type: "number",
        name: "engineerID",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        choices: "What is your GitHub username?",
      },
    ])
    .then((response) => {
      let engineer = new Engineer(
        response.engineerName,
        response.engineerID,
        response.engineerEmail,
        response.engineerGithub
      );
      members.push(engineer);
      createTeam();
    });
}
// user asked to give info on characteristics of intern and this function take that info, creates a unique intern with it and puts that in the members array
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your name?",
      },
      {
        type: "number",
        name: "internID",
        message: "What is your employee ID number?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school do you attend?",
      },
    ])
    .then((response) => {
      let intern = new Intern(
        response.internName,
        response.internID,
        response.internEmail,
        response.internSchool
      );
      members.push(intern);
      createTeam();
    });
}
// user prompted to decide which type of emplyee to create
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseMember",
        choices: [
          "Engineer",
          "Manager",
          "Intern",
          "I'm done building my team.",
        ],
      },
    ])
    .then((response) => {
      switch (response.chooseMember) {
        case "Engineer":
          createEngineer();
          break;
        case "Manager":
          createManager();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          buildATeam();
      }
    });
}

// members array used to create html document
function buildATeam() {
  const pageContent = makeHTML(members);
  // create index.html file with user input to questions and action stated in makeHTML, if errors state and if created state
  fs.writeFile("index.html", pageContent, (err) =>
    err ? console.log(err) : console.log("An index.html file was created.")
  );
}

// call on function to assemble the team members based on which ones the user picked and using the info provided in each type of employees create function
createTeam();
