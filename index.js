// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

//import classes here
import Manager from '../teamMakerBotThingy/lib/Manager.js'
import Engineer from '../teamMakerBotThingy/lib/Engineer.js'
import Intern from '../teamMakerBotThingy/lib/Intern.js'

// data sent to renderData for html processing
import renderData from '../teamMakerBotThingy/src/renderData.js'

var employees = [];

function addEngineer() {

};
function addIntern() {

};

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the team employee's name?"
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the employee's id?"
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What is the employee's email address?"
    }];

const managerQuestion = {
    type: 'input',
    name: 'office',
    message: "What is the manager's office number?"
};

const exitQuestion = {
    type: 'list',
    name: 'chooseNext',
    message: "What would you like to do next?",
    choices: [
        'Add Engineer',
        'Add Intern',
        'Exit'
    ]
};

const interQuestions = {
    type: 'input',
    name: 'school',
    message: "What is the intern's school?"
};

const engineerQuestions = {
    type: 'input',
    name: 'gUser',
    message: "What is the engineer's github username?"    
}

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
    var managerQuestions
    inquirer.prompt(questions)
        .then((answers) => {
            var manager = {};
            var engineer = {};
            var intern = {};
            if (answers.managerName) {
                manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office);
            };
            if (answers.engineerName) {
                engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.gitusername);
            };
            if (answers.internName) {
                intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            };
            var data = renderData(manager, engineer, intern);
            writeToFile("dist/index.html", data);
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
