USE employees_db;

INSERT INTO employee( first_name, last_name, role_id, manager_id)
  VALUES ("Vincent", "Barbarino", 2, 4),
  ("Mike", "Mudge", 4, 1),
  ("PJ", "Schloot", 4, 4),
  ("Nigel", "Incubator-Jones", 3, 2),
  ("Lance", "Uppercut", 2, 4);


INSERT INTO roles (id, title, salary, department_id)
  VALUES (8, "Trout Fisherman", 100000.00, 1),
          (9, "Knight", 200000.00, 2),
          (11, "Poet", 2500000.00, 3);

INSERT INTO department (id,name)
  VALUES (5, "Maintenance"),
  (6, "Engine Room"),
  (7, "Nap Room");

