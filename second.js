const num = [1,2,3,5]
const xd = num.find(item => item === 2)
num.push( "Jarosław",6,"Andrzej" ) 
console.log(num)
//** ciąg fibonaciego */
let i;
let fib = []; 

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 11 ; i++) {
  fib[i] = fib[i - 2 ] + fib[i - 1];
 console.log(fib[i]);
}
//** randomowa data  */
const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

//**tablicas z imionami /pop/  */
const names = ["Osakr" , "kleszczu" , "fabianek" ,"Arturitto","halina" ]
names.pop(names);
console.log(names)

//** liczby do 100 */
const text = new Array()
for(i= 0 + 0 ; i < 100; i++ ){
 text.push(i + 1)
}
//**odwrotność  */
console.log(text.reverse()) 
 
//**liczby od do */
const sixteen = new Array()
for(let i = 40; i < 61; i++){
    sixteen.push(i)
}
console.log(sixteen)

//** Od Do odwrotne  */
const XD = text.filter (item => {
     if (item > 40 && item < 60 ) {
         return item 
     }
 })
 console.log(XD)

//** licznie po trzy  */
const rzayTrzy = text.map(item => item * 3)
console.log(rzayTrzy)

//**sprawdzanie czy liczby  są większe niż 5 w danym elemencie */
const every = text.every(item => item > 5 )   
console.log(every)

//** sprawdzanie czy liczbt są większe niż 5 we wszystkich elementach */
const SOME = text.some(item => item > 5 )   
console.log(SOME)

//** wszystko z dużej liter */
const strings = ["hello", "Array", "WORLD"];
function makeUpperCase(v)
{
    return v.toUpperCase();
}
const uppers = strings.map(makeUpperCase);

console.log(uppers)

//** działanie pop */

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'

//** liczba podwojona */
var liczby = [1, 5, 10, 15];
var podwojenia = liczby.map(function(x) {
    return x * 2;
});
console.log(liczby)
console.log(podwojenia)

//** Wyszukiwanie  */
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(fruit) {
    return fruit.name === 'cherries';
  }
  
  console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }

  const tablia = new Array(1, 15 , 255)
  console.log(tablia.length)

  tablia.forEach(teb =>{
      console.log(teb)
  })
//**Shift  */
  var weyFish = ["anioł", "klaun", "mandarynka", "chirurg"];
 console.log("myFish przed: " + weyFish);
 let shifted = weyFish.shift();
 console.log("myFish po: " + weyFish);
 console.log("Usunięto element: " + shifted);

//**unshift */
 mewFish = ["anioł", "klaun"];
console.log("myFish przed: " + mewFish);
unshifted = mewFish.unshift("bęben", "lew");
console.log("myFish po: " + mewFish);
console.log("Nowa długość tablicy: " + unshifted);
//** Push */
memFish = ["anioł", "klaun"];
pushed = memFish.push("bęben", "lew");
console.log(memFish)
console.log("długość", + pushed)
