let text = "   Hello, World! This is a TEST string. It has 123 numbers and some extra spaces.   ";
// Trim the text
let trimmedText = text.trim();
console.log(trimmedText);

// lowercase
let lowerCaseText = trimmedText.toLowerCase();
console.log('all string to lowercase:',lowerCaseText);

//replace
let replacedText = lowerCaseText.replace("test", "practice");
console.log(replacedText);

//count the letter 'S'
let counts = text.match(/s/gi).length;
console.log('letter S appeared:',counts);

//string ends with
let endsWithperiod = text.trim().endsWith(".");
console.log('string ends with period:',endsWithperiod);

//index of
let indexOfWorld = text.trim().indexOf("World");
console.log('index of world is:',indexOfWorld);

//split
let testarray = text.trim().split(" ");
console.log(testarray);

//remove all numbers
let removedNumbers = text.replace(/\d+/g, "");
console.log(removedNumbers)

//capitalize
let capitalizedtext = trimmedText.toLowerCase();
capitalizedtext = capitalizedtext.charAt(0).toUpperCase() + capitalizedtext.slice(1);
console.log(capitalizedtext);

//string contains
let containshello = text.trim().includes("hello");
console.log('string contains hello:',containshello);
