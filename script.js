`use strict`;

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Nubmer!";
// document.querySelector(".hidding").textContent;
// document.querySelector(".score").textContent = "10";

// console.log(document.querySelector(".guess").value);

// let hidding = Math.trunc(Math.random() * 20) + 1;

// console.log(hidding);
// let score = 20;
// let highscore = 0;
// // function message and display guess
// // // const displayMessage = function (message){
// // document.querySelector(".message").textContent = messsage;
// // }
// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess);
//   // Not any input
//   if (!guess) {
//     document.querySelector(".message").textContent = "No number!";
//   }
//   // Game win
//   else if (guess === hidding) {
//     document.querySelector(".message").textContent = "Correct Nubmer!";
//     highscore = hidding;
//     document.querySelector(".high").textContent = highscore;
//     score--;
//     document.querySelector(".score").textContent = score;
//     document.querySelector("body").style.backgroundColor = "green";
//     document.querySelector(".hidding").textContent = hidding;
//   }

//   // Number is too low
//   else if (guess < hidding) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = " You Lost!";

//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   // Number is too high
//   else if (guess > hidding) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too High!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = " You Lost!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });
// // Again button
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   // hidding = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".hidding").textContent = "?";
//   document.querySelector("body").style.backgroundColor = "black";
//   document.querySelector(".guess").value = "";
// });
// function for random number
let hidding = function () {
  //  document.querySelector(".hidding") =
  return Math.trunc(Math.random() * 20) + 1;
};
// function for message display
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let scoreCheck = function (score) {
  document.querySelector(".score").textContent = score;
};
let score = 20;

let high = 0;
let hide = hidding();
// console.log(hidding());
// document.querySelector(".hidding").value = hidding();
console.log(hide);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number");
    // document.querySelector(".message").textContent = "No Number";
  }
  // win
  else if (guess === hide) {
    displayMessage("Correct Number!");
    if (high < score) {
      high = score;
    }

    // document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "gray";
    document.querySelector(".hidding").style.width = "30rem";
    document.querySelector(".hidding").textContent = hide;
    document.querySelector(".high").textContent = high;
  }
  // Too High & Too Low
  else if (guess !== hide) {
    if (score > 1) {
      displayMessage(guess > hide ? "Too High!" : "Too Low!");
      // document.querySelector(".message").textContent =
      //   guess > hide ? "too high" : "too low";
      score--;
      scoreCheck(score);
      // document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Lost the game");
      // document.querySelector(".message").textContent = "Lost the game";
      scoreCheck("0");
      // document.querySelector(".score").textContent = 0;
    }
  }
});

// Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  scoreCheck(score);
  hide = hidding();
  displayMessage("Start Guessing...");
  // document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".hidding").style.width = "15rem";
  document.querySelector(".hidding").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
});
