//array...
// const person = ["John", "Doe", 46];
// console.log(typeof(person));


///->>>>1st program.......
// let a = [1,2,3,4,5,6,7,8,9];
// printEven(a);

// function printEven(a){
//   let i;
//   for(i=0;i<a.length;i++){
//     if(a[i]%2 == 0){
//       console.log(a[i]);
//     }
//   }  
// }
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const number of numbersArray) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }
// const prompt=require("prompt-sync")();
// var size=parseInt(prompt("Enter Size: "));
// function even(){
//     const arr=[];
//     for(let i=0;i<size;i++){
//         let number=parseInt(prompt("Enter number: "));
//          arr[i]=number;
//     }
//     for(let i=0;i<size;i++){
//         if(arr[i]%2==0)
//         console.log(arr[i]);
//     }
// }
// even();
//->>>>> 3rd program.....
// const prompt=require("prompt-sync")();
// var size=parseInt(prompt("Enter Size: "));
// function Largest(){
//     const arr=[];
//     for(let i=0;i<size;i++){
//         let number=parseInt(prompt("Enter number: "));
//          arr[i]=number;
//     }
//     let lar = Number.MIN_VALUE;//x= minimum
//     let slar=0;
//     for(let i=0;i<size;i++){
//         if(arr[i]>lar){
//              slar=lar;
//              lar=arr[i];
//         }
//         else if(arr[i]>slar&&arr[i]<lar){
//             slar=arr[i];
//         }
       
//     }
//     console.log(slar);
// }
// Largest();
//4th reverse the elements in an array...

// const prompt=require("prompt-sync")();
// var size=parseInt(prompt("Enter Size: "));
// function reverse(){
//     const arr=[];
//     for(let i=0;i<size;i++){
//         let number=parseInt(prompt("Enter number: "));
//          arr[i]=number;
//     }
   
//     for(let i=size-1;i>=0;i--){
//        console.log(arr[i]);
       
//     }
    
// }
// reverse();
//5th program.....
//-->
//       *
//    *  *  *
//   * * * * *
// * * * * * * *
// let string="";
// for(let i=0;i<4;i++){
//     for(let j=0;j<2*i+1;j++){
//         // console.log("*");
//         string+=" *"
//     }
//     string+="\n";
// }
// console.log(string);



//6th code....  sum of two numbers using functional programing.....
// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,6);





//7th code result in preety format....
function sum(num1, num2) {
    let result = num1 + num2;
    displayResult(result);
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}
sum(5,6)








// //8th code result in passive format....
// function sum(num1, num2) {
//     let result = num1 + num2;
//     displayResult(result);
//     displayResultPassive(result) ;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }
// sum(5,6)
// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }


//->arrow function syntax................................
const print=()=>{
    console.log("hello world");
}
print();