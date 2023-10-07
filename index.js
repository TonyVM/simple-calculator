let currentInput = '';
let isDarkMode = false;
let prevKey = ''
let flag = false
const operators = ['+', '-', '/', '*'];

function appendToDisplay(value) {
    if (flag == false) {
        currentInput += value;
        document.getElementById('display').value = currentInput;
    } else {
        if (operators.includes(value)) {
            prevKey = ''
            currentInput += value;
            document.getElementById('display').value = currentInput;
        } else {
            currentInput = value;
            document.getElementById('display').value = currentInput;
        }
        flag = false
    }
}

function clearDisplay() {
    currentInput = '';
    prevKey = '';
    document.getElementById('display').value = '';
    document.getElementById('cleaner').blur()
}

function calculate() {
    try {

        if (operators.includes(currentInput.at(currentInput.length - 1))) {
            currentInput += currentInput.at(currentInput.length - 2)
        }
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
        prevKey = 'Enter';
        flag = true
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = ''
    }
}

function toggleDarkMode2() {
    const calculator = document.querySelector('.calculator');
    const dark_light_switcher = document.getElementById('mode_switcher');

    if (isDarkMode) {
        calculator.classList.remove('calculator_dark_mode')
        dark_light_switcher.textContent = 'dark_mode';
    } else {
        calculator.classList.add('calculator_dark_mode')
        dark_light_switcher.textContent = 'light_mode';
    }

    isDarkMode = !isDarkMode;
}

// Add event listeners for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        if (prevKey === 'Enter') {
            currentInput = key;
            appendToDisplay(key);
            prevKey = '';
        } else {
            appendToDisplay(key);
        }
    } else if (key === '.' && currentInput.at(currentInput.length - 1) != '.') {
        appendToDisplay(key);
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Delete' || key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        document.getElementById('display').value = currentInput;
    }
});