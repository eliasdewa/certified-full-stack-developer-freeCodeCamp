const questions = [
  {
    category: "General Knowledge",
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Ag", "Au", "Fe"],
    answer: "Au",
  },
  {
    category: "Literature",
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
    answer: "William Shakespeare",
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris",
  },
  {
    category: "Pop Culture",
    question: "Who played the lead role in the movie 'The Matrix'?",
    choices: ["Tom Hanks", "Leonardo DiCaprio", "Keanu Reeves"],
    answer: "Keanu Reeves",
  },
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}
// console.log(getRandomQuestion(questions))

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
// console.log(getRandomComputerChoice(questions))

function getResults(question, choice) {
  return choice === question.answer
    ? "The computer's choice is correct!"
    : `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}

const question = getRandomQuestion(questions);
const choice = getRandomComputerChoice(question.choices);
const result = getResults(question, choice);

console.log(question.question);
console.log(choice);
console.log(result);
