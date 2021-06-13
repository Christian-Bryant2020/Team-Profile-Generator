const fs = require('fs');
const inquirer = require('inquirer');
const { create } = require('istanbul-reports');
const saveMarkdown = fs.writeFile;
const path = require('path');
const generateIntern = require('../src/templateHelperIntern');
const generateEngineer = require('../src/templateHelperEngineer');
const generateManager = require('../src/templateHelperManager');

let managerAnswers = [];
let internAnswers = [];
let employeeAnswers = [];

function createProfile() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the managers name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the managers id?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the managers email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the managers office number?',
                name: 'officeNumber',
            }
        ])
        .then((response) => {
            managerAnswers.push(response);
            createEmployee();
            return response;
        })
}
function createEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'employeeType',
            choices: ['Add Intern', 'Add Engineer', 'Complete my team']
        }
    ])
        .then((response) => {
            switch (response.employeeType) {
                case 'Add Intern':
                    internProfile(response);
                    break;
                case 'Add Engineer':
                    engineerProfile(response);
                    break;
                case 'Complete my team':
                    generatePage("team.html", generateTeam());
                    break;
                default:
                    generatePage("team.html", generateTeam())
            }
        })
}
const generatePage = (file, data) => {
    let directory = process.cwd() + "/";
    console.log('Success')
    return fs.writeFileSync(path.join(directory, file), data)
  };
function internProfile(response) {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the interns id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the interns email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the interns school?',
            name: 'school',
        },
    ])
        .then((response) => {
            internAnswers.push(response);
            createEmployee();
        })
}

function engineerProfile(response) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the engineers name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is the engineers id?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is the engineers email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is the engineers GitHub?',
                name: 'gitHub',
            },
        ])
        .then((response) => {
            employeeAnswers.push(response);
            createEmployee();
        })

}

const generateTeam = () => {
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
  <div class="container" id="title-container">
    <div class="row">
      <div class="col-md-12" id="title">
      </div>
    </div>
  </div>

  <div class="container" >
    <div class="row">
      <div class="col-md-12" id="results">
`

let htmlEnd = `
      </div>
    </div>
  </div>

  <script src="/index.js"></script>
</body>
</html>
`
managerAnswers.forEach(newManager => {
    // newManager.roles = addEmployeePrompts.role
    let managerHTML = generateManager(newManager)
    html += managerHTML;
  });

  employeeAnswers.forEach(newEngineer => {
    let engineerHTML = generateEngineer(newEngineer)
    html += engineerHTML;
  });

  internAnswers.forEach(newIntern => {
    let internHTML = generateIntern(newIntern)
    html += internHTML;
  });

  html += htmlEnd;
  return html;
};


module.exports = { createProfile }