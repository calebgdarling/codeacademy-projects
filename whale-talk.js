let input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push("e");
  }
  if (input[i] === "u") {
    resultArray.push("u");
  }
  for (let x = 0; x < vowels.length; x++) {
    if (input[i] === vowels[x]) {
      resultArray.push(input[i]);
    }
  }
}

let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
