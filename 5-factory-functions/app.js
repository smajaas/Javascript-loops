// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };
// const bob = {
//   firstName: 'peter',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${(h =
          this.lastName)} and I want to be a software expert`
      );
    },
  };
}

const ajaas = createPerson('Mohd', 'Ajaas');
ajaas.fullName();

const afaan = createPerson('Appun', 'son');
afaan.fullName();

const talal = createPerson('Talal', 'Bhai');
talal.fullName();
