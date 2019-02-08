DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE inventory (
	item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (75) NOT NULL,
    dept_name VARCHAR (50) NOT NULL,
    price DOUBLE(10,2) NOT NULL,
    quanity INTEGER (5) NOT NULL
    );
    
    INSERT INTO inventory (product_name, dept_name, price, quanity)
    VALUES ("","","",""),
		   ("","","",""),
		   ("","","",""),
           ("","","",""),
		   ("","","",""),
		   ("","","",""),
           ("","","",""),
           ("","","",""),
           ("","","",""),
           ("","","",""),
           ("","","","");