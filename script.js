
const provoBtn = document.querySelector('#provo-btn');
const rifilloBtn = document.querySelector('#rifillo-btn');
const inputi = document.querySelector('#numri');
const tekstiProvo = document.querySelector('teksti-provo');
const historiaNumrave = document.querySelector('historia-numrave');


let numriRendomte = Math.ceil(Math.random() * 100);
let historia = [];
let numriPerdoruesit = 0;


provoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    numriPerdoruesit = +inputi.value;
    historia.push(numriPerdoruesit)
    historiaNumrave.innerText=historia;
    
})

rifilloBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("rifillo")
})
