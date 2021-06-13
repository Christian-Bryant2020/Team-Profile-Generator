  
function generateManager(answers) {
    return `<div class="container" id="card">
    <div class="row">
      <div class="col-md-12">
      <h1>${answers.name}</h1>
      <h2>Manager</h2>
      </div>
      <div class="col-md-12">
        <h5>ID: ${answers.id}</h5>
        <hr>
        <h5><a href="mailto:${answers.email}">${answers.email}</a></h5>
        <hr>
        <h5>Office Number: ${answers.officeNumber}</h5>
      </div>
    </div>
  </div>`
  }

  function generateIntern(answers) {
    return `<div class="container" id="card">
    <div class="row">
      <div class="col-md-12">
      <h1>${answers.name}</h1>
      <h2>Intern</h2>
      </div>
      <div class="col-md-12">
        <h5>ID: ${answers.id}</h5>
        <hr>
        <h5><a href="mailto:${answers.email}">${answers.email}</a></h5>
        <hr>
        <h5>School: ${answers.school}</h5>
      </div>
    </div>
  </div>`
  }
  
  function generateEngineer(answers) {
    return `<div class="container" id="card">
    <div class="row">
      <div class="col-md-12">
      <h1>${answers.name}</h1>
      <h2>Engineer</h2>
      </div>
      <div class="col-md-12">
        <h5>ID: ${answers.id}</h5>
        <hr>
        <h5><a href="mailto:${answers.email}">${answers.email}</a></h5>
        <hr>
        <h5><a href='https://github.com/${answers.gitHub}' target='_blank'/>GitHub Profile</a></h5>
      </div>
    </div>
  </div>`
  }
  
  module.exports = generateIntern
