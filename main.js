'use strict';
const sectionsList = new Array();
let section = document.querySelectorAll('section')

const n = 50;
section.forEach((sections) => {


    sectionsList.push(sections)

})

// 스크롤시 section안에 백그라운드 이미지위치값이 변경


function scroll() {
    let num = window.scrollY;

    let first = 50 - num -30;
    let second = first+num-20 ;
    let third = second+(num/10)-40
    const header = document.querySelector("header")

    //sectionsList.forEach((sectionsLists) => {

        if (window.scrollY >= header.offsetHeight) {
            
            sectionsList[0].style.backgroundPosition = `50% ${first}px`;
            
                
             sectionsList[1].style.backgroundPosition = `50% ${second}px`;
           
            
              sectionsList[2].style.backgroundPosition = `50% ${third}px`;

         

        }else if(window.scrollY< header.offsetHeight){
            sectionsList[0].style.backgroundPosition = `50% 50px`;
            
                
            sectionsList[1].style.backgroundPosition = `50% 50px`;
          
           
             sectionsList[2].style.backgroundPosition = `50% 50px`;

        }
       ;
 
}
window.addEventListener('scroll', scroll)