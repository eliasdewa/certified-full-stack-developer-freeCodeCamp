// a function that checks the give year is a leap year or not
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return `${year} is a leap year.`;
  }
  return `${year} is not a leap year.`;
}

let year = "2020";

const result = isLeapYear(year);
console.log(result);
