"use strict";
/* Question # 16
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.

*/
let guest_list = ["Nimra", "Alishba", "Fatima", "Asra"];
// console.log(`Due to some reason ${guest_list[1]} will not come on my Dinner.`)
// guest_list[1] = "sarah"
// for(let i=0; i<guest_list.length;i++) {
//     // console.log(`Dear ${guest_list[i]}! I would like to invite you for Dinner on Sunday.`);
// }
console.log(`good News!we have arranged a big Dinner table so we invite 3 more guest.Thank you`);
guest_list.unshift("Atif");
guest_list.splice(2, 0, "Ayesha");
guest_list.push("jannat");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]} , you are invited for Dinner`);
}
