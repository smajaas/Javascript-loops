// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I want to be a Software Expert`
    );
  };
  console.log(this);
}

const ajaas = new Person('Afaan', 'Ajaas');
ajaas.fullName();
const afaan = new Person('Appun', 'son');
afaan.fullName();

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}
