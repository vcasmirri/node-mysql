// Define required modules

var mysql = require("mysql");
var inquirer = require("inquirer");

// Establish sql database connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "thurisaz1020",
    database: "bamazon"
});

// Connect to mysql server and database

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });
  
  // function that displays all departments to choose from
//   function start() {
//     inquirer
//       .prompt({
//         name: "departmentSelect",
//         type: "list",
//         message: "Choose a department to shop in, see the best-selling department, or exit once you've finished.",
//         choices: ["Instruments", "Furniture", "Technology", "Top Sales", "Exit"]
//       })
//       .then(function(answer) {
//         // based on their answer, show department inventory or exit
//         if (answer.departmentSelect === "Instruments") {
//           showIns();
//         }
//         else if(answer.departmentSelect === "Top Sales") {
//             showSales();
//         } 
//         else{
//           connection.end();
//         }
//       });
//   }

  function start () {
    var query = "SELECT item_id, product_name, price, stock_quantity FROM products";
      connection.query(query, function(err, res) {
          if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "choice",
                        type: "list",
                        choices: function() {
                            var productArray = [];
                            for (var i = 0; i < res.length; i++) {
                                productArray.push("Product ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Price: " + res[i].price);
                            }
                            return productArray;
                        },
                        message: "Choose from the following products."
                    },
                    {
                        name: "id",
                        type: "input",
                        message: "Enter the ID of the product you would like to buy."
                    },
                    {
                        name: "quantity",
                        type: "input",
                        message: "Enter the number of units of this product you would like to buy."
                    }
                ]).then(function(answer) {
                    var chosenItem;
                    for (var i = 0; i < res.length; i++) {
                        if ("Product ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Price: " + res[i].price === answer.choice) {
                            chosenItem = res[i];
                        }
                    }
                    if (chosenItem.stock_quantity === 0 || answer.quantity > chosenItem.stock_quantity) {
                        console.log("Sorry, that item is sold out.");
                        start();
                    } else {
                        console.log("This is the stock currently: " + chosenItem.stock_quantity);
                        var stockLeft = chosenItem.stock_quantity - answer.quantity;
                        console.log("This is the amount of stock left: " + stockLeft);
                        var orderTotal = answer.quantity * chosenItem.price;
                        console.log("Your final order amount is " + orderTotal)
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: stockLeft
                                },
                                {
                                    product_name: chosenItem.product_name
                                }
                            ],
                            function(error) {
                                if (error) throw error;
                                console.log("The " + chosenItem.product_name + " stock has been reduced to " + chosenItem.stock_quantity + ".");
                                start();
                            }
                        )
                    }


                })




      })
  }