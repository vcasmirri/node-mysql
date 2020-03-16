// Define required modules

var mysql = require("mysql");
var inquirer = require("inquirer");

// Establish sql database connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "thurisaz1020",
    database: "storefront_DB"
});

// Connect to mysql server and database

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  
  // function that displays all departments to choose from
  function start() {
    inquirer
      .prompt({
        name: "departmentSelect",
        type: "list",
        message: "Choose a department to shop in, see the best-selling department, or exit once you've finished.",
        choices: ["Instruments", "Furniture", "Technology", "Top Sales", "Exit"]
      })
      .then(function(answer) {
        // based on their answer, show department inventory or exit
        if (answer.departmentSelect === "Instruments" || "Furniture" || "Technology") {
          showInventory();
        }
        else if(answer.departmentSelect === "Top Sales") {
            showSales();
        } 
        else{
          connection.end();
        }
      });
  }

  function showInventory () {
    var query = "SELECT item_name, department, price, stock FROM inventory WHERE ?"
      connection.query(query, {department: answer.departmentSelect}, function(err, results) {
          if (err) throw err;
          for (var i = 0; i < results.length; i++) {
              console.log("Product: " + res[i].item_name + " || Department: " + res[i].department + " || Price: " + res[i].price + " || Stock: " + res[i].stock);
          }

      })
  }