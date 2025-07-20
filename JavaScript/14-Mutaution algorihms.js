function mutation(array) {
  const firstStr = array[0].toLowerCase();
  const secondStr = array[1].toLowerCase();
  for (let i = 0; i < secondStr.length; i++) {
    if (!firstStr.includes(secondStr[i])) return false;
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "Hell"]));
console.log(mutation(["hello", "Hi"]));