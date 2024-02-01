/***

Implement a countdown timer that counts down from 21 to 15.

 */


/*programming hero*/


let i = 21;
while(i>=15){
    i--; 
    setTimeout(()=>{
        console.warn("while "+i);
    },1000);
    
}
for(let i=21; i>=15; i--){
    setTimeout(()=>{
        console.log("for "+i);
    },1000);
}
