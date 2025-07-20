function pyramid(str, num, isTrue) {
  let newStr = "";
  if (!isTrue) {
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num - i; j++) {
        newStr += " ";
      }
      newStr += str.repeat(2 * i - 1) + "\n";
    }
    return "\n" + newStr;
  } else {
    for (let i = num; i >= 1; i--) {
      for (let j = 1; j <= num - i; j++) {
        newStr += " ";
      }
      newStr += str.repeat(2 * i - 1) + "\n";
    }
    return "\n" + newStr;
  }
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
