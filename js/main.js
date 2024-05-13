let hours = +prompt("Введіть кількість годин", 3);
let seconds = second(hours);

function second(hours) {
    return hours * 3600;
}

alert(`${seconds} секунд в ${hours} годинах`);