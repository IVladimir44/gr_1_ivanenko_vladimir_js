// exercise #1
function get_count_work_days(date1, date2) {
    date1 = new Date('08/10/2021'),
        date2 = new Date('01/01/2022');
    let count = 0,
        curDate = date1;
    while (curDate <= date2) {
        let dayOfWeek = curDate.getDay();
        if (!((dayOfWeek == 0) || (dayOfWeek == 6)))
            count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    alert(`Количество рабочих дней ${count}`);
    return count;
}
console.log(get_count_work_days());
//exercise #2
function get_count_days(date) {
    if (date != null) {
        dateFixed = new Date(date);
    } else dateFixed = new Date();
    newYear = new Date(2022, 0, 1);
    return alert((daysLeft = 'До Нового Года осталось ' + Math.floor((newYear - dateFixed) / (1000 * 60 * 60 * 24)) + ' дней'));
}
console.log(get_count_days());

//exercise #3
let date = new Date();
function get_day(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return alert(days[date.getDay()]);
}
get_day(date);
