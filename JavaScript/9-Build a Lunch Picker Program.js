const lunches = [];

const addLunchToEnd = (array, str) => {
  array.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return array;
};

const addLunchToStart = (array, str) => {
  array.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return array;
};

const removeLastLunch = (array) => {
  const removeItem = array.pop();
  removeItem
    ? console.log(`${removeItem} removed from the end of the lunch menu.`)
    : console.log("No lunches to remove.");
  return array;
};

const removeFirstLunch = (array) => {
  const removeItem = array.shift();
  removeItem
    ? console.log(`${removeItem} removed from the start of the lunch menu.`)
    : console.log("No lunches to remove.");
  return array;
};

const getRandomLunch = (array) => {
  if (!array.length) {
    console.log("No lunches available.");
  } else {
    const max = array.length;
    const randomNum = Math.floor(Math.random() * max);
    console.log(`Randomly selected lunch: ${array[randomNum]}`);
  }
};

const showLunchMenu = (array) => {
  array.length
    ? console.log(`Menu items: ${array.join(", ")}`)
    : console.log("The menu is empty.");
};

// console.log(addLunchToEnd(lunches, "Tacos"));
// console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

// console.log(addLunchToStart(lunches, "Sushi"));
// console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

// console.log(removeLastLunch([]));
// console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
// console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

// console.log(removeFirstLunch([]));
// console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
// console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

// getRandomLunch([]);
// getRandomLunch(["Salad"]);
// getRandomLunch(["Salad", "Burger"]);
// getRandomLunch(["Salad", "Burger", "Pizza"]);

// showLunchMenu([]);
// showLunchMenu(["Bag"]);
// showLunchMenu(["Bag", "Watch"]);
// showLunchMenu(["Bag", "Watch", "Jacket"]);
showLunchMenu(["Greens", "Corns", "Beans"])

