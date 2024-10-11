let un = document.getElementById("one");
let deux = document.getElementById("two");
let trois = document.getElementById("three");
let qautre = document.getElementById("four");
let cinq = document.getElementById("five");
let six = document.getElementById("six");
let sept = document.getElementById("seven");
let huit = document.getElementById("eight");
let neuf = document.getElementById("nine");
let zero = document.getElementById("zero");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divide = document.getElementById("divide");
let by = document.getElementById("by");
let ac = document.getElementById("del");
let del = document.getElementById("delt");
let equal = document.getElementById("equal");
let pnt = document.getElementById("point");
let getr = document.getElementById("get");
let setr = document.getElementById("give");

function ads(ss) {
    getr.innerText += ss;
}

function ne(ss) {
    getr.innerText = ss;
}
function dels() {
    if (getr.innerText[0] == "0") {
        getr.innerText[0] = "";
    }
}
function sets() {
    setr.innerText = eval(getr.innerText);
}
function nsets() {
    setr.innerText = "";
}

un.onmousedown = function () {
    dels()
    ads("1")
    sets();
}
deux.onmousedown = function () {
    dels()
    ads("2")
    sets();
}
trois.onmousedown = function () {
    dels()
    ads("3")
    sets();
}
qautre.onmousedown = function () {
    dels()
    ads("4")
    sets();
}
cinq.onmousedown = function () {
    dels()
    ads("5")
    sets();
}
six.onmousedown = function () {
    dels()
    ads("6")
    sets();
}
sept.onmousedown = function () {
    dels()
    ads("7")
    sets();
}
huit.onmousedown = function () {
    dels()
    ads("8")
    sets();
}
neuf.onmousedown = function () {
    dels()
    ads("9")
    sets();
}
zero.onmousedown = function () {
    dels()
    ads("0")
    sets();
}
plus.onmousedown = function () {
    dels()
    ads("+")
    sets();
}
minus.onmousedown = function () {
    dels()
    ads("-")
    sets();
}
divide.onmousedown = function () {
    dels()
    ads("/")
    sets();
}
by.onmousedown = function () {
    dels()
    ads("*")
    sets();
}
pnt.onmousedown = function () {
    dels()
    ads(".")
    sets();
}
ac.onmousedown = function () {
    ne("");
    dels()
    nsets()
}
del.onmousedown = function () {
    ne(Math.floor(getr.innerText / 10));
    sets();
}
equal.onmousedown = function () {
    ne(eval(getr.innerText));
    nsets()
}

window.addEventListener("keypress", function (event) {
    if (event.key = "Enter") {
        ne(eval(getr.innerText));
        nsets()
        dels()
    }
}
)