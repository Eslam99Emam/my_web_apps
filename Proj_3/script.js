let uphead = document.getElementById('aft');
let backchange = document.getElementById('afts');
let head = document.querySelector('header');
let undhead = document.getElementById('undo');
let mainn = document.getElementById('main');

// let sX = event.screenX;
// let sY = event.screenY;

uphead.onclick = function () {
    head.style.top = '-125px';
}

undhead.onclick = function () {
    head.style.top = '0px';
}
function getRan(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let r = 0;
let g = 0;
let b = 0;
mainn.addEventListener('mousemove', function (event) {
    let mousx = event.pageX;
    let mousy = event.pageY;
    backchange.style.display = 'inline';
    backchange.style.position = 'absolute';
    backchange.style.top = mousy - 20 + 'px';
    backchange.style.left = mousx - 20 + 'px';
    backchange.style.background = '#fff';
    backchange.style.width = '50px';
    backchange.style.height = '50px';
    backchange.style.backdropFilter = 'blur(10px)';
    backchange.style.borderRadius = '50%';
    backchange.style.boxShadow = '#fa0 0px 0px 30px 30px';
});

let lesons = document.getElementById('less');
let leson = document.querySelector('#accs')
let lesonpro = document.querySelector('#probabiity');
let lesonpre = document.querySelector('#prediction');
let lesonind = document.querySelector('#independancy_conditions');
let again = document.querySelector('#back');


lesonpro.onclick = function () {
    lesons.outerHTML = `<select name="" id="less">
                <option value="" hidden selected>Choose the probabiity needed ...</option>
                <option value="">A &cap; B</option>
                <option value="">A &cap; B\`</option>
                <option value="">A &cup; B</option>
                <option value="">A &cup; B\`</option>
                <option value="">A\` &cap; B</option>
                <option value="">A\` &cap; B\`</option>
                <option value="">A\` &cup; B</option>
                <option value="">A\` &cup; B\`</option>
                <option value="">B &cap; A</option>
                <option value="">B &cap; A\`</option>
                <option value="">B &cup; A</option>
                <option value="">B &cup; A\`</option>
                <option value="">B\` &cap; A</option>
                <option value="">B\` &cap; A\`</option>
                <option value="">B\` &cup; A\`</option>
                <option value="">B\` &cup; A</option>
                <option value="">A - B</option>
                <option value="">A\` - B</option>
                <option value="">A\` - B\`</option>
                <option value="">B - A</option>
                <option value="">B\` - A</option>
                <option value="">B\` - A\`</option>
            </select >`;
}
lesonpre.onclick = function () {
    lesons.outerHTML = `<form action="" id="less2">
                <input type="number" name="" id="ab" class="ab" required placeholder="&sum;xy">
                <input type="number" name="" id="ab" class="ab" required placeholder="&sum;x">
                <input type="number" name="" id="ab" class="ab" required placeholder="&sum;y">
                <input type="number" name="" id="ab" class="ab" required placeholder="n">
                <input type="Submit" value="Submit" id="ab2">
            </form>`;
    let ab = document.querySelector('#ab2');
    ab.addEventListener('submit', function (e) {
        e.preventDefault();
        // let les = document.querySelector('#less2');
        // les.innerHTML = `
        // <input type="number" name="b" id="" value="${(document.getElementsByClassName('ab')[3] * document.getElementsByClassName('ab')[0] - (document.getElementsByClassName('ab')[1] * document.getElementsByClassName('ab')[2])) / document.getElementsByClassName('ab')[3]}" disabled>
        // <input type="number" name="" id="" value="" disabled>`;
    }
    )
}
lesonind.onclick = function () {
    lesons.outerHTML = `<select name="" id="less">
                <option value="" hidden selected>Choose the probabiity needed ...</option>
                <option value="">A &#x2223; B</option>
                <option value="">A\` &#x2223; B</option >
                <option value="">A\` &#x2223; B\`</option>
                <option value="">B &#x2223; A</option>
                <option value="">B\` &#x2223; A</option>
                <option value="">B\` &#x2223; A\`</option>
            </select > `;
}

again.onclick = function () {
    // lesons.remove();
    // leson.innerHTML = `<div id="less">
    //             <h1>Choose a lesson ...</h1>
    //             <option class="opts" id="probabiity">probabiity</option>
    //             <option class="opts" id="prediction">prediction</option>
    //             <option class="opts" id="independancy_conditions"> independancy & conditions </option>
    //         </div>`;
    location.reload();
}