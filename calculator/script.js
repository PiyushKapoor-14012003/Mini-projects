const Solve = (char) => {
    var sound = document.getElementById("audio");
    sound.play();
    let display = document.getElementById("display");
    display.value += char;
}

const Clear = () => {
    document.getElementById("display").value = "";
}

const Backspace = () => {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

const Result = () => {
    let display = document.getElementById("display");
    let expression = display.value;
    try {
        display.value = eval(expression);
    } catch(err) {
        // document.getElementById("error").innerText = "Please enter a valid expression";
        display.value = "";
        let error = `Error! ${expression} is not a valid expression.`;
        document.getElementById("error").innerText = error;
    }
}