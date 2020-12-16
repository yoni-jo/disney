'use strict';

const eventMenu = document.querySelector(".event_tabmenu")
let current=document.querySelector(".click");

function change(e){

    if(current){
        current.classList.remove("click");
    }
    
    e.target.classList.add("click")
    current=e.target;

    
}
eventMenu.addEventListener('click',change)