let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountains1');
let mountain4 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Fixel = document.querySelector('.Fixel');

window.onscroll = function () {
    let val = scrollY;
    stars.style.left = val + 'px';
    moon.style.top = val * 4 + 'px';
    mountain3.style.top = val * 2 + 'px';
    mountain4.style.top = val * 1.5 + 'px';
    river.style.top = val + 'px';
    boat.style.top = val + 'px';
    boat.style.left = val * 4 + 'px';
    Fixel.style.fontSize = val + 'px';
    if (val >= 67) {
        Fixel.style.fontSize = 67 + 'px';
        Fixel.style.position = 'fixed'
        if (val >= 412.7272644042969) {
            Fixel.style.display = 'none';
        } else {
            Fixel.style.display = 'flex';
        }
    }
}