const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const generateHTML = require('./src/page-template');
const fs = require('fs');

const team = [];

function managerPrompt() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "What's the name of the team's Manager?"
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter the Manager's ID Number."
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter the Manager's email address."
        },
        {
            type: "text",
            name: 'officeNumber',
            message: "Please enter the Manager's office phone number."
        }])
    
    .then(function (data) {
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const officeNumber  = data.officeNumber;
        const teamMember = new Manager (name, id, email, officeNumber);
        team.push(teamMember);
        roleAssignment();
    });
}

function roleAssignment() {
    inquirer.prompt([{
        type: 'list',
        name: 'roleAssignment',
        message: "Are there more members of the team?",
        choices: ['Yes, there is an Engineer', 'Yes, there is an Intern', "No, that's everyone on my team."]
    }])
    
    .then(function (data) {
        switch (data.roleAssignment) {
            case 'Yes, there is an Engineer':
                engineerPrompt();
                break;
            
            case 'Yes, there is an Intern':
                internPrompt();
                break;
            
            case "No, that's everyone on my team.":
                teamHTML();
                break;
        }
    });
}

function engineerPrompt() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Please enter the Engineer's name."
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter the Engineer's ID number."
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter the Engineer's email address."
        },
        {
            type: 'text',
            name: 'github',
            message: "Please enter the Engineer's GitHub username."
        }])
    
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github);
        team.push(teamMember)
        roleAssignment()
    });
}

function internPrompt() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Please enter the Intern's name."
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter the Intern's ID number."
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter the Intern's email address."
        },
        {
            type: 'text',
            name: 'school',
            message: "What school does the Intern currently attend?"
        }])
    
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school);
        team.push(teamMember)
        roleAssignment()
    }); 
}

function teamHTML() {
    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1 w-100 text-center fs-1 !important" style="font-size: 36px">My Team</span>
    </nav>
    <br/>
    <div class="row justify-content-around" style="grid-row-gap: 20px">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 0; i < team.length; i++) {
        let object = `
        <div class="col-4 d-flex justify-content-center">
            <div class="card" style="width: 40rem;">
                <div class="card-header bg-primary text-white fs-3 fw-bold">
                    <h4 class="bg-primary text-white fs-3 fw-bold text-center">
                        ${team[i].name}
                    </h4>
                    <h6>
                        ${team[i].getRole()} <span> ` 
                        
        if(team[i].getRole() === "Manager") {
            object += `
            <i class="fas fa-crown"></i> </span>
            `
        } else if(team[i].getRole() === "Engineer") {
            object += `
            <i class="fas fa-tools"></i> </span>
            `
        } else {
            object += `
            <i class="fas fa-pencil-alt"></i> </span>
            `
        }
                    
        object += `                
                    </h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID Number: ${team[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
        
        `
        if (team[i].officeNumber) {
            object += `
                        <li class="list-group-item">Office Number: ${team[i].officeNumber}</li>
            `
        }
        if (team[i].github) {
            object += `
                        <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a></li>
            `
        }
        if (team[i].school) {
            object += `
                        <li class="list-group-item">Current School: ${team[i].school}</li>
            `
        }
        object += `
                    </ul>
                </div>
            </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
</body>
</html>
`
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/index.html`, htmlArray.join(""), function (err) {

    })
}

managerPrompt();