let arr = ["apple", "banana", "cherry", "strawberry"];

function longestString(fruitArr) {
  let longestString = fruitArr[0];
  for (let i = 0; i < fruitArr.length; i++) {
    // Compare the longestString with the upcoming, if the upcoming is longer, then assign it to longestString
    if (fruitArr[i].length > longestString.length) {
      longestString = fruitArr[i];
    }
  }
  return longestString;
}

console.log(longestString(arr));
