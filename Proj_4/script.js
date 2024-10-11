const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
let imgs = ["IMgs/felix-rottmann-g6aiOWGoc5s-unsplash.jpg",
              "IMgs/marek-piwnicki-DCbcTSiioYM-unsplash.jpg",
              "IMgs/marek-piwnicki-o6AzV6ZstPo-unsplash.jpg",
              "IMgs/priscilla-du-preez-XY9tbPYhR34-unsplash.jpg"];
let imgsused = ["IMgs/colin-watts-tK7Itp99R6M-unsplash.jpg", "IMgs/daniel-sessler-mhGXpkMsdAU-unsplash.jpg"];
const f1 = document.getElementById("one");
const f2 = document.getElementById("two");

function bg() {
    let rnd = Math.floor(Math.random() * imgs.length)
    // setTimeout(() => {
        // f1.style.opacity = 0;
        f1.style.zIndex = 1;
    // }, 1000);
    setTimeout(() => {
        f2.style.zIndex = 2;
        f1.src = imgs[rnd]
        if (imgs.length <= 1) {
            rnd = Math.floor(Math.random() * imgsused.length)
            f1.src = imgsused[rnd];
            // console.log(rnd, imgsused[rnd], `imgs are [${imgs}]\n`, `imgsused are [${imgsused}]`);
            imgs = imgs.concat(imgsused)
            imgsused.length = 0
        } else {
            rnd = Math.floor(Math.random() * imgs.length)
            f1.src = imgs[rnd];
            // console.log(rnd, imgs[rnd], `imgs are [${imgs}]\n`, `imgsused are [${imgsused}]`);
            imgsused.unshift(imgs.shift(rnd))
        }
    }, 1000);
    // setTimeout(() => {
        // f1.style.opacity = 1;
        // f2.style.zIndex = 0;
    // }, 1000);
    // setTimeout(() => {
        // f2.style.opacity = 0;
    // }, 1000);
    setTimeout(() => {
        f1.style.zIndex = 2;
        console.log(f1.style.zIndex);
        f2.style.zIndex = 1;
        console.log(f2.style.zIndex);
        f2.src = imgs[rnd]
        if (imgs.length <= 1) {
            rnd = Math.floor(Math.random() * imgsused.length)
            f2.src = imgsused[rnd];
            // console.log(rnd, imgsused[rnd], `imgs are [${imgs}]\n`, `imgsused are [${imgsused}]`);
            imgs = imgs.concat(imgsused)
            imgsused.length = 0
        } else {
            rnd = Math.floor(Math.random() * imgs.length)
            f2.src = imgs[rnd];
            // console.log(rnd, imgs[rnd], typeof imgs, `imgs are [${imgs}]\n`, `imgsused are [${imgsused}]`);
            imgsused.push(imgs.pop(rnd))
        }
    }, 1000);
    setTimeout(() => {
        f2.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
        bg();
    }, 1000);
}
setTimeout(() => {
    bg();
}, 1000);

function updateClock() {
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

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();

