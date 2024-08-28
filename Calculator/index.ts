let display = document.querySelector(".screen") as HTMLInputElement;

function calculation(){
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
}

