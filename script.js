const display = document.getElementById('display');
const cupResult = document.getElementById('cup-result');
const brewStation = document.getElementById('brew-station');

function appendToDisplay(input) {
    // Reset the cup if you start typing a new calculation
    brewStation.classList.remove('brewed');
    cupResult.innerText = "";
    
    if (display.value.length < 10) {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    brewStation.classList.remove('brewed');
    cupResult.innerText = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        
        // 1. Show answer in the CUP
        cupResult.innerText = Number.isInteger(result) ? result : result.toFixed(2);
        
        // 2. Clear the top screen (the "drop" effect)
        display.value = "";
        
        // 3. Reveal the cup result
        brewStation.classList.add('brewed');

    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}


window.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    }


    if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    }

    if (key === 'Enter' || key === '=') {
        event.preventDefault(); 
        calculate();
    }

    if (key === 'Backspace') {
        deleteLast();
    }

    if (key === 'Escape') {
        clearDisplay();
    }
});