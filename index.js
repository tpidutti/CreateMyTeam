// use of dependencies that were added, file system, and created classes
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

//const members = [Engineer, Intern, Manager];
const members = [];

const makeHTML = (response) => {
  //dynamicaly create our html
  // have our standard html
  // add each unique card to that html

  let entireHTML = beginHTML +  

  if(members === Manager){
card =
   ` <div class="card" style="width: 18rem;">
                <div class= "card-header">
                    <h5 class="card-title text-center">${name}</h5>
                    <h6 class="card-subtitle mb-2  text-center">Manager</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Email: <a href=mailto:${email}</a></li>
                        <li class="list-group-item">Office Number: ${officeNum}</li>
                      </ul>  
                  </div>
              </div>`;
  }else if(members === Engineer){
// one of the cards, to display the manager info on the html
card =
   ` <div class="card" style="width: 18rem;">
                <div class= "card-header">
                    <h5 class="card-title text-center">${name}</h5>
                    <h6 class="card-subtitle mb-2  text-center">Engineer</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Email: <a href=mailto:${email}</a></li>
                        <li class="list-group-item">Github: <a href=${github}</a></li>
                      </ul>  
                  </div>
              </div>`;
  }else(members === Intern){
    // one of the cards, to display the manager info on the html
card =
` <div class="card" style="width: 18rem;">
             <div class= "card-header">
                 <h5 class="card-title text-center">${name}</h5>
                 <h6 class="card-subtitle mb-2  text-center">Intern</h6>
             </div>
             <div class="card-body">
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">Employee ID: ${id}</li>
                     <li class="list-group-item">Email: <a href=mailto:${email}</a></li>
                     <li class="list-group-item">School: ${school}</li>
                   </ul>  
               </div>
           </div>`;
  }  
  fs.appendFile ("???", card (err) => err ? console.log(err) : console.log("Card added to body of HTML."));

  + endHTML   

  // the begining piece of the html that will be added to the card and the end piece to create the whole document
  const beginHTML = 
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
  <div class= "p-5 rounded-lg m-3" id="top">
        <h1 class="display-4 text-center">My Team</h1>
        </div>`;


// the close of the html that will be added to the beginning and middle
const endHTML =
`</body>
</html>`;

// puts the pieces of the html together as a whole document and displays it
  return entireHTML;
};

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
        choices: ["Engineer", "Manager", "Intern", "I'm done building my team.",],
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
  console.log(members);
  const pageContent = makeHTML(members);
  // create index.html file with user input to questions and action stated in makeHTML, if errors state and if created state
  fs.writeFile("index.html", pageContent, (err) =>
    err ? console.log(err) : console.log("An index.html file was created.")
  );
}
// call on function to assemble the team members based on which ones the user picked and using the info provided in each type of employees create function
createTeam();
