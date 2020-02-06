'use strict';

const myButton = document.querySelector('button');
const userInputs = document.querySelectorAll('input');
const myListDiv = document.querySelector('#myList');

function parseUserInputs(list) {
  const userArray = [];
  list.forEach(function(input) {
    userArray.push(input.value);
    const newText = document.createElement('p');
    userArray.forEach(function(input, index) {
      newText.innerHTML = userArray[index];
      myListDiv.appendChild(newText);
    });
  });
  return userArray;
}

myButton.addEventListener('click', function(event) {
  event.preventDefault();
  const userInputArray = parseUserInputs(userInputs);
});
