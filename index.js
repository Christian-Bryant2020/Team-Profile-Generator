const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const createProfile = require('./lib/profile')

async function init () {
    await createProfile();
     
}



createProfile.createProfile();

async function writeFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(err)
        }
        console.log('Your HTML file has been generated!');
    });
};

init();