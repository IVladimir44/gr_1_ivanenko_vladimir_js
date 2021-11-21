function Calcul(title) {

    this.title = title;

    let date = new Date();
    date = `(${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()})`;

    this.history = [];
    console.log(this.history);

    this.historyClear = function () {
        this.history = [];
    }

    this.data_sub = function () {
        this.number1 = +prompt('Из числа:');
        this.number2 = +prompt('Отнимаем:');
    };
    this.sub = function (result) {
        this.history.push({
            Имя: 'Вычитание',
            Дата: date,
            Результат: this.number1 - this.number2,
        })
        result = this.number1 - this.number2;
        return result;

    }

    this.data_div = function () {
        this.number1 = +prompt('Число:');
        this.number2 = +prompt('Делим на:');
    };
    this.div = function (result1) {
        this.history.push({
            Имя: 'Деление',
            Дата: date,
            Результат: this.number1 / this.number2
        })
        result1 = this.number1 / this.number2;
        return result1;
    };

    this.data_add = function () {
        this.number_add = [];
        for (let i = 0; i < 500; i++) {
            let n = +prompt('Слогаемое: ');
            if ((n == '') || (isNaN(n))) {
                break
            } else {
                this.number_add.push(n);
            }
        };
    }
    this.add = function (result2) {
        this.history.push({
            Имя: 'Сложение',
            Дата: date,
            Результат: this.number_add.reduce((a, b) => a + b),
        })
        result2 = this.number_add.reduce((a, b) => a + b);
        return result2;
    };

    this.data_mul = function () {
        this.number_mul = [];
        for (let i = 0; i < 500; i++) {
            let n = +prompt('Множитель: ');
            if ((n == '') || (isNaN(n))) {
                break
            } else {
                this.number_mul.push(n);
            }
        };
    }
    this.mul = function (result3) {
        this.history.push({
            Имя: 'Умножение',
            Дата: date,
            Результат: this.number_mul.reduce((a, b) => a * b)
        })
        result3 = this.number_mul.reduce((a, b) => a * b);
        return result3;
    };
}
const calculator = new Calcul('Калькулятор');
calculator.data_add();
let sum_add = alert('Результат: ' + calculator.add());

calculator.data_sub();
let sum_sub = alert('Результат: ' + calculator.sub());

calculator.data_mul();
let sum_mul = alert('Результат: ' + calculator.mul());

calculator.data_div();
let sum_div = alert('Результат: ' + calculator.div());





