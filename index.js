require('dotenv').config();
const inquirer = require('inquirer');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'your_mysql_username',
    password: process.env.DB_PASSWORD,
    database: 'company_db',
  });


const questions = [
    {
        type: 'list',
        name: 'options',
        message: 'Select from the following',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add an employee', 'update an employee role'],
    },
];

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
        const query = 'INSERT INTO departments (name) VALUES (?)';
        connection.query(query, [departmentName], (err, res) => {
          if (err) throw err;
          console.log('Department added successfully!');
          // Close the database connection
          connection.end();
        });
      });
  }
  
  // Call the addDepartment function to start adding a department
  addDepartment();

inquirer
.prompt(questions)
.then(answers);

