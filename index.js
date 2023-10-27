require('dotenv').config();
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
];
