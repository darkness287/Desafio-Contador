/*var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/
const acres = document.getElementById("increment");
const decre = document.getElementById("decrement");
var currentNumberWrapper = document.getElementById("currentNuber");
var currentNumber = 0;
var count = 0;

acres.addEventListener("click", mais);
decre.addEventListener("click", menos);


function mais(){
    if(count < 10){
        currentNumber = currentNumber + 1;
        document.getElementById("currentNumber").innerHTML = currentNumber;   
        count++;
    }
    if (currentNumber < 0){
        document.getElementById('currentNumber').style.color="#ca6567";
    }else{
        document.getElementById('currentNumber').style.color="#000000";
    }
 
}

function menos(){
    if(count > -10){
        currentNumber = currentNumber - 1;
        document.getElementById("currentNumber").innerHTML = currentNumber;
        count--;
    }
    if (currentNumber < 0){
        document.getElementById('currentNumber').style.color="#ca6567";
    }else{
        document.getElementById('currentNumber').style.color="#000000";
    }
}



