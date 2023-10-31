-- create function to view all departments
USE company_db;
SELECT * FROM department;

-- create function to view all roles
USE company_db;
SELECT * FROM roles;

-- create function to view all employees
USE company_db;
SELECT * FROM employee;

-- create function to add a department
INSERT INTO departments (department_name)
VALUES ('{department_name}');

-- create function to add role
INSERT INTO roles (role_title, role_salary, department_id)
VALUES ('{role_title}', {role_salary}, {department_id});

-- create function to add an employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('{first_name}', '{last_name}', {role_id}, {manager_id});

-- create function to update employee role
UPDATE employee
SET role_id = {new_role_id}
WHERE employee_id = {employee_id};
