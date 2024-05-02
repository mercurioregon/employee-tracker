const inquirer = require("inquirer")
const mysql = require("mysql2")



const questions = async()=>{
    const db = mysql.createConnection({
        host: "localhost", user: "root", password: "Emilyrose99!", database: "employees_db"
    
    })

    db.connect((error)=>{
        if(error){
            console.log(error)
            return
        }
      
     
    })
    const {action} = await inquirer.prompt({
        type:"list", name: "action", message: "select an action", choices: [
            "View all departments", "View all roles", "View all employees", "Add a department",
            "Add a role", "Add an employee", "Update an employee role"
                    ]
    })
    if (action === "View all departments"){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM department", (error, results)=>{
                console.log(results)
                resolve(results)
            })
        })
    }

    else if (action === "View all roles"){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM roles", (error, results)=>{
                console.log(results)
                resolve(results)
            })
        })
       
        
    }
    else if (action === "View all employees"){
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM employess", (error, results)=>{
                console.log(results)
                resolve(results)
            })
        })
              
    }
    else if (action === "Add an employee"){
        const {first_name, last_name, role_id, manager_id} = await inquirer.prompt(
            [{
                type: "input", name: "first_name", message: "Enter employee's first name."
            },
            {
                type: "input", name: "last_name", message: "Enter employee's last name."
            },
            {
                type: "input", name: "role_id", message: "Enter the role ID."
            },
            {
                type: "input", name: "manager_id", message: "Enter the manager ID."
            }]
        )
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", 
             [first_name, last_name, role_id, manager_id], (error, results)=>{
                if (error){
                    console.log(error)
                    return
                }
                console.log(results)
                resolve(results)
            })
        })
    }

    else if (action === "Add a department"){
        const {id, name} = await inquirer.prompt(
            [{
                type: "input", name: "id", message: "Enter department ID."
            },
            {
                type: "input", name: "name", message: "Enter department name."
            },
        
            ]
        )
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO department(id, name) VALUES (?,?)", 
             [id,name], (error, results)=>{
                if (error){
                    console.log(error)
                    return
                }
                console.log(results)
                resolve(results)
            })
        })
    }
    else if (action === "Add a role"){
        const {id, title, salary, department_id} = await inquirer.prompt(
            [{
                type: "input", name: "id", message: "Enter id."
            },
            {
                type: "input", name: "title", message: "Enter job title."
            },
            {
                type: "input", name: "salary", message: "Enter a salary."
            },
            {
                type: "input", name: "department_id", message: "Enter the department ID."
            }]
        )
        
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO roles(id, title, salary, department_id) VALUES (?,?,?,?)", 
             [id,title,salary,department_id], (error, results)=>{
                if (error){
                    console.log(error)
                    return
                }
                console.log(results)
                resolve(results)
            })
        })
       
    }
    else if (action === "Update an employee role"){
        const {id, title, salary, department_id} = await inquirer.prompt(
            [{
                type: "input", name: "id", message: "Enter id."
            },
            {
                type: "input", name: "title", message: "Enter job title."
            },
            {
                type: "input", name: "salary", message: "Enter a salary."
            },
            {
                type: "input", name: "department_id", message: "Enter the department ID."
            }]
        )
        
        return new Promise((resolve,reject)=>{
            db.query("INSERT INTO roles(id, title, salary, department_id) VALUES (?,?,?,?)", 
             [id,title,salary,department_id], (error, results)=>{
                if (error){
                    console.log(error)
                    return
                }
                console.log(results)
                resolve(results)
            })
        })
       
    }
}
 questions()

