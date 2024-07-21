/* Question # 12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. 
The text of each message should be the same, but each message should be personalized with the person’s name.
*/

let name:string[]=["Nimra","Sana","jabeen","Aliza"]
let message: string ="How is it going?";
for (let i=0; i<name.length; i++) {
    console.log(message + name[i])
}