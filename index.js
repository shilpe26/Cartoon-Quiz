var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;
console.log(chalk.green.bold.underline("Welcome to Cartoons quiz") + chalk.red(" !"));
console.log(" ");
var userName = readlineSync.question(chalk.yellow("Whats your name?  "));
console.log(" ");

console.log("Welcome " + chalk.blue(userName) + " Do you know about Cartoons");
console.log(" ");

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You Answered: "+ answer);
    console.log(chalk.bgGreen("right!"));
    score = score + 1;
  }
  else{
    console.log(chalk.bgRed("wrong!"));
  }
  console.log("Current Score: ",score);
    console.log(chalk.magentaBright("--------------------------------"));
    console.log("");
}
//array of objects
var questions = [{
  question: "Q1) In the cartoon “The Jungle Book”, which musical band refused to be a part of the vultures?\nA. Aerosmith\nB. The Beatles\nC. The Rolling Stones\n  ",
  answer: "b"
},{
  question: "Q2)In the cartoon “The Little Mermaid”, how old is Ariel at the time of marrying Eric? \nA. 16 years old \nB. 18 years old \nC. 20 years old\n  ",
  answer: "a"
},{
  question: "Q3) What is another name of the Mickey Mouse? \nA. Mortimer Mouse \nB. Melvin Mouse \nC. Marty Mouse\n  ",
  answer: "a"
},{
  question: "Q4) What is the original name of Winnie the Pooh? \nA. Edward Bear \nB. Wendell Bear \nC. Christopher Bear\n  ",
  answer: "a"
},{
  question: "Q5) Which yellow bird can never believe its own eyes? \nA. Tweety Bird \nB. Daffy Duck \nC. Sylvester Bird\n ",
  answer: "a"
},{
  question: "Q6)Which cartoon character does not know that he smells bad? \nA. Pepe Le Pew \nB. Yosemite Sam \nC. Mr. Magoo\n ",
  answer: "a"
},{
  question: "Q7) What is the name of the villain in “The Lion King” \nA. Simba \nB. Mustafa \nC. Scar\n ",
  answer: "c"
},{
  question: "Q8) The word “Simba” in “The Lion King” is originated from which language” \nA. Turkish \nB. Swahili \nC. Afrikaans\n",
  answer: "b"
},{
  question: "Q9) What is the name of the Mickey Mouse’s girlfriend? \nA. Annie \nB. Minnie \nC. Sandra\n  ",
  answer: "b"
},{
  question: "Q10) “Little April Shower” is the song featuring in which cartoon of Disney? \nA. Frozen \nB. Bambi \nC. Coco\n  ",
  answer: "b"
}];

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer); 
}

console.log(chalk.bgYellowBright("YAY! You SCORED " + score + " out of 10"));
if(score >= 5){
  console.log(chalk.bold.italic("WoW! you know well😍😍"));
}
else{
  console.log(chalk.bold.italic("Ohh..., you don't enjoy your childhood much 😜😁"));
}
