3.  should have each of the following columns:
# BeAmazon
A Amazon-like storefront with MySql, CLI App

# Node.js & MySQL

This activity creates an Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory. 

This is a CLI App, there will be no need to deploy it to Heroku. 

Please see the link for a word document of the screen shots of the project output.
https://github.com/ClaudiaCastillo/BeAmazon/blob/master/bAmazon_screenshots_of_completed_project.docx


1. Created a MySQL Database called `bamazon`, with a Table inside of that database called `products' including the following columns, then Populated the database with around 10 different products.
   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)
3. Created Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. 
4. The app will then prompt users with two messages.
   * The first will ask them the ID of the product they would like to buy.
   * The second message will ask how many units of the product they would like to buy.
5. Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request.
   * If not, the app will log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
6. However, if the store does have enough of the product, it will fulfill the customer's order.
   * Updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
