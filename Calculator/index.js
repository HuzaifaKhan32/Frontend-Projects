var display = document.querySelector(".screen");
function calculation() {
    try {
        display.value = eval(display.value);
    }
    catch (e) {
        display.value = "Error";
    }
}
