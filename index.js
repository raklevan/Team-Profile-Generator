const fs = require("fs");

const inquirer = require("inquirer");

const Employee=require("./constructors/Employee");

const Manager=require("./constructors/Manager");

const Engineer=require("./constructors/Engineer");

const Intern=require("./constructors/Intern");

const generateHTML=require("./generateHTML");


const teamMembers = [];





// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * name
//   * id
//   * title
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

// * officeNumber

// * getRole() // Overridden to return 'Manager'


const managerQuestions = [

{ 
    message: "What is the name of the team manager?",
    type: "input",
    name: "name"
},
{ 
    message: "what is the team manager's id number?",
    type: "input",
    name: "id"
},
{ 
    message: "what is the team manager's email address?",
    type: "input",
    name: "email"
},

{ 
    message: "what is the team manager's office number?",
    type: "input",
    name: "officeNumber"
}


];

////////////

const engineerQuestions = [

    { 
        message: "what is the engineer's name?",
        type: "input",
        name: "name"
    },
    { 
        message: "what is the engineer's id number?",
        type: "input",
        name: "id"
    },
    


    { 
        message: "what is the engineer's email address?",
        type: "input",
        name: "email"
    },

    { 
        message: "what is the engineer's Github username?",
        type: "input",
        name: "github"
    }
    
    ];

    ///////////



const internQuestions = [

    { 
        message: "what is the intern's name?",
        type: "input",
        name: "name"
    },
    { 
        message: "what is the intern's id number?",
        type: "input",
        name: "id"
    },
    

    { 
        message: "what is the intern's email address?",
        type: "input",
        name: "email"
    },

    { 
        message: "what is the intern's school?",
        type: "input",
        name: "school"
    }
    
    ];

    ///////////

    const options = [
        {
            message: "What would you like to do next?",
            type: "list",
            name: "action",
            choices: ["add engineer", "add intern", "build team profile"]
        }
    ]


    createTeam()


async function createTeam(){

    const teamManager = await inquirer.prompt(managerQuestions);
    
    var {name, id, email, officeNumber} = teamManager;
    
    teamMembers.push(new Manager(name, parseInt(id), email, parseInt(officeNumber)));
    
    console.log(teamMembers)

    // generateHTML(teamMembers);

    let addMember=true;

    while(addMember){
        
    const nextAction = await inquirer.prompt(options);
    const {action}= nextAction;

    // console.log(teamMembers)


    switch(action){
        case 'add engineer' :
            const getEngineer = await inquirer.prompt(engineerQuestions);
            var {name, id, email, github} = getEngineer;
            teamMembers.push(new Engineer(name, parseInt(id), email, github));
            console.log(teamMembers)
            break;

        case 'add intern':
            const getIntern = await inquirer.prompt(internQuestions);
            var  {name, id, email, school} = getIntern;
            teamMembers.push(new Engineer(name, parseInt(id), email, school ));
            console.log(teamMembers)
            break;

        case 'build team profile':
            generateHTML(teamMembers); 
            addMember=false;
            break;
        default: addMember=false;

    }
    }       
}




// async function next(){

//     addMember=false

    // const nextAction = await inquirer.prompt(options);
    // const {action}= nextAction;

    // // console.log(teamMembers)


    // switch(action){
    //     case 'add engineer' :
    //         const getEngineer = await inquirer.prompt(engineerQuestions);
    //         var {name, id, email, github} = getEngineer;
    //         teamMembers.push(new Engineer(name, parseInt(id), email, github));
    //         console.log(teamMembers)
    //         break;

    //     case 'add intern':
    //         const getIntern = await inquirer.prompt(internQuestions);
    //         var  {name, id, email, school} = getIntern;
    //         teamMembers.push(new Engineer(name, parseInt(id), email, school ));
    //         console.log(teamMembers)
    //         break;

    //     case 'build team profile':
    //         generateHTML(teamMembers); 
    //         addMember=false;
    //         break;
    //     default: addMember=false;

    // }
















// inquirer.prompt(managerQuestions)

//     .then(response  => {
        
//         const {name, id, email, officeNumber} = response;

//         teamMembers.push(new Manager(name, parseInt(id), email, parseInt(officeNumber)));

//         console.log(teamMembers)
    
//         })