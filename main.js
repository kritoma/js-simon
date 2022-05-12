// function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// main  
const numbers = [];
let number;
 
while (numbers.length < 5) {
    number = getRndInteger(1,20)
    if( !numbers.includes(number)) {
        numbers.push(number)
    }
};

alert(numbers);

const usersNumbers = [];

setTimeout(function(){
    for (let i = 0; i < 5; i++) {
        let usersNumber
        do {
            usersNumber = Number(prompt("inserisci un numero"));
        }while(isNaN(usersNumber));
        
        if(numbers.includes(usersNumber) && !usersNumbers.includes(usersNumber)) {
            usersNumbers.push(usersNumber);
        };
    };
    console.log(`Hai indovinato ${usersNumbers.length} numeri`);
    console.log(`Hai indovinato ${usersNumbers}`)
} ,5000);

console.log(numbers)
