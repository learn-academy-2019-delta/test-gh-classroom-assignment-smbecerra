
//Challenge 1
var item = 101

if (item <= 100) {
    console.log("in budget");
} else {
    console.log("control yourself");
}

//Challenge 2 
var hungry = false

if(hungry == true){
    console.log("Eat Food");
} else {
    console.log("Keep Coding");
}

//Challenge 3 
var trafficLight = "red"

if (trafficLight == "green") {
    console.log("go");
} else if (trafficLight == "yellow") {
    console.log("slow down");
}
  else if (trafficLight == "red"){
      console.log("stop");
}

//Challenge 4
var num1 = 6
var num2 = 1

if(num1 > num2){
    console.log(num1);
} else if (num1 < num2){
    console.log(num2);
} else if (num1 === num2){
    console.log("Equal");
}

// Challenge 5 
var number = 32.7

if (number % 2 >= 1) {
    console.log("Odd");
}else if (number == 0) {
    console.log("Zero");
} else if ( number % 2 >= 0){
    console.log("Even");
}

//Challenge 6

var grade = "99%"

if(grade == "100%"){
    console.log("Perfect Score!");
} else if(grade >= "90%"){
    console.log("A");
} else if(grade >= "80%"){
    console.log("B");
} else if(grade >= "70%"){
    console.log("C");
} else if(grade >= "60%"){
    console.log("D");
} else if(grade >= "50%"){
    console.log("F");
} else if(grade == "0%"){
    console.log("No Grade Available");
}

//Challenge 7

var testVar = "Hello"

if (typeof testVar === "string"){
    console.log(testVar);
}

// Challenge 8

var password = "Password123!"

console.log(password.includes('!'));

if (password.length >= 12 && password.includes('!')){
    console.log("That is a mighty strong password.");
} else if (password.length >= 8 && password.includes('!')){
    console.log("That is a strong password.");
} else {
    console.log("Your password is not worthy.");
}
