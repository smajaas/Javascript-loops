/* In Regular Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

if nothing left on the dot it defaults to invoke global - window object
arrow functions - pump the breaks
*/

//console.log(this);

function showThis() {
  console.log(this);
}

const ajaas = {
  name: 'aju',
  showThis: showThis,
};

const afaan = {
  name: 'appu',
  showThis: showThis,
};

ajaas.showThis();
afaan.showThis();
showThis();

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);

btn2.addEventListener('click', function () {
  showThis();
});
