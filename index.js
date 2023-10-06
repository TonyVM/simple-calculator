let currentInput = '';
let isDarkMode = false;
let prevKey = ''
let flag = false
const operators = ['+','-','/','*'];

function appendToDisplay(value) {
    if (flag == false) {
        currentInput += value;
        document.getElementById('display').value = currentInput;
    } else {
        if (operators.includes(value)) {
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
    document.getElementById('display').value = '';
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

function toggleDarkMode() {
    const calculator = document.querySelector('.calculator');
    const darkModeBtn = document.getElementById('darkModeBtn');
    //#region 
    // if (isDarkMode) {
    //     calculator.style.backgroundColor = '#fff';
    //     colorModeBtn.setAttribute("class", "dark-mode-button");
    //     colorModeBtn.innerText = 'Dark Mode';               
    // } else {
    //     calculator.style.backgroundColor = '#333';
    //     colorModeBtn.setAttribute("class", "light-mode-button");
    //     colorModeBtn.innerText = 'Light Mode'; 
    // }
    //#endregion
    if (isDarkMode) {
        calculator.style.backgroundColor = '#fff';
        darkModeBtn.textContent = 'Dark';
        darkModeBtn.classList.remove('light-mode');
    } else {
        calculator.style.backgroundColor = '#333';
        darkModeBtn.innerText = 'Light';
        darkModeBtn.classList.add('light-mode');
    }

    isDarkMode = !isDarkMode;
}

function toggleDarkMode2() {
    const calculator = document.querySelector('.calculator');
    const darkM = document.getElementById('darkM');
    const lightM = document.getElementById('lightM');

    //#region 
    // if (isDarkMode) {
    //     calculator.style.backgroundColor = '#fff';
    //     colorModeBtn.setAttribute("class", "dark-mode-button");
    //     colorModeBtn.innerText = 'Dark Mode';               
    // } else {
    //     calculator.style.backgroundColor = '#333';
    //     colorModeBtn.setAttribute("class", "light-mode-button");
    //     colorModeBtn.innerText = 'Light Mode'; 
    // }
    //#endregion
    if (isDarkMode) {
        calculator.style.backgroundColor = '#fff';
        darkM.textContent = 'dark_mode'
    } else {
        calculator.style.backgroundColor = '#333';
        darkM.textContent = 'light_mode'
    }

    isDarkMode = !isDarkMode;
}

// Add event listeners for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        if (prevKey === 'Enter') {
            currentInput = '';
            prevKey = ''
        }      
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
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

// let currentInput = '';
// let isDarkMode = false;

// function appendToDisplay(value) {
//     currentInput += value;
//     document.getElementById('display').value = currentInput;
// }

// function clearDisplay() {
//     currentInput = '';
//     document.getElementById('display').value = '';
// }

// function calculate() {
//     try {
//         currentInput = eval(currentInput).toString();
//         document.getElementById('display').value = currentInput;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }

// function toggleDarkMode() {
//     const calculator = document.querySelector('.calculator');
    
//     if (isDarkMode) {
//         calculator.style.backgroundColor = '#fff';
//     } else {
//         calculator.style.backgroundColor = '#333';
//     }
    
//     isDarkMode = !isDarkMode;
// }
