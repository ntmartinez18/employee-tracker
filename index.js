// import packages
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

// created function to view all departments
  async function viewDepartments() {
    connection.query('SELECT * FROM department', (err, results) => {
      if (err) {
        console.error('Error viewing departments:', err);
      } else {
        console.log('Departments:', results);
      }
    });
  };

// created function to view all roles
  async function viewAllRoles() {
      connection.query('SELECT * FROM roles', (err, results) => {
        if (err) {
          console.error('Error viewing roles:', err);
        } else {
          console.log('Roles:', results);
        }
      });
    };

    // created function to view all employees
    async function viewEmployees() {
        connection.query('SELECT * FROM employee', (err, results) => {
          if (err) {
            console.error('Error viewing employees:', err);
          } else {
            console.log('Employees:', results);
          }
        });
      };


// created function to add a department
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
        const query = 'INSERT INTO department (department_name) VALUES (?)';
        connection.query(query, [departmentName], (err, res) => {
          if (err) throw err;
          console.log('Department added successfully!');
        });
      });
  };

// created function to add a role
function addRole() {
    // Prompt the user to enter role information
    inquirer
      .prompt([
        {
            type: 'input',
            name: 'roleName',
            message: 'Enter the title of the role:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for this role:',
        },
        {
          type: 'input',
          name: 'roleDepartment',
          message: 'Enter the department for this role:',
        },
      ])
      .then((answers) => {
        const roleName = answers.roleName;
        const salary = answers.salary;
        const roleDepartment = answers.roleDepartment;
        // Insert the role into the database
        const query = 'INSERT INTO roles (title, salary, department) VALUES (?)';
        connection.query(query, [roleName, salary, roleDepartment], (err, res) => {
          if (err) throw err;
          console.log('Role added successfully!');
        });
      });
  };



  // created function to add an employee
function addEmployee() {
    // Prompt the user to enter employee information
    inquirer
      .prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter employee first name:',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter employee last name:',
        },
        {
          type: 'input',
          name: 'roleID',
          message: 'Enter employee role ID:',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Enter employee manager ID:',
        },
      ])
      .then((answers) => {
        const firstName = answers.firstName;
        const lastName = answers.lastName;
        const roleID = answers.roleID;
        const managerID = answers.managerID;
        // Insert the employee into the database
        const query = 'INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?)';
        connection.query(query, [firstName, lastName, roleID, managerID], (err, res) => {
          if (err) throw err;
          console.log('Employee added successfully!');
        });
      });
  };

// created function to update employee role
function updateEmployee() {
    // Prompt the user to enter the updated employee role
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'employeeID',
          message: 'Enter the name of the employee ID:',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter the name of the employee ID:',
        },
      ])
      .then((answers) => {
        const departmentName = answers.departmentName;
        // Insert the department into the database
        const query = `UPDATE employee SET role_id = ${newRoleId} WHERE id = ${employeeId}`;
        connection.query(query, [departmentName], (err, res) => {
          if (err) throw err;
          console.log('Employee updated successfully!');
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
          addRole();
          break;
        case 'add an employee':
          // Code to add an employee
          addEmployee();
          break;
        case 'update an employee role':
          // Code to update an employee role
          break;
        default:
          console.log('Invalid choice');
      }
    });


// Example usage
updateEmployeeRole(1, 2); // Update employee with ID 1 to have role ID 2