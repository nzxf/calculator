//add
const add = function (x, y) {
    return x + y;
};
//subtract
const subtract = function (x, y) {
    return x - y;
};
//multiply
const multiply = function (x, y) {
    return x * y;
};
//divide
const divide = function (x, y) {
    return x / y;
};
//operate
const operate = function (x, oprtr, y) {
    switch (oprtr) {
        case "+":
            return add(x, y)
        case "-":
            return subtract(x, y)
        case "x":
            return multiply(x, y)
        case ":":
            return divide(x, y)
        default:
            display.innerText = 'help'
    };
}

//display
const display = document.querySelector('#display')
display.innerText = ""
let board = [] //for one time process

//clear
const clear = function () {
    display.innerText = ""
    inputDigits = []
    board = []
}
//clear button
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clear)

//input: digit
let inputDigits = [] //for each digit input
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', function () {
    inputDigits.push(digit.value)
    // console.log(digit.value);
    console.log(inputDigits);
    display.innerText = inputDigits.join('')
}))

//input: operator
const operators = document.querySelectorAll('#operator-container button');
operators.forEach(operator => operator.addEventListener('click', function () {
    board.push(inputDigits.join(''))
    if (board[0] === '') {
        console.log('wrong input, resetting')
        clear()
    }
    else if (board.length === 3) {
        result = operate(parseInt(board[0]), board[1], parseInt(board[2]))
        console.log(`${board[0]} ${board[1]} ${board[2]} = ${result}`)
        display.innerText = result
        board = [result]
        board.push(operator.value)
        inputDigits = []
    } else {
        board.push(operator.value)
        inputDigits = []
        console.log(operator.value);
    }
}))

//equal (enter)
const equal = document.querySelector('#equal')
equal.addEventListener('click', function () {
    board.push(inputDigits.join(''))
    if (board.length < 2 || board[2] === '') {
        console.log('wrong input, resetting')
        clear()
    } else {
        let result = operate(parseInt(board[0]), board[1], parseInt(board[2]))
        console.log(`${board[0]} ${board[1]} ${board[2]} = ${result}`)
        display.innerText = result
        board = []
        inputDigits = []
    }
})