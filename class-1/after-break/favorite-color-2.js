'use strict';

let message = 'your favorite color is: ';

let inputIsEmpty = true;
while (inputIsEmpty) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
  } else if (input.length !== 0) {
    message = message + input;
    inputIsEmpty = false;
  }
}

alert(message);