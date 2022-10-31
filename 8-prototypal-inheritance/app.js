/*
Prototypal Inheritance Model 
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const ajaas = new Account('Ajaas', 10000);
const afaan = new Account('Afaan', 25000);

Account.prototype.bank = 'IOB';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello, ${this.name} your balance is ${this.balance}`);
};
//console.log(Account.prototype);

console.log(ajaas.bank);
console.log(afaan);

afaan.deposit(300);
ajaas.deposit(1200);
