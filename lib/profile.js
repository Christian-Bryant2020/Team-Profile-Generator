const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');
const fs = require('fs');
const inquirer = require('inquirer');
const { create } = require('istanbul-reports');
const saveMarkdown = fs.writeFile;

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

const generateTeam = (data) =>
                 `<!DOCTYPE html>
<html lang="en">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    <title>Team Roster</title>
</head>
<body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1" id="header">The Dream Team</span>
            </div>
        </nav>
    <div class='container'>
        <div class='row'>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Leading the way</h6>
                    <p class="card-text">Our team manager is ${managerAnswers.name}.</p>
                    <ul>
                        <li>ID: ${managerAnswers.id}</li>
                        <li>Office number: ${managerAnswers.email}</li>
                        <li><a href="mailto:${managerAnswers.officeNumber}">Email</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">`

module.exports = { createProfile }