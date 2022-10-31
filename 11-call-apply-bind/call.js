//Call - runs instantly, arguments - list of items
//apply - runs instantly, arguments - array of items

const ajaas = {
  name: 'john',
  age: 38,
  greet: function () {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  },
};

const afaan = {
  name: 'afaan',
  age: 18,
};

//ajaas.greet();

function greet() {
  console.log(this);
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
}

//this will fail
//afaan.greet();
//greet();
// const secondGreet = ajaas.greet;
// secondGreet();

greet.call(ajaas);
greet.call(afaan);
greet.call({ name: 'Talal', age: 15 });

ajaas.greet.call(afaan);
