/*question # 22
Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.
*/

// creating an array
let errorArray : string[]=["a","b","C","d"]

// producing error! by Accessing invalid index of array 
console.log(errorArray[10]);

// Error removed
console.log(errorArray[1]);