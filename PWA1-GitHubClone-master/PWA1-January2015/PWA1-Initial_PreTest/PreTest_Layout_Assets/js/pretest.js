/**
 * Created by yanely on 1/5/15.
 */

alert("Welcome to my Online Store");

//A. Prompt the user for the cost of an item
var costItem = prompt("Enter the cost of an item (please use dollars).");

//B. Validate the prompt is in fact a number and not left blank
while(costItem ==="" || isNaN(costItem)){

    costItem = prompt("Please only type in numbers and don't leave blank.\nEnter a the cost of an item, thank you.");

}

//C. Prompt the user for a discount. This number should be between 0-100.
var discountItem = prompt("Enter a discount percentage (please use whole numbers).");

//D. Validate the prompt is in fact a number between those values and is not left blank.
while(discountItem ==="" || isNaN(discountItem) || discountItem<0 || discountItem>100){

    discountItem = prompt("Please only type in numbers and don't leave blank!\nEnter a discount percentage.");

}

//E. Create a function that will calculate the discounted cost of a product.
//F. Use the cost and discount as the parameters.
function discountedCost (cost, discount) {

//G. Equation of discount price = original cost * (discount% / 100).
    var discountedPrice =  ((100 - discount) / 100) * cost;

//H. Have the function return the discount price.
    return discountedPrice
}

//I. Create a function call...remember to use arguments and to catch the return.
var newPrice = discountedCost(costItem,discountItem);

//J. Console.log a text string that includes the returned price, original price, and discount %.
console.log("The original price of your item was $"+costItem+".\nThe discount of your item was "+discountItem+"%.\nYour discounted price is now $"+newPrice+".");

//K. Alert the user a text string that includes a summary of the same details.
alert("The original price of your item was $"+costItem+".\nThe discount of your item was "+discountItem+"%.\nYour discounted price is now $"+newPrice+".");