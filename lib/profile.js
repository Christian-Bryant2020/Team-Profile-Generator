const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');
const fs = require('fs');
const inquirer = require('inquirer');
const { create } = require('istanbul-reports');

let employeeProfile = [];

function createProfile() {
    inquirer.prompt([
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
            employeeProfile.push(response);
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
                    generatePage(employeeProfile);
                    break;
                default:
                    generatePage(employeeProfile)
            }
        })
}


function internProfile(response){
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
    .then((response) =>{
        employeeData.push(response);
        createEmployee();
    })
}

function engineerProfile(response){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the engineer\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the engineer\'s GitHub?',
            name: 'gitHub',
        },
    ])
    .then((response) =>{
        employeeData.push(response);
        createEmployee();
    })
}

module.exports = {questions}