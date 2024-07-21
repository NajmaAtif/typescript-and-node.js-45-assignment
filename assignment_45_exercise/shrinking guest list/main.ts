/*Question # 17
Start with your program from Exercise 16. Add a new line that prints a message saying 
that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list,print a message to that person letting them know 
 you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.

*/
let guest_list:string []= ["Nimra","Alishba","Fatima","Asra"]

// console.log(`good News!we have arranged a big Dinner table so we invite 3 more guest.Thank you`)
guest_list.unshift("Atif");
guest_list.splice(2,0,"Ayesha");
guest_list.push("jannat");

for (let i=0;i<guest_list.length; i++){
    // console.log(`Dear ${guest_list[i]} , you are invited for Dinner.\n`)
}

console.log("sorry we can't arrange big table,only two person will be invited.\n")
while (guest_list.length>2) {
     let removeGuest=guest_list.pop()
     console.log(`sorry ${removeGuest},you are not invited for dinner.\n`)
}

for (let i=0; i<guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, you are still invited for dinner.`)
}


guest_list.splice(0,2)
console.log(guest_list)