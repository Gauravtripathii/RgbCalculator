// CHANGING BOX SHADOW

// var div = document.querySelector('.main');
// div.addEventListener("mousemove", changeShadow);
function changeShadow(event){
    var div = document.querySelector('.main');
    x = event.offsetX;
    y = event.offsetY;
    div.style.backgroundColor = `rgb(${x}, ${y}, 25)`;
}


// BUTTON FUNCTIONALITIES
var equation = "";
function btnClicked(value){
    var inputBox = document.getElementById("input");
    equation += inputBox.innerHTML + value;
    inputBox.value = equation;
}

function solve(){
    console.log();
    var inputBox = document.getElementById("input");
    inputBox.value = eval(equation);

}

function clearInp(){
    equation = ''
    var inputBox = document.getElementById("input");
    inputBox.value = equation;
}