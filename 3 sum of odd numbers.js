

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// task 1
let i1 = 81;
let sum1 = 0;
while(i1<131){
    i1++;
    if(i1%2 === 1){
        continue;
    } 
    sum1 += i1; 
    console.log(i1)
}
console.log("Total Sum :"+sum1);

// task 2

let i2 = 206;
let sum2 = 0;

while(i2<311){
    i2++;
    if(i2%2 == 0){
        continue;
    }
    sum2 += i2;
    console.log(i2)
}
console.log("Total :"+sum2);

