const slides = document.querySelector(".slides");

const images = document.querySelectorAll(".slides img");

const previous = document.querySelector(".previous");

const next = document.querySelector(".next");

const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;

function createDots(){

    images.forEach((image,index)=>{

        const dot=document.createElement("span");

        dot.classList.add("dot");

        if(index===0){

            dot.classList.add("active");

        }

        dot.addEventListener("click",()=>{

            currentSlide=index;

            updateSlider();

        });

        dotsContainer.appendChild(dot);

    });

}

function updateDots(){

    const dots=document.querySelectorAll(".dot");

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[currentSlide].classList.add("active");

}

function updateSlider(){

    slides.style.transform=`translateX(-${currentSlide*100}%)`;

    updateDots();

}

next.addEventListener("click",()=>{

    currentSlide++;

    if(currentSlide>=images.length){

        currentSlide=0;

    }

    updateSlider();

});

previous.addEventListener("click",()=>{

    currentSlide--;

    if(currentSlide<0){

        currentSlide=images.length-1;

    }

    updateSlider();

});

createDots();