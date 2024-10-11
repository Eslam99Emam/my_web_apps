const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const dateo = document.getElementById("day");
const montoy = document.getElementById("month");
const yearr = document.getElementById("year");
const weeky = document.getElementById("weekday");


function updateClock() {
    let dd = new Date().getDate();
    let mth = new Date().getMonth();
    let yr = new Date().getFullYear();
    let wd = new Date().getDay();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    switch (wd) {
        case (1): wd = "Mon"
            break;
        case (2): wd = "Tue"
            break;
        case (3): wd = "Wed"
            break;
        case (4): wd = "Thr"
            break;
        case (5): wd = "Fri"
            break;
        case (6): wd = "Sat"
            break;
        case (0): wd = "Sun"
            break;
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    dateo.innerText = dd;
    montoy.innerText = mth + 1;
    yearr.innerText = yr;
    weeky.innerText = wd;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();

const cont1 = document.getElementById("contOwrd");
const sentences = ["I love Bayern", "I love Sky", "I love Red"]
let sentind = 0;
let sentchar = 0;

function Update_sent() {
    sentchar++
    cont1.innerHTML = `
    <h1>${sentences[sentind].slice(0, sentchar)}</h1>
    `
    if (sentchar === sentences[sentind].length) {
        sentind++;
        sentchar = 0;
    }
    if (sentind === sentences.length) {
        sentind = 0;
    }
    setTimeout(Update_sent, 300);
}
Update_sent();

window.onscroll = function () {
    let s = (scrollY - 657) / 656;
    document.getElementById('Main').style.opacity = -s;
    document.getElementById('Main').style.backgroundSize = (150 + (s * 10)) + "%";
    document.getElementById('Main').style.background;
}