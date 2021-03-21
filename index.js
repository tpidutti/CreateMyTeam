// use of dependencies that were added and file system
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

const members = []


const makeHTML = () =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create-My-Team</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class= "bg-light p-5 rounded-lg m-3">
        <h1 class="display-4 text-center">My Team</h1>
    </div>
    <div class="card" style="width: 18rem;">
        <div class= "card-header">
            <h5 class="card-title text-center">${employeeName}</h5>
            <h6 class="card-subtitle mb-2  text-center text-muted">${jobTitle}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${employeeID}</li>
                <li class="list-group-item">Email: ${employeeEmail}</li>
                <li class="list-group-item">Office Number: ${managerOffice}</li>
                // <li class="list-group-item">GitHub: ${engineerGithub}</li>
                // <li class="list-group-item">School: ${internSchool}</li>
              </ul>
          <a href="#" class="card-link">link</a>

        </div>
      </div>
</body>
</html>`;


// function createEmployee(){
//   inquirer
// .prompt([
//   {
//       type: "input",
//       name: "employeeName",
//       message: "What is your name?",
//     },
//     {
//       type: "number",
//       name: "employeeID",
//       message: "What is your employee ID number?",
//     },
//     {
//       type: "input",
//       name: "employeeEmail",
//       message: "What is your email address?",
//     },
//   ])
//   .then(response => {
//       let employee = new Employee(
//           response.employeeName,
//           response.employeeID,
//           response.employeeEmail,
//           )
//           members.push(employee);
//           createTeam()
//   })

function createManager(){
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
      type: "input",
      name: "managerOffice",
      message: "What is your office number?",
    },
  ])
  .then(response => {
      let manager = new Manager(
          response.managerName,
          response.managerID,
          response.managerEmail,
          response.managerOffice
          )
          members.push(manager);
          createTeam()
  })
  
}

function createEngineer(){
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
    .then(response => {
        let engineer = new Engineer(
            response.engineerName,
            response.engineerID,
            response.engineerEmail,
            response.engineerGithub
            )
            members.push(engineer);
            createTeam()
    })
    
}

function createIntern(){
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
  .then(response => {
      let intern = new Intern(
          response.internName,
          response.internID,
          response.internEmail,
          response.internSchool
          )
          members.push(intern);
          createTeam()
  })
  
}


function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseMember",
        choices: ["Engineer", "Manager", "Intern", "I'm done building my team."],
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

function buildATeam(){
  const pageContent = makeHTML(members);
  // create index.html file with user input to questions and action stated in makeHTML, if errors state and if created state
  fs.writeFile("index.html", pageContent, (err) =>
    err ? console.log(err) : console.log("An index.html file was created.")
  );
}

createTeam()

