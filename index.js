require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');


// Create a connection to MySQL database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'company_db',
  });


const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Select from the following',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    },
];

// create function to view all departments
  async function viewDepartments() {
    connection.query('SELECT * FROM department', (err, results) => {
      if (err) {
        console.error('Error viewing departments:', err);
      } else {
        console.log('Departments:', results);
      }
    });
  };

// create function to view all roles
  async function viewAllRoles() {
      connection.query('SELECT * FROM roles', (err, results) => {
        if (err) {
          console.error('Error viewing roles:', err);
        } else {
          console.log('Roles:', results);
        }
      });
    };

    // create function to view all employees
    async function viewEmployees() {
        connection.query('SELECT * FROM employee', (err, results) => {
          if (err) {
            console.error('Error viewing employees:', err);
          } else {
            console.log('Employees:', results);
          }
        });
      };




// create function to add a department
function addDepartment() {
    // Prompt the user to enter the name of the department
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:',
        },
      ])
      .then((answers) => {
        const departmentName = answers.departmentName;
  
        // Insert the department into the database
        const query = 'INSERT INTO department (name) VALUES (?)';
        connection.query(query, [departmentName], (err, res) => {
          if (err) throw err;
          console.log('Department added successfully!');
          // Close the database connection
          connection.end();
        });
      });
  };


  
// Call inquirer
inquirer
.prompt(questions)
.then((answers) => {
    console.log(answers)
    switch (answers.options) { 
        case 'view all departments':
          // Code to view all departments
          viewDepartments();
          break;
        case 'view all roles':
          // Code to view all roles
          viewAllRoles();
          break;
        case 'view all employees':
          // Code to view all employees
          viewEmployees();
          break;
        case 'add a department':
          // Code to add a department
          addDepartment();
          break;
        case 'add a role':
          // Code to add a role
          break;
        case 'add an employee':
          // Code to add an employee
          break;
        case 'update an employee role':
          // Code to update an employee role
          break;
        default:
          console.log('Invalid choice');
      }
    });