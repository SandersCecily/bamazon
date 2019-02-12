require('dotenv').config()
let inquirer = require("inquirer");
let mysql = require("mysql");


//connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "bamazon"
  });

 connection.connect(function(err) {
     if (err) throw err;
    main();
  });

function main(){
    printmeout();
    inquirer.prompt([
        {
            name: "itemid",
            type: "input",
            message: "What's the ID of the item you want to buy?"
        },
        {
            name:"quantity",
            type: "input",
            message: "How many would you like?"
        }
    ])
    .then(function(answer) {
        connection.query("SELECT * FROM inventory WHERE item_id = " + answer.itemid,function(err, res){
            if (err) throw err;
            if (answer.quantity>res[0].quanity){
                console.log("Sorry, we cant complete that order.");
                inquirer.prompt([
                    {
                        name: "retry",
                        type: "confirm",
                        message: "Did you want to place another order?"
                    }
                ]).then(function(answer){
                    if (answer.retry){
                        main();
                    }else{
                        connection.end();
                    }
                });  
            }
            else if (answer.quantity<res[0].quanity){
                let invoice = (answer.quantity*res[0].price);
                let newquan = res[0].quanity - answer.quantity;
                connection.query("UPDATE inventory SET quanity = "+ newquan + " WHERE item_id = " + answer.itemid, function(err,res){
                    console.log("Purchase successful!\n"
                    + "Your total was: $" + invoice);
                });
                inquirer.prompt([
                    {
                        name: "retry",
                        type: "confirm",
                        message: "Did you want to place another order?"
                    }
                ]).then(function(answer){
                    if (answer.retry){
                        main();
                    }else{
                        connection.end();
                    }
                });  
            }
        });
    });  
} //end Main

//print out data function
function printmeout(){
    connection.query("SELECT * FROM inventory", function(err, res) {
        for (let i = 0; i < res.length; i++) {
          console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].dept_name + " | " + res[i].price);
        }
        console.log("-----------------------------------");
      });
}