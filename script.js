// script.js
document.getElementById("convert-btn").addEventListener("click", function () {
  const number = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (!number) {
    output.textContent = "Please enter a valid number";
    return;
  }

  const num = parseInt(number);

  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (num > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = convertToRoman(num);
});

function convertToRoman(num) {
  const romanPairs = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";

  for (const [value, symbol] of romanPairs) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
