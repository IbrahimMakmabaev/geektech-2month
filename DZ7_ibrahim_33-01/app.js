// Д/З - 1
const numbers = [5, 4, 1, 20, 0, -4, -8, 100, 4, -74, -5, 0, 0, 1, 2, 7];


const multipliedBy5 = numbers.map(num => num * 5);

console.log('Умноженные на 5:', multipliedBy5);



const positiveNumbers = numbers.filter(num => num > 0);

console.log('Положительные числа:', positiveNumbers);



const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

console.log('Максимальное число:', maxNumber);



const minNumber = numbers.reduce((min, current) => (current < min ? current : min), numbers[0]);

console.log('Минимальное число:', minNumber);




// Д/З - 2
const names = ['алиса', 'ЖЕНЯ', 'артем', 'ПАВЕЛ', 'ЖАКШЫЛЫК', 'антон', 'айсулуу', 'канаим'];
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

const capitalizedNames = names.map(capitalize);

console.log('Имена с заглавной буквы:', capitalizedNames);



const namesStartingWithA = names.filter(name => name.toUpperCase().startsWith("А"));

console.log('Имена, начинающиеся с А:', namesStartingWithA);



const longestName = names.reduce((longest, current) => (current.length > longest.length ? current : longest), "");

console.log('Самое длинное имя:', longestName);



const shortestName = names.reduce((shortest, current) => (current.length < shortest.length ? current : shortest), names[0]);

console.log('Самое короткое имя:', shortestName);