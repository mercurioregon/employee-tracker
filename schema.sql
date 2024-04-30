
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT NOT NULL
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)

);

CREATE TABLE department(
    id INT NOT NULL,
    name VARCHAR(30)
);




