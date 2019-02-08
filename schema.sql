DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE inventory (
	item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (75) NOT NULL,
    dept_name VARCHAR (50) NOT NULL,
    price DOUBLE(10,2) NOT NULL,
    quanity INTEGER (5) NOT NULL,
    PRIMARY KEY (item_id)
);
    
INSERT INTO inventory (product_name, dept_name, price, quanity)
VALUES ("Playing Cards Decks","Games",7.50,15),
		("Dozen Roses","Fresh Produce",10.70,5),
		("Box of Chocolate","Grocery",5.25,29),
		("Glasses","Accessories",12.75,14),
		("Dress","Womens Clothes",17.50,3),
		("Suit","Mens Clothes",65.00,4),
		("Blender","Appliances",36.65,9),
		("Towels","Home and Kitchen",9.35,34),
		("Backpack","Accessories",24.99,27),
		("Blu-Ray Movie","Entertainment",12.45,19),
		("Vase","Home and Kitchen",3.55,22);
           
SELECT * FROM inventory;