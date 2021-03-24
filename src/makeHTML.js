const makeHTML = (employees) => {
  console.log(employees);
  // the begining piece of the html that will be added to the card and the end piece to create the whole document
  const html = `<!DOCTYPE html>
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
    </div>
          ${renderEmployees(employees)}
    </body>
  </html>`;

  console.log(html);

  return html;
};

function renderEmployees(employees) {
  let html = "";
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const info = employee.getRole();

    if (info === "Manager") {
      //creates manager html
      html += `
<div class="card" style="width: 18rem;">
    <div class= "card-header">
        <h5 class="card-title text-center">${employee.name}</h5>
        <h6 class="card-subtitle mb-2  text-center">Manager</h6>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${employee.id}</li>
            <li class="list-group-item">Email: ${employee.email}</li>
            <li class="list-group-item">Office Number: ${employee.officeNum}</li>
        </ul>  
    </div>
</div>`;
    } else if (info === "Engineer") {
      // creates engineer html
      html += ` 
<div class="card" style="width: 18rem;">
    <div class= "card-header">
        <h5 class="card-title text-center">${employee.name}</h5>
        <h6 class="card-subtitle mb-2  text-center">Engineer</h6>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${employee.id}</li>
            <li class="list-group-item">Email: ${employee.email}</li>
            <li class="list-group-item">Github: ${employee.github}</li>
        </ul>  
    </div>
</div>`;
    } else if (info === "Intern") {
      html += `
    <div class="card" style="width: 18rem;">
        <div class= "card-header">
            <h5 class="card-title text-center">${employee.name}</h5>
            <h6 class="card-subtitle mb-2  text-center">Intern</h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">School: ${employee.school}</li>
            </ul>  
        </div>
    </div>`;
    } // creates intern html
  }

  return html;
}

module.exports = makeHTML;
