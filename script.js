const display= document.getElementById("myscreen");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value= "";
}

function calculate(){
        display.value = eval(display.value);
}

``