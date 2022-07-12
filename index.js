// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

//import classes here:
import Manager from '../teamMakerBotThingy/lib/Manager'
import Engineer from '../teamMakerBotThingy/lib/Engineer'
import Intern from '../teamMakerBotThingy/lib/Intern'

import renderData from '../teamMakerBotThingy/src/renderData'
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team managers name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's id?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?"
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: "Select License",
    //     choices: [
    //         'Apache',
    //         'Boost',
    //         'BSD'
    //     ]
    // },
    // {
    //     type: 'input',
    //     name: 'contributing',
    //     message: "Are there any contributors on this project?"
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: "Do you have any tests for your application"
    // },
    // {
    //     type: 'input',
    //     name: 'github',
    //     message: "Do you have a Github you'd like to add"
    // }, 
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: "Please include your email address."
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log("You've done it. Congradulations")
        // file written successfully
    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office);
            var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.gitusername);
            var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            console.log(manager);
            var data = renderData(manager, engineer, intern);
            writeToFile("dist/index.html", data)
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
