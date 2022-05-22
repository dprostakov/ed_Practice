const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

function activeSlide(n) {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

function activeDot(n) {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

function prepareCurrentSlide(n) {
    activeSlide(n);
    activeDot(n);
};

function nextSlide() {
    if(index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

function prevSlide() {
    if(index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach(function(item, indexDot) {
    item.addEventListener('click', function() {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide, 2500);