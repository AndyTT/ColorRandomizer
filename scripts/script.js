let button = document.getElementById("btn");
let hex = document.getElementById("hex");
let main = document.getElementById("mainDiv");

button.onclick = function() {
//Generate random color
let color = getRandomHex();

//set maindiv to random colour
main.style.backgroundColor = color;

//set hex content to random color as it's generated
hex.innerHTML = color;
}


// Function to get random 6 letter hexcode
function getRandomHex() {
    let values = '0123456789ABCDEF';
    let hex = '#';

    for (var i = 0; i <= 5; i++){
        hex += values[Math.floor(Math.random() * 16)];
    }

    return hex;
}