let card1= document.querySelector('.card-1');
let card2= document.querySelector('.card-2');
let card3= document.querySelector('.card-3');

let d1= 0;
let d2= 0;
let d3= 0;

card3.addEventListener('click', ()=>{
    if(d3==0){
        card3.classList.add('animation');
        card3.classList.remove('animation-reverse');
        d3= 1;
        card3.style.zIndex= '0';
    }else{
        card3.classList.remove('animation');
        card3.classList.add('animation-reverse');
        card3.style.zIndex= '2';
        d3=0;
    }
})

card2.addEventListener('click', ()=>{
    if(d2==0){
        card2.classList.add('animation');
        card2.classList.remove('animation-reverse');
        card2.style.zIndex= '1';
        d2= 1;
    }else{
        card2.classList.remove('animation');
        card2.classList.add('animation-reverse');
        card2.style.zIndex= '1';
        d2=0;
    }
})

card1.addEventListener('click', ()=>{
    if(d1==0){
        card1.classList.add('animation');
        card1.classList.remove('animation-reverse');
        d1= 1;
        card1.style.zIndex= '2';
    }else{
        card1.classList.remove('animation');
        card1.classList.add('animation-reverse')
        d1=0;
        card1.style.zIndex= '0';
    }
})