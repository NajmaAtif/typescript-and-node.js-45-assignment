/*Question # 43
Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show 
that you have one array of the original names and one array with the Great added to each magician’s name.
*/

//  define the function to show magicians name
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through.map(),it will modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// define an array of magicians name
let magician_names = ["Rameez","Ainak Wala","Chris"]



// making a copy of original array through .slice function
let copy_magician_names = magician_names.slice()

// modify the copied array to include "The great" with their names
let copy_great_magicians = make_great(copy_magician_names)

// show both arrays original and copied

// original
console.log("Original array\n")
show_magicians(magician_names)

// copied
console.log("\nCopied array\n")
show_magicians(copy_great_magicians)
