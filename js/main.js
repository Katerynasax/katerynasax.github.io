var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "img/bread.png") {
    myImage.setAttribute("src", "img/bread2.png");
  } else {
    myImage.setAttribute("src", "img/bread.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Гамарджоба, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Гамарджоба, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
