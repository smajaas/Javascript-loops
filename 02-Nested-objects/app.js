// nested objects
// set variable as property value
// dot notation vs bracket notation

const age = 40;
let random = 'random-value';
random = 'age';

const person = {
  name: 'john',
  age: age,
  married: true,
  siblings: ['anna', 'peter'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hai,my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding addict',
      address: 'Los Angeles',
    },
  },
  'random-value': 'random',
};

console.log(person.job.company.address);
console.log(person);
console.log(person.age);
console.log(person.sayHello('ajaas'));
console.log(person['random-value']);
console.log(person['name']);
console.log(person[random]);
