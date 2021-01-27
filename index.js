
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6


var randomImageSource = "dice" + randomNumber1 + ".png"; //dice1.png 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
var f;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "Player 1 Wins! 🚩";
  document.querySelector("h3").innerHTML = "Player 2 Refresh ME!";
  f=1;
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins! 🚩";
  document.querySelector("h3").innerHTML = "Player 1 Refresh ME!";
  f=0;
}
else {
  if(f===1)
  {
    document.querySelector("h2").innerHTML = "Draw!";
    document.querySelector("h3").innerHTML = "Player 2 Refresh ME!";
  }
  else
  { 
    document.querySelector("h2").innerHTML = "Draw!";
    document.querySelector("h3").innerHTML = "Player 1 Refresh ME!";
  }  
}
//UTsav Verma