export interface IAnswers {
  id: number;
  answer: string;
  isCorrect: boolean;
}

export interface ITrivias {
  id: number;
  question: string;
  answers: IAnswers[];
}

const allTrivias: ITrivias[] = [
  {
    id: 1,
    question: "What is the default package manager for Node.js?",
    answers: [
      { id: 1, answer: "npm", isCorrect: true },
      { id: 2, answer: "yarn", isCorrect: false },
      { id: 3, answer: "pip", isCorrect: false },
      { id: 4, answer: "composer", isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "Which programming language is known for its use in machine learning and artificial intelligence?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "Python", isCorrect: true },
      { id: 3, answer: "C++", isCorrect: false },
      { id: 4, answer: "Ruby", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "In JavaScript, what is the purpose of the 'typeof' operator?",
    answers: [
      { id: 1, answer: "Check if a variable is defined", isCorrect: true },
      { id: 2, answer: "Convert a variable to a string", isCorrect: false },
      { id: 3, answer: "Increment a variable", isCorrect: false },
      { id: 4, answer: "Check if a variable is an object", isCorrect: false },
    ],
  },
  {
    id: 4,
    question:
      "Which version control system is commonly used for open-source projects?",
    answers: [
      { id: 1, answer: "Mercurial", isCorrect: false },
      { id: 2, answer: "Git", isCorrect: true },
      { id: 3, answer: "SVN", isCorrect: false },
      { id: 4, answer: "Bazaar", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    answers: [
      { id: 1, answer: "Computer Style Sheets", isCorrect: false },
      { id: 2, answer: "Cascading Style Sheets", isCorrect: true },
      { id: 3, answer: "Creative Style Sheets", isCorrect: false },
      { id: 4, answer: "Colorful Style Sheets", isCorrect: false },
    ],
  },
  {
    id: 6,
    question:
      "Which programming language was developed by Microsoft and is commonly used for building Windows applications?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "C#", isCorrect: true },
      { id: 3, answer: "Python", isCorrect: false },
      { id: 4, answer: "Swift", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is the main purpose of the 'npm' command in Node.js?",
    answers: [
      { id: 1, answer: "Node Package Manager", isCorrect: true },
      { id: 2, answer: "New Project Module", isCorrect: false },
      { id: 3, answer: "Node Package Module", isCorrect: false },
      { id: 4, answer: "Node Project Manager", isCorrect: false },
    ],
  },
  {
    id: 8,
    question:
      "Which programming language is often used for developing web servers and APIs?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "Ruby", isCorrect: false },
      { id: 3, answer: "Python", isCorrect: false },
      { id: 4, answer: "Node.js (JavaScript)", isCorrect: true },
    ],
  },
  {
    id: 9,
    question: "In Python, what does the 'range' function do?",
    answers: [
      { id: 1, answer: "Generate a random number", isCorrect: false },
      {
        id: 2,
        answer: "Create a list of numbers in a specified range",
        isCorrect: true,
      },
      { id: 3, answer: "Round a floating-point number", isCorrect: false },
      { id: 4, answer: "Convert a string to uppercase", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "What is the purpose of the 'git clone' command?",
    answers: [
      { id: 1, answer: "Create a new Git repository", isCorrect: false },
      { id: 2, answer: "Commit changes to a repository", isCorrect: false },
      {
        id: 3,
        answer: "Copy a repository from a remote server to the local machine",
        isCorrect: true,
      },
      { id: 4, answer: "Merge branches in a repository", isCorrect: false },
    ],
  },
  {
    id: 11,
    question:
      "Which data type is used to represent whole numbers in most programming languages?",
    answers: [
      { id: 1, answer: "Float", isCorrect: false },
      { id: 2, answer: "Integer", isCorrect: true },
      { id: 3, answer: "String", isCorrect: false },
      { id: 4, answer: "Boolean", isCorrect: false },
    ],
  },
  {
    id: 12,
    question:
      "What is the purpose of the 'try...catch' statement in JavaScript?",
    answers: [
      { id: 1, answer: "Define a function", isCorrect: false },
      { id: 2, answer: "Declare a variable", isCorrect: false },
      { id: 3, answer: "Handle exceptions (errors) in code", isCorrect: true },
      { id: 4, answer: "Loop through an array", isCorrect: false },
    ],
  },
  {
    id: 13,
    question: "Which markup language is used to structure content on the web?",
    answers: [
      { id: 1, answer: "JSON", isCorrect: false },
      { id: 2, answer: "HTML", isCorrect: true },
      { id: 3, answer: "XML", isCorrect: false },
      { id: 4, answer: "CSS", isCorrect: false },
    ],
  },
  {
    id: 14,
    question:
      "Which programming language is primarily used for building Android applications?",
    answers: [
      { id: 1, answer: "Swift", isCorrect: false },
      { id: 2, answer: "Java", isCorrect: true },
      { id: 3, answer: "Kotlin", isCorrect: false },
      { id: 4, answer: "Objective-C", isCorrect: false },
    ],
  },
  {
    id: 15,
    question: "What is the purpose of the 'await' keyword in JavaScript?",
    answers: [
      { id: 1, answer: "Declare a variable", isCorrect: false },
      {
        id: 2,
        answer: "Pause execution until a promise is settled",
        isCorrect: true,
      },
      { id: 3, answer: "Create a loop", isCorrect: false },
      { id: 4, answer: "Import a module", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "In C++, what is the difference between '++i' and 'i++'?",
    answers: [
      {
        id: 1,
        answer: "No difference, they are interchangeable",
        isCorrect: false,
      },
      {
        id: 2,
        answer:
          "'++i' increments the value before its use, 'i++' increments after its use",
        isCorrect: true,
      },
      {
        id: 3,
        answer: "'++i' increments by 2, 'i++' increments by 1",
        isCorrect: false,
      },
      {
        id: 4,
        answer:
          "'++i' is used for floating-point numbers, 'i++' is used for integers",
        isCorrect: false,
      },
    ],
  },
  {
    id: 17,
    question:
      "Which of the following is not a valid primitive data type in most programming languages?",
    answers: [
      { id: 1, answer: "Boolean", isCorrect: false },
      { id: 2, answer: "Array", isCorrect: true },
      { id: 3, answer: "Integer", isCorrect: false },
      { id: 4, answer: "Float", isCorrect: false },
    ],
  },
  {
    id: 18,
    question:
      "What is the purpose of the 'else' statement in conditional statements (if-else) in programming?",
    answers: [
      { id: 1, answer: "Terminate the program", isCorrect: false },
      { id: 2, answer: "Define a new variable", isCorrect: false },
      {
        id: 3,
        answer:
          "Provide an alternative code block to execute if the condition is false",
        isCorrect: true,
      },
      { id: 4, answer: "Create a loop", isCorrect: false },
    ],
  },
  {
    id: 19,
    question:
      "Which of the following is a dynamically typed programming language?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "C#", isCorrect: false },
      { id: 3, answer: "Python", isCorrect: true },
      { id: 4, answer: "C++", isCorrect: false },
    ],
  },
  {
    id: 20,
    question:
      "What is the purpose of the 'super' keyword in object-oriented programming?",
    answers: [
      {
        id: 1,
        answer: "Access the current object's properties",
        isCorrect: false,
      },
      {
        id: 2,
        answer: "Invoke the parent class's method or constructor",
        isCorrect: true,
      },
      { id: 3, answer: "Create a new object", isCorrect: false },
      { id: 4, answer: "Delete an object", isCorrect: false },
    ],
  },
  {
    id: 21,
    question:
      "Which of the following is a statically typed programming language?",
    answers: [
      { id: 1, answer: "JavaScript", isCorrect: false },
      { id: 2, answer: "Python", isCorrect: false },
      { id: 3, answer: "Java", isCorrect: true },
      { id: 4, answer: "Ruby", isCorrect: false },
    ],
  },
  {
    id: 22,
    question: "What is the purpose of the 'break' statement in loops?",
    answers: [
      { id: 1, answer: "Skip the next iteration of the loop", isCorrect: true },
      { id: 2, answer: "Terminate the loop and exit", isCorrect: false },
      {
        id: 3,
        answer: "Continue to the next iteration of the loop",
        isCorrect: false,
      },
      { id: 4, answer: "Pause the loop execution", isCorrect: false },
    ],
  },
  {
    id: 23,
    question:
      "Which programming language is often used for data analysis and scientific computing?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "R", isCorrect: true },
      { id: 3, answer: "Swift", isCorrect: false },
      { id: 4, answer: "PHP", isCorrect: false },
    ],
  },
  {
    id: 24,
    question: "What is the purpose of the 'const' keyword in JavaScript?",
    answers: [
      {
        id: 1,
        answer:
          "Declare a variable with a constant value that cannot be reassigned",
        isCorrect: true,
      },
      { id: 2, answer: "Define a function", isCorrect: false },
      { id: 3, answer: "Create a loop", isCorrect: false },
      { id: 4, answer: "Import a module", isCorrect: false },
    ],
  },
  {
    id: 25,
    question: "In Java, what is the purpose of the 'toString' method?",
    answers: [
      { id: 1, answer: "Convert an integer to a string", isCorrect: false },
      { id: 2, answer: "Convert a float to an integer", isCorrect: false },
      {
        id: 3,
        answer: "Return a string representation of an object",
        isCorrect: true,
      },
      { id: 4, answer: "Concatenate two strings", isCorrect: false },
    ],
  },
  {
    id: 26,
    question: "Which programming paradigm does JavaScript support?",
    answers: [
      { id: 1, answer: "Functional programming", isCorrect: true },
      { id: 2, answer: "Imperative programming", isCorrect: true },
      { id: 3, answer: "Object-oriented programming", isCorrect: true },
      { id: 4, answer: "Declarative programming", isCorrect: true },
    ],
  },
  {
    id: 27,
    question:
      "What is the purpose of the 'SQL' language in database management?",
    answers: [
      { id: 1, answer: "Styling web pages", isCorrect: false },
      {
        id: 2,
        answer: "Querying and managing relational databases",
        isCorrect: true,
      },
      { id: 3, answer: "Creating animations", isCorrect: false },
      { id: 4, answer: "Building server-side applications", isCorrect: false },
    ],
  },
  {
    id: 28,
    question: "What does the acronym 'API' stand for?",
    answers: [
      { id: 1, answer: "Advanced Programming Interface", isCorrect: false },
      { id: 2, answer: "Application Programming Interface", isCorrect: true },
      { id: 3, answer: "Automated Program Integration", isCorrect: false },
      {
        id: 4,
        answer: "Algorithmic Processing and Interaction",
        isCorrect: false,
      },
    ],
  },
  {
    id: 29,
    question: "In Python, what is the purpose of the 'elif' keyword?",
    answers: [
      { id: 1, answer: "Define a function", isCorrect: false },
      { id: 2, answer: "Create a loop", isCorrect: false },
      {
        id: 3,
        answer: "Short for 'else if', used in conditional statements",
        isCorrect: true,
      },
      { id: 4, answer: "Import a module", isCorrect: false },
    ],
  },
  {
    id: 30,
    question:
      "Which programming language is often used for developing mobile applications on the iOS platform?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "Swift", isCorrect: true },
      { id: 3, answer: "Kotlin", isCorrect: false },
      { id: 4, answer: "Objective-C", isCorrect: false },
    ],
  },
  {
    id: 31,
    question:
      "What is the purpose of the 'docker' tool in software development?",
    answers: [
      { id: 1, answer: "Version control for code", isCorrect: false },
      {
        id: 2,
        answer: "Containerization and deployment of applications",
        isCorrect: true,
      },
      { id: 3, answer: "Database management", isCorrect: false },
      { id: 4, answer: "Text editor", isCorrect: false },
    ],
  },
  {
    id: 32,
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { id: 1, answer: "let", isCorrect: true },
      { id: 2, answer: "variable", isCorrect: false },
      { id: 3, answer: "var", isCorrect: true },
      { id: 4, answer: "declare", isCorrect: false },
    ],
  },
  {
    id: 33,
    question:
      "In Java, what is the purpose of the 'finally' block in a try-catch-finally statement?",
    answers: [
      {
        id: 1,
        answer: "Execute code only if the try block succeeds",
        isCorrect: false,
      },
      { id: 2, answer: "Catch and handle exceptions", isCorrect: false },
      {
        id: 3,
        answer: "Always execute code, whether an exception is thrown or not",
        isCorrect: true,
      },
      { id: 4, answer: "Define a new variable", isCorrect: false },
    ],
  },
  {
    id: 34,
    question:
      "Which programming language is often used for developing web applications with a focus on real-time interactions?",
    answers: [
      { id: 1, answer: "PHP", isCorrect: false },
      { id: 2, answer: "Ruby", isCorrect: false },
      { id: 3, answer: "JavaScript (Node.js)", isCorrect: true },
      { id: 4, answer: "Python", isCorrect: false },
    ],
  },
];

const randomizer = ({ max, data }: { max: number; data: ITrivias[] }) => {
  const randomQuestions: ITrivias[] = [];

  for (let i = 0; i <= max; i++) {
    const randomNumber = Math.floor(Math.random() * data.length);

    randomQuestions.push(data[randomNumber]);
  }

  return randomQuestions;
};

export const trivias: ITrivias[] = [
  {
    id: 1,
    question: "What is the default package manager for Node.js?",
    answers: [
      { id: 1, answer: "npm", isCorrect: true },
      { id: 2, answer: "yarn", isCorrect: false },
      { id: 3, answer: "pip", isCorrect: false },
      { id: 4, answer: "composer", isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "Which programming language is known for its use in machine learning and artificial intelligence?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "Python", isCorrect: true },
      { id: 3, answer: "C++", isCorrect: false },
      { id: 4, answer: "Ruby", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "In JavaScript, what is the purpose of the 'typeof' operator?",
    answers: [
      { id: 1, answer: "Check if a variable is defined", isCorrect: true },
      { id: 2, answer: "Convert a variable to a string", isCorrect: false },
      { id: 3, answer: "Increment a variable", isCorrect: false },
      { id: 4, answer: "Check if a variable is an object", isCorrect: false },
    ],
  },
  {
    id: 4,
    question:
      "Which version control system is commonly used for open-source projects?",
    answers: [
      { id: 1, answer: "Mercurial", isCorrect: false },
      { id: 2, answer: "Git", isCorrect: true },
      { id: 3, answer: "SVN", isCorrect: false },
      { id: 4, answer: "Bazaar", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    answers: [
      { id: 1, answer: "Computer Style Sheets", isCorrect: false },
      { id: 2, answer: "Cascading Style Sheets", isCorrect: true },
      { id: 3, answer: "Creative Style Sheets", isCorrect: false },
      { id: 4, answer: "Colorful Style Sheets", isCorrect: false },
    ],
  },
  {
    id: 6,
    question:
      "Which programming language was developed by Microsoft and is commonly used for building Windows applications?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "C#", isCorrect: true },
      { id: 3, answer: "Python", isCorrect: false },
      { id: 4, answer: "Swift", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is the main purpose of the 'npm' command in Node.js?",
    answers: [
      { id: 1, answer: "Node Package Manager", isCorrect: true },
      { id: 2, answer: "New Project Module", isCorrect: false },
      { id: 3, answer: "Node Package Module", isCorrect: false },
      { id: 4, answer: "Node Project Manager", isCorrect: false },
    ],
  },
  {
    id: 8,
    question:
      "Which programming language is often used for developing web servers and APIs?",
    answers: [
      { id: 1, answer: "Java", isCorrect: false },
      { id: 2, answer: "Ruby", isCorrect: false },
      { id: 3, answer: "Python", isCorrect: false },
      { id: 4, answer: "Node.js (JavaScript)", isCorrect: true },
    ],
  },
  {
    id: 9,
    question: "In Python, what does the 'range' function do?",
    answers: [
      { id: 1, answer: "Generate a random number", isCorrect: false },
      {
        id: 2,
        answer: "Create a list of numbers in a specified range",
        isCorrect: true,
      },
      { id: 3, answer: "Round a floating-point number", isCorrect: false },
      { id: 4, answer: "Convert a string to uppercase", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "What is the purpose of the 'git clone' command?",
    answers: [
      { id: 1, answer: "Create a new Git repository", isCorrect: false },
      { id: 2, answer: "Commit changes to a repository", isCorrect: false },
      {
        id: 3,
        answer: "Copy a repository from a remote server to the local machine",
        isCorrect: true,
      },
      { id: 4, answer: "Merge branches in a repository", isCorrect: false },
    ],
  },
];
// export const trivias = randomizer({ max: 9, data: allTrivias });
