const fs = require('fs');
const inquirer = require('inquirer');
const { create } = require('istanbul-reports');
const saveMarkdown = fs.writeFile;
const path = require('path');

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
                    generatePage();
                    break;
                default:
                    generatePage()
            }
            function generatePage() {
                console.log(managerAnswers)

                saveMarkdown('index.html', generateTeam(data))
        //         fs.writeFile('test.html', generateTeam(''), (err) => {
        //             err ? console.error(err) : console.log('Your Team Profile has been created!')
        //         });
            }
        })
}

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

const generateTeam = () =>
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Builder || By Kyle Tran</title>
<!-- Bootstrap -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
<!-- CSS -->
<link rel="stylesheet" href="./src/style.css">
</head>

<body>
  <div class="container" id="title-container">
    <div class="row">
      <div class="col-md-12" id="title">
        <p>Team<span><i class="fas fa-hammer"></i></span>Builder</p>
        <p id="myName">By: Kyle Tran</p>
      </div>
    </div>
  </div>

  <div class="container" id="result-container">
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

module.exports = { createProfile }