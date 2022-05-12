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


const list = document.getElementById("list-number");
for (let i = 0; i < numbers.length; i++) {
    let element = document.createElement("li");
    element.classList.add("number");
    element.innerText = numbers[i];
    list.append(element);
};

const btn = document.querySelector(".btn")
const usersNumbers = [];

btn.addEventListener("click", function(){
    list.remove();
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
    document.getElementById("text1").innerHTML = `Hai indovinato ${usersNumbers.length} numeri`;
    document.getElementById("text2").innerHTML = `Hai indovinato ${usersNumbers}`
} , 30 * 1000);
});


console.log(numbers)
