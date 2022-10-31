//Call - runs instantly, arguments - list of items
//apply - runs instantly, arguments - array of items

const ajaas = {
  name: 'john',
  age: 38,
};

const afaan = {
  name: 'afaan',
  age: 18,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and i live in ${city}, ${country}`
  );
}

greet.call(ajaas, 'los angeles', 'US');
greet.call(afaan, 'los angeles', 'US');
greet.call({ name: 'Talal', age: 15 }, 'los angeles', 'US');

greet.apply(ajaas, ['los angeles', 'US']);
greet.apply(afaan, ['los angeles', 'US']);
greet.apply({ name: 'Talal', age: 15 }, ['los angeles', 'US']);
