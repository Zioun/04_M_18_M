/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/


// task 1
let i1 = 61;
let sum1 = 0;
while(i1<100){
    i1++
    if(i1%2 == 1){
        continue;
    }
    sum1 += i1;
    console.log(i1);
}
console.log("Total Sum :"+sum1)


// task 2

let i2 = 78;
let sum2 = 0;
while(i2<98){
    i2++;
    if(i2%2 == 0){
        continue;
    }
    sum2 += i2;
    console.log(i2);
}
console.log("Total Sum :"+ sum2);

