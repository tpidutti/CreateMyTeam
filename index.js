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
            <h6 class="card-subtitle mb-2  text-center text-muted">${position}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${employeeId}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">Office Number: ${officeNum}</li>
                <li class="list-group-item">GitHub: ${username}</li>
                <li class="list-group-item">School: ${school}</li>
              </ul>
          <a href="#" class="card-link">link</a>

        </div>
      </div>
</body>
</html>`;

// inquirer
//   .prompt([
//     // questions for all employees
//     {
//       type: "input",
//       name: "employeeName",
//       message: "What is your name?",
//     },
//     {
//       type: "input",
//       name: "position",
//       message: "What is your position?",
//     },
//     {
//       type: "input",
//       name: "employeeId",
//       message: "What is your employee ID number?",
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your email address?",
//     },
//     // manager
//     {
//       type: "input",
//       name: "office",
//       message: "What is your office number?",
//     },
//     // engineer
//     {
//       type: "input",
//       name: "githubUser",
//       choices: "What is your GitHub username?",
//     },
//     // intern
//     {
//       type: "input",
//       name: "school",
//       message: "What school do you attend?",
//     },
//   ])
//   .then((response) => {
//     const pageContent = makeHTML(response);
//     // create index.html file with user input to questions and action stated in makeHTML, if errors state and if created state
//     fs.writeFile("index.html", pageContent, (err) =>
//       err ? console.log(err) : console.log("An index.html file was created.")
//     );
//   });

function createEngineer(){
    inquirer
  .prompt([
    {
        type: "input",
        name: "engineerName",
        message: "What is your name?",
      },
      {
        type: "input",
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

function buildATeam(){
    const pageContent = makeHTML(members);
    // create index.html file with user input to questions and action stated in makeHTML, if errors state and if created state
    fs.writeFile("index.html", pageContent, (err) =>
      err ? console.log(err) : console.log("An index.html file was created.")
    );
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseMember",
        choices: ["Engineer", "Manager", "Intern", "I'm done."],
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

createTeam()