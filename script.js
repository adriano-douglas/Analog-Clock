const hour = document.querySelector('.clock .hour'),
      minute = document.querySelector('.clock .minute'),
      second = document.querySelector('.clock .second'),
      
      digital_hour = document.querySelector('.digital-clock .digital-hour'),
      digital_minute = document.querySelector('.digital-clock .digital-minute'),
      digital_second = document.querySelector('.digital-clock .digital-second');

setInterval(() => {
    let hours = new Date();

    let h = hours.getHours(),
        m = hours.getMinutes(),
        s = hours.getSeconds();

    digital_hour.innerText = h < 10 ? '0' + h : h;
    digital_minute.innerText = m < 10 ? '0' + m : m;
    digital_second.innerText = s < 10 ? '0' + s : s;

    h = h <= 12 ? h : h - 12;

    hour.style.setProperty('--degHour', `${30 * h +  0.5 * m}deg`);
    minute.style.setProperty('--degMinute', `${6 * m + 0.1 * s}deg`);
    second.style.setProperty('--degSecond', `${6 * s}deg`);

}, 1000);