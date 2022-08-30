"use strict";
window.addEventListener("load", init);
let choiceSelected;
let inputString;
let resultString = "";
let nameLength;
let nameEndsAt;
let nameArray;
let spaceIndex;
let lastSpaceIndex;
let dotIndex;
let hypenIndex;

const outputField = document.querySelector("#output_field");

function init() {
  document.querySelector("#generate").addEventListener("click", generateOutput);
}
function generateOutput() {
  const inputString = document.querySelector("#name_field").value;
  const choiceSelected = document.getElementById("choice").value;

  //check out switch as if else statement with break
  if (choiceSelected === "firstNameUpperCase") {
    resultString = inputString.charAt(0).toUpperCase() + inputString.substring(1).toLowerCase();
    //console.log(resultString);
    outputField.textContent = resultString;
  }

  if (choiceSelected === "findFirstName") {
    //you can also split it to create array and then first item of the array
    nameEndsAt = inputString.indexOf(" ");
    resultString = inputString.substring(0, nameEndsAt);
    //console.log(resultString);
    outputField.textContent = `The first name is ${resultString}`;
  }
  if (choiceSelected === "findFirstNameLenght") {
    nameArray = inputString.split(" ");
    resultString = nameArray[0].length;
    //console.log(resultString);
    outputField.textContent = `The first name is ${resultString} characters long`;
  }
  if (choiceSelected === "findMiddleName") {
    spaceIndex = inputString.lastIndexOf(" ");
    lastSpaceIndex = inputString.indexOf(" ");
    resultString = inputString.substring(spaceIndex, lastSpaceIndex).trim();
    //console.log(resultString);
    outputField.textContent = `The middle name is ${resultString}`;
  }

  if (choiceSelected === "checkFile") {
    if (inputString.endsWith(".jpg") || inputString.endsWith(".png")) {
      dotIndex = inputString.indexOf(".");
      resultString = inputString.substring(dotIndex);
      //console.log(resultString);
      outputField.textContent = `This file is a ${resultString} file`;
    } else {
      outputField.textContent = `This file is not an image file`;
    }
  }
  if (choiceSelected === "makePassword") {
    resultString = resultString.padEnd(inputString.length, "*"); //can also be done with repeat
    //console.log(resultString);
    outputField.textContent = `${resultString} is a password`;
  }
  if (choiceSelected === "3rdUpper") {
    resultString = inputString.substring(0, 2) + inputString.charAt(2).toUpperCase() + inputString.substring(3);
    //console.log(resultString);
    outputField.textContent = `${resultString} is a funny name`;
  }

  //not sure about the last one

  // if (choiceSelected === "spaceHypenUpper") {
  //   spaceIndex = inputString.indexOf(" ");
  //   hypenIndex = inputString.indexOf("-");
  //   if ((spaceIndex && hypenIndex) || hypenIndex || spaceIndex) {
  //     resultString = inputString.substring(0, spaceIndex + 1) + inputString.charAt(spaceIndex + 1).toUpperCase() + inputString.substring(spaceIndex + 2) + inputString.charAt(hypenIndex + 1).toUpperCase();
  //     console.log(resultString);
  //   }
  //   outputField.textContent = `The name is ${resultString}`;
  // }

  //for method

  // for (let i=1; i<inputString.lenght; i++){
  // previousChar =inputString[i -1];
  // if (previousChar === " ") || (previousChar ==="-") {
  // currentChar = inputString[i].toUpperCase();
  // } else {
  //   currentChar = inputString[i];
  // }
  // resultString= currentChar
  // }
}
