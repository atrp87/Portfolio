Useful JavaScript Code Snippets
Sort an Array

//strings
const names = ["Seema", "Rekha", "Jaya"];
names.sort();
//['Jaya', 'Rekha', 'Seema' ]
//Numbers
const numbers = [101, 8, 87];
numbers.sort((a, b) => {
return a - b;
});
//[ 8, 87, 101 ]

Select a random element

const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()\*items.length)
items[randomIndex]
Reverse a string

function reverseString(string) {
return string.split(" ").reverse().join(" ")
}
revereseString("Random String")

Check if element has a class

const element = document.querySelector("#element")
element.classList.contains("active")
String interpolation

const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
Loop through an array

const cars = ["Ford", "BMW", "Audi" ]
for (let car of cars) {
console.log(car)
}
/_
Ford
BMW
Audi
_/

Get current time

const date = new Date()
const currentTime =
`${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`
console.log(currentTimes)
//example output: "22:16:41"

Replace part of a string

const string = "You are awesome."
const replacedString = string.replace("You", "We")
console.log(replacedString) //Output: "We are awesome"

Destructing variable assignment

let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
Using the spread operator

let data = [1,2,3,4,5];
console.log(...data);
// 1 2 3 4 5
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// 10
