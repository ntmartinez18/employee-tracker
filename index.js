require('dotenv').config();
const inquirer = require('inquirer');


const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Select from the following',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add an employee', 'update an employee role'],
    },
];
