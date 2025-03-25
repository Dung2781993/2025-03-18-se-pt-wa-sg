function checkOddNumber(number) {
    if (number % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
}

function totalSum (a, b) {
  return a + b;
}

function generateRandomStories(stories) {
  let randomNumber = Math.random();
  return stories[randomNumber];
}