/* Question # 3
Name Cases:Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.
*/

// lower case
let personName: string = "Najma"
console.log(personName.toLowerCase())

// Upper Case
console.log(personName.toUpperCase())

// title case
console.log(personName.replace(/\b\w/g,c => c.toUpperCase()))

