let answers = generatePage
const fs = require('fs');

  let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light">
            <h1 class="ms-auto me-auto p-4">Profile</h1>
        </nav>
        <div class="container">
            <div class="row row-cols-auto">   
                </div>    
        </div>
    </body>
    </html>`;
    
    function generatePage(answers) {
        console.log(answers)
    }
        

module.exports= generatePage;