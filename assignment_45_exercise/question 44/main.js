/*Question # 44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.
*/
// define a function with rest parameter that accept items argument representing our sandwitch
function makeSandwitch(...items) {
    console.log("\nMaking a sandwitch with the following items: \n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\n Now Emjoy Sandwitch");
}
// call the function 3 items with 3 different number of arguments
makeSandwitch("Chicken", "Cheese", "Mayo", "Egg");
makeSandwitch("Bread", "Butter");
makeSandwitch("Chicken", "Cheese", "Mayo", "Egg", "Bread", "Butter", "Tomato", "Lettuce", "Onion");
export {};
