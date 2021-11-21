//exercise #1
let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите первое число');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
const segment = [];

if (!isNaN(firstNumber) && !isNaN(secondNumber) && secondNumber > firstNumber) {
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 6 === 0 && i > 0) {
            segment.push(i);
        }
    }
    let sum = 0;

    segment.forEach(number => sum += number);

    alert(`Количество чисел кратных 6 на отрезке = ${segment.length}, сумма чисел кратных 6 на отрезке = ${sum}`);
} else {
    alert('Введённые данные некорректны');
}
//exercise #2
const max_count_attempt = 15;
let min = 0;
let max = 100;
let attempt = 0;
do {
    _number = min + (max - min) / 2;
    let answer = confirm('Ваше число больше числа ' + _number + ' ?')
    attempt++;
    if (answer) {
        min = _number;
    } else {
        max = _number;
    }
    console.log(max, min);
} while ((max - min > 1) || attempt < max_count_attempt);

alert('Ваше число: ' + ~~(max));

