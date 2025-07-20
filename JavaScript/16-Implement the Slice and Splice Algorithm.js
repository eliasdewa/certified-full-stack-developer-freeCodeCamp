function frankenSplice(arr1, arr2, num) {
  return [...arr2.slice(0, num), ...arr1, ...arr2.slice(num)]
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));