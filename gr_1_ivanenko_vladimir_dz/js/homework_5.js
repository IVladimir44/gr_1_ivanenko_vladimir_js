//задание #1
function get_order(string) {
    return string.split(' ').sort().join(' ');
}
console.log(get_order('ноты акустика гитара'));
// //задание #2
const arr = [5, 3, -2, 6, 9, -11];


const random = Math.floor(Math.random() * arr.length);
console.log(arr[random]);


//задание #3
const _arr = [5, 1, -4, 12];

function get_max(arr) {
    const max = Math.max(..._arr);
    return (max);
}
console.log(get_max());








