USE employees_db;

INSERT INTO employee( first_name, last_name, role_id, manager_id)
  VALUES ("Bob", "Jones", 1, 12);

INSERT INTO roles (id, title, salary, department_id)
  VALUES (2, "Manager", 100000.00, 1);

INSERT INTO department (id,name)
  VALUES (2, "Payroll");

