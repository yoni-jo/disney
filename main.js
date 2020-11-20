'use strict';

// 스크롤시 section안에 백그라운드 이미지위치값이 변경
function scroll() {


// section 배열로 하나씩 저장


    const sectionsList = new Array();
    let section = document.querySelectorAll('section')
    const n = 50;
    
    
    section.forEach((sections) => {


        sectionsList.push(sections)
    
    })
    


    let num = window.scrollY;

    let first = 50 - num - 30;
    let second = first + num - 20;
    let third = second + (num / 10) - 40;
    const header = document.querySelector("header")



    // 스크롤이 헤더높이값과 같거나 클경우 
    if (window.scrollY >= header.offsetHeight) {

        sectionsList[0].style.backgroundPosition = `50% ${first}px`;


        sectionsList[1].style.backgroundPosition = `50% ${second}px`;


        sectionsList[2].style.backgroundPosition = `50% ${third}px`;


    //스크롤시 헤더높이값보다 작을경우 초기값 유지하게 설정
    } else if (window.scrollY <= header.offsetHeight) {
        sectionsList[0].style.backgroundPosition = `50% 50px`;


        sectionsList[1].style.backgroundPosition = `50% 50px`;


        sectionsList[2].style.backgroundPosition = `50% 50px`;

    };

}
window.addEventListener('scroll', scroll)

