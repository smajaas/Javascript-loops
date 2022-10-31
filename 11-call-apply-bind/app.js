//Call - runs instantly, arguments - list of items
//apply - runs instantly, arguments - array of items
//bind - assign, use later,arguments - list of items

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

//assign , call it later

const afaanGreet = greet.bind(afaan, 'Seatle', 'USA');
afaanGreet();
