/*
5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
*/

let inquirer = require("inquirer");
let mysql = require("mysql");


//connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "anime909",
    database: "schema.sql"
  });


function main(){

    inquirer
     .prompt([
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
        connection.query("SELECT * WHERE item_id = " + answer.itemid + "FROM inventory",function(err, res){

        })
        
    }
} //end Main

//print out data function
function printmeout(data){
    console.log("------------------------------------------------");
    console.log(data.item_id + " | " + data.product_name + " | " + data.dept_name + " | " + data.price);
}