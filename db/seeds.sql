INSERT INTO department (department_name)
VALUES  
    ("Engineering"),
    ("Finance"),
    ("Legal");

-- INSERT INTO role (title, salary, department_id)
-- VALUES  ("Software Engineer", 120000, 1),
--         ("Account Manager", 16000, 2),
--         ("Accountant", 125000, 2),
--         ("Legal Team Lead", 25000, 3),
--         ("Lawyer", 19000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ("John", "Doe", 1, NULL),
    ("Mike", "Chan", 2, 1),
    ("Ashley", "Rodriguez", 3, NULL)


INSERT INTO role (title, salary, department_id) 
VALUES 
    ("Software Engineer", 120000, 1),
    ("Account Manager", 160000, 2),
    ("Accountant", 125000, 2),
    ("Legal Team Lead", 250000, 3),
    ("Lawyer", 190000, 3);