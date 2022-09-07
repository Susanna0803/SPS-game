// REVERSED and NORMAL
// Count number of winning, loosing and draw
// global variable USER NAME

var computerWin = 0;
var userWin = 0;
var sameSameDraw = 0;
var currentGameMode = "Waiting for user name";
var userName = "";

// convert the randombycomputer to 'scissors', 'paper' or 'stones'
// assign 1 = scissors
// assign 2 = paper
// assign 3 = stone

var randomByComputer = function () {
  var randomNumber = Math.random() * 3;
  var roundTheNumber = Math.floor(randomNumber);
  var randomChoice = roundTheNumber + 1;

  console.log("computer random output in number:", randomChoice);

  if (randomChoice == 1) {
    randomChoice = "scissors";
  }
  if (randomChoice == 2) {
    randomChoice = "paper";
  }
  if (randomChoice == 3) {
    randomChoice = "stone";
  }

  console.log("computer random output in string:", randomChoice);

  return randomChoice;
};

// MAIN FUNCTION
var main = function (input) {
  var myOutputValue = "";

  console.log("user input:", input);

  if (currentGameMode == "Waiting for user name") {
    userName = input;
    currentGameMode = "SPS";
    myOutputValue =
      "Hello, " +
      userName +
      ", the game will start now 💫. <br><br>You can type in 'scissors' ✂️, 'paper'  📜  or 'stone' 🪨 <br><br> ALTERNATIVELY... <br><br>if you are up to a more challenging game by reversing the rules 🤯, you can type in 'reversed scissors' 🙃✂️, 'reversed paper'  🙃📜  or 'reversed stone' 🙃🪨 ";
  } else if (currentGameMode == "SPS") {
    if (
      input !== "scissors" &&
      input !== "paper" &&
      input !== "stone" &&
      input !== "reversed stone" &&
      input !== "reversed paper" &&
      input !== "reversed scissors"
    ) {
      console.log("not the wante input");
      myOutputValue =
        userName +
        ", please choose 'scissors', 'paper', 'stone' <br><br>OR... <br><br>for reversed rules, you can choose: <br>'reversed scissors', <br>'reversed paper',  or <br>'reversed stone' <br><br>Try Again!";
      return myOutputValue;
    }

    // input only 'scissors', 'paper' or 'stones' plus the reversed family
    myOutputValue = randomByComputer();

    // DRAW!!
    if (input == myOutputValue) {
      sameSameDraw = sameSameDraw + 1;
      myOutputValue =
        "DRAW! <br>" +
        userName +
        ", you chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        " too.<br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed scissors" && myOutputValue == "scissors") {
      sameSameDraw = sameSameDraw + 1;
      myOutputValue =
        "DRAW! <br>" +
        userName +
        ", you chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        " too.<br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed paper" && myOutputValue == "paper") {
      sameSameDraw = sameSameDraw + 1;
      myOutputValue =
        "DRAW! <br>" +
        userName +
        ", you chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        " too.<br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed stone" && myOutputValue == "stone") {
      sameSameDraw = sameSameDraw + 1;
      myOutputValue =
        "DRAW! <br>" +
        userName +
        ", you chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        " too. <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    console.log("number of Draw", sameSameDraw);

    // YOU WIN!!

    if (input == "scissors" && myOutputValue == "paper") {
      userWin = userWin + 1;
      myOutputValue =
        userName +
        ", YOU WIN! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "paper" && myOutputValue == "stone") {
      userWin = userWin + 1;
      myOutputValue =
        userName +
        ", YOU WIN! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "stone" && myOutputValue == "scissors") {
      userWin = userWin + 1;
      myOutputValue =
        userName +
        ", YOU WIN! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed scissors" && myOutputValue == "stone") {
      userWin = userWin + 1;
      myOutputValue =
        userName +
        ", YOU WIN! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed paper" && myOutputValue == "scissors") {
      userWin = userWin + 1;
      myOutputValue =
        userName +
        ", YOU WIN! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed stone" && myOutputValue == "paper") {
      userWin = userWin + 1;
      myOutputValue =
        userName +
        ", YOU WIN! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    console.log("number of winning (user)", userWin);

    // YOU LOSE!! Try again...

    if (input == "scissors" && myOutputValue == "stone") {
      computerWin = computerWin + 1;
      myOutputValue =
        userName +
        ", YOU LOSE! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br> Don't give up... Try Again! <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "stone" && myOutputValue == "paper") {
      computerWin = computerWin + 1;
      myOutputValue =
        userName +
        ", YOU LOSE! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br> Don't give up... Try Again! <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "paper" && myOutputValue == "scissors") {
      computerWin = computerWin + 1;
      myOutputValue =
        userName +
        ", YOU LOSE! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br> Don't give up... Try Again! <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed scissors" && myOutputValue == "paper") {
      computerWin = computerWin + 1;
      myOutputValue =
        userName +
        ", YOU LOSE! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br> Don't give up... Try Again! <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed paper" && myOutputValue == "stone") {
      computerWin = computerWin + 1;
      myOutputValue =
        userName +
        ", YOU LOSE! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br> Don't give up... Try Again! <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }
    if (input == "reversed stone" && myOutputValue == "scissors") {
      computerWin = computerWin + 1;
      myOutputValue =
        userName +
        ", YOU LOSE! <br> You chose " +
        input +
        ", and your opponent chose " +
        myOutputValue +
        ". <br> Don't give up... Try Again! <br><br>Winning: " +
        userWin +
        "<br>Losing: " +
        computerWin +
        "<br> Draw: " +
        sameSameDraw;
    }

    console.log("number of Losing:", computerWin);
  }
  return myOutputValue;
};
