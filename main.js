
window.onscroll=()=>{
    if(window.scrollY > 100) {
        document.querySelector('header').classList.add('active');

    }else{
        document.querySelector('header').classList.remove('active');
    }
}

// Show navbar

let bars = document.querySelector('#bars');
let nav = document.querySelector('.navbar');
let close = document.querySelector('.close');

bars.addEventListener('click',()=>{
    nav.classList.add('active')
})
close.addEventListener('click',()=>{
    nav.classList.remove('active')
})

// dark mode

let dark = document.querySelector('#dark');

dark.addEventListener('click',()=>{
    dark.classList.toggle('fa-sun');
    if(dark.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
})


var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});



// Featured  Section


document.querySelectorAll('.small-image-1').forEach(image=>{
    image.addEventListener('click',()=>{
        document.querySelector('.big-image-1').src=image.getAttribute('src');
    })
})

document.querySelectorAll('.small-image-2').forEach(image=>{
    image.addEventListener('click',()=>{
        document.querySelector('.big-image-2').src=image.getAttribute('src');
    })
})

document.querySelectorAll('.small-image-3').forEach(image=>{
    image.addEventListener('click',()=>{
        document.querySelector('.big-image-3').src=image.getAttribute('src');
    })
})


// deal section

let countDate = new Date('oct 7, 2021 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
	gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
	let h = Math.floor((gap % (days)) / (hours));
	let m = Math.floor((gap % (hours)) / (minutes));
	let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown()
},1000);


// review slider 

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});