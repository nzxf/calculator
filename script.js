
//add
const add = function (x, y) {
    return x + y;
};
//substract
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
const operate = function (operator, x, y) {
    return operator(x, y);
};

//display
const display = document.querySelector('#display');

//input digit
let inputDigit = []
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', function () {
    inputDigit.push(digit.value)
    // console.log(inputDigit)
    display.innerText = inputDigit.join('')
}
))

//input operator
let inputOperator = ''
let board = []
const operators = document.querySelectorAll('#operator-container button')
operators.forEach(operator => operator.addEventListener('click', function () {
    board.push(inputDigit.join(''))
    inputDigit = []
    inputOperator = operator.value
    // console.log(inputOperator)
}))

//clear
const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', function () {
    display.innerText = ''
    inputDigit = []
    board = []
})

//equal
const equalButton = document.querySelector('#equal-button')
equalButton.addEventListener('click', function () {
    board.push(inputDigit.join(''))
    inputDigit = []
    // console.log(board)
    // console.log(board[0] + inputOperator + board[1])
    switch (inputOperator) {
        case "add":
            // console.log(add(parseInt(board[0]), parseInt(board[1])))
            display.innerText = add(parseInt(board[0]), parseInt(board[1]))
            break;
        case "subtract":
            // console.log(subtract(parseInt(board[0]), parseInt(board[1])))
            display.innerText = subtract(parseInt(board[0]), parseInt(board[1]))
            break;
        case "multiply":
            // console.log(multiply(parseInt(board[0]), parseInt(board[1])))
            display.innerText = multiply(parseInt(board[0]), parseInt(board[1]))
            break;
        case "divide":
            // console.log(divide(parseInt(board[0]), parseInt(board[1])))
            display.innerText = divide(parseInt(board[0]), parseInt(board[1]))
            break;
    }
})