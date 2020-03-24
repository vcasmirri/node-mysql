# Bamazon (CLI Storefront)
---
### Description / Requirements

This application uses the command-line interface to demonstrate basic e-commerce functionality using Node.js and MySQL. Upon running the app, a user (acting as the customer) can see a list of available items, enter the ID of the product they want to buy, and select how many units of the product they want to buy. If the store has enough of the product to meet the customer's request, their order is "fulfilled." The SQL database is updated to reflect the remaining quantity. If they try to order more units than the database has in stock, they receive an "insufficient quantity" message.

---

### Demonstration

See a short demonstration of how the app works [here](https://drive.google.com/file/d/171O_y2AIyS4BKCo5GJDt4s56zRvJJN-Z/view)!

---
### Technologies
This app utilizes Javascript, MySQL, and Node packages/modules to handle the user's command line requests, display information from the database, and ultimately update the database.

#### Packages
The following descriptions primarily originate from their respective pages on npmjs.com.

1. **Inquirer**: Inquirer gives us a way to prompt the user and take inputs to determine how the app's logic responds.
2. **MySQL**: The MySQL package allows us to communciate with the SQL database and incorporate it into our Javascript logic.