//var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = require("./config/connection.js");

productSearch();

function productSearch() {
  var query = "SELECT item_id,product_name,price,stock_quantity FROM products ORDER BY department_name";
  connection.query(query, function(err, res) {
    console.log("\nSELECT AN ITEM TO PURCHASE:");
    for (var i = 0; i < res.length; i++) {
      console.log(
        "\nItem ID: " + 
        res[i].item_id + 
        " || Product Name: " + 
        res[i].product_name + 
        " || Price: " + 
        res[i].price.toFixed(2) + 
        " || Quantity: " + 
        res[i].stock_quantity
        );
    }
    console.log("\n");
    itemSearch();
  });
}


function itemSearch() {
  inquirer
    .prompt([
      {
        name: "itemId",
        type: "input",
        message: "What item ID would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "Enter the quantity you would like: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
        var itm = answer.itemId;
        var qty = answer.quantity;
        //console.log("Get item ID: ", itm, " quantity: ", qty);

        connection.query("SELECT * FROM products WHERE item_id = ? AND stock_quantity >= ?", [itm, qty], function(err, res) {
        var stk = 0;
        for (var i = 0; i < res.length; i++) {
          console.log("\n\n  ITEM PURCHASED:")

          console.log(
            "\n  o     Item ID: " + 
            res[i].item_id + 
            "\n  o     Product Name: " + 
            res[i].product_name + 
            "\n  o     Price: " + 
            res[i].price.toFixed(2) + 
            "\n  o     Quantity: " + 
            qty +
            "\n  o     Total: " + 
            (qty * res[i].price).toFixed(2)
            );
            stk =  res[i].stock_quantity - qty;
            //console.log("\nquantity: ", stk);
        }
        if (stk > 0){
          orderUpdate(itm, stk);
        }
        else {
          console.log("\n\n*** THIS ITEM IS OUT OF STOCK, PLEASE TRY ANOTHER. ***\n");
          productSearch();
        }
      });
    });
}


function orderUpdate(itm, qty) {
  //console.log("\nOrder item ID: ", itm, " quantity: ", qty);

  var query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
  connection.query(query, [qty, itm], function(err, res) {
    //productSearch();
  });
}

