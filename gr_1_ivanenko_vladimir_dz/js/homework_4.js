//задание #1
const _arr = [8, 1, -3, -12];

function get_min(arr) {
    const min = Math.min(..._arr);
    return min;
}
console.log(get_min());

//задание #2
let minArr = 500;
let maxArr = 888;
let arr = [];

for (let i = minArr; i <= maxArr; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}
console.log(arr)

//задание #3
function reverseStr(str) {
    return str.split('').reverse().join('');
}
alert(reverseStr('word'));

