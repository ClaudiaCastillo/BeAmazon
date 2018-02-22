CREATE DATABASE IF NOT EXISTS bamazon_db;
USE bamazon_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS products;

# Create the burgers table
CREATE TABLE products (
item_id int NOT NULL AUTO_INCREMENT,
product_name varchar(255) NOT NULL,
department_name varchar(100) NOT NULL,
price float NOT NULL,
stock_quantity Int NOT NULL,
PRIMARY KEY (item_id)
);