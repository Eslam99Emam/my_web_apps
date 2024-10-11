let conts = document.querySelector("#conti");
let nexto = document.querySelector("#nexto");
let previ = document.querySelector("#previ");
let last = conts.lastElementChild;
let fist = conts.firstElementChild;

const callback = (array) => {
    array.forEach(card => {
        if(card.isIntersecting){
            populateCards(6)
            observer.unobserve(last)
            last = document.querySelector('#conti').lastElementChild
            observer.observe(last)
        }
    })
}

const populateCards = (num) => {
    for(let i = 0; i < num; i++){
        const div = document.createElement('div')
        div.innerHTML = `<div class="card bg-primary">
        <img src="./images/sample${(i%3)+1}.jpg" alt="" class="card-img-top">
        <div class="card-body">
            <h1 class="card-title text-center">Game${i+1}</h1>
            <h3 class="card-text text-center">Lorem ipsum dolor, sit amet.</h3>
        </div>
        <a href="./index.htm" class="card-footer text-center">send</a>
    </div>`
        conts.appendChild(div);
    }
}

let observer = new IntersectionObserver(callback)
observer.observe(last);


nexto.addEventListener("click", (event)=>{
    conts.scrollBy(400, 0);
})
previ.addEventListener("click", (event)=>{
    if (conts.scrollLeft == 0){
    }else{    
    conts.scrollBy(-400, 0);
}
})