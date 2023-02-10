
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
    console.log(inputDigit)
    display.innerText = inputDigit
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
    console.log(operator.value)
    console.log(inputOperator)
}))

