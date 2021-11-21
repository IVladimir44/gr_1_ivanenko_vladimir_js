//exercise #1
let km = prompt('сколько км проехала машина?');
let d = prompt('какой диаметр колеса в дюймах?');
let namberOfWheels = prompt('сколько колёс у машины?');

km = (km * 39370.1)
let wheel = (km / (d * 3.14))
let wheels = (namberOfWheels * wheel)

wheel = alert('одно колесо сделало ' + wheel + ' оборотов');
wheels = alert(namberOfWheels + ' колёс сделали ' + wheels + ' оборотов');


//exercise #2
let days = prompt('введите число ');
let lastNumer = (days % 10);


if (lastNumer == 1) {
    alert(days + ' день')
}
if ((lastNumer == 2) || (lastNumer == 3) || (lastNumer == 4)) {
    alert(days + ' дня')
}
if ((lastNumer) || (lastNumer === 0)) {
    alert(days + ' дней')
}