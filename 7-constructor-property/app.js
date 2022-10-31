// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
}

const ajaas = new Person('Mohd', 'Ajaas');
console.log(ajaas.constructor);

const talal = {};
console.log(talal.constructor);

const list = [];
console.log(list.constructor);

const sayHi = function () {};
console.log(sayHi.constructor);

const afaan = new ajaas.constructor('appu', 'doctor');
afaan.fullName();
