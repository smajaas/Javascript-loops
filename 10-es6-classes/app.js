class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'IOB';
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const ajaas = new Account('Afaan', 2000);
console.log(ajaas);
console.log(ajaas.name);
ajaas.deposit(1000);
console.log(ajaas.bank);

const afaan = new Account('Appunson', 3000);
console.log(afaan);
console.log(afaan.name);
afaan.deposit(1000);
console.log(afaan.bank);
