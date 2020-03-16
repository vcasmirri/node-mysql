DROP DATABASE IF EXISTS storefront_DB;
CREATE DATABASE storefront_DB;

USE storefront_DB;

CREATE TABLE inventory(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price INT default 0,
  stock INT default 0,
  sales INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO inventory (item_name, department, price, stock) 
    values ("Piano", "Instruments", 2000, 10), ("Guitar", "Instruments", 300.23, 15), ("Xylophone", "Instruments", 500.65, 4), ("Didgeridoo", "Instruments", 450.10, 2), ("Kalimba", "Instruments", 50.34, 20), ("Recliner", "Furniture", 450.45, 4), ("Kitchen Table", "Furniture", 1099.80, 7), ("Nightstand", "Furniture", 50.99, 12), ("Bookshelf", "Furniture", 380.99, 6), ("Desk", "Furniture", 250.98, 3), ("Laptop", "Technology", 800.99, 37), ("Bluetooth Speaker", "Technology", 31.99, 24), ("Gaming Mouse", "Technology", 25.34, 56), ("Portable Charger", "Technology", 21.32, 68), ("Keyboard", "Technology", 40.87, 19)
