"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfPersons
  let arrayOfPersons = JSON.parse(readLine().replace(/'/g, '"'));

  /*
   *Write your code here and log the output.
   */
   for(let each of arrayOfPersons){
       if(each.age >= 18){
           console.log(each.name)
       }
   }
}










