const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide-img');
const totalSlides = slides.length;
let currentIndex = 0;

document.getElementById("arrow-left").addEventListener("click", pushLeft)
function pushLeft() {
    uptadeCarousel()
    coloring()
}
document.getElementById("arrow-right").addEventListener("click", getRight)
function getRight() {
    uptadeCarouselForRight()
    coloring()
}
function uptadeCarousel() {
    currentIndex--
    if (currentIndex < 0) { //eger currentIndex <0 olsa en axirinci sekile getsin
        currentIndex = totalSlides - 1
    }
    slideContainer.style.transform = `translateX(${currentIndex * -100}%)`
}
function uptadeCarouselForRight() {
    currentIndex++
    if (currentIndex >= totalSlides) { // eger currentIndex slidein sonuncu sekiline catsa bu zaman en birinci sekile getsin
        currentIndex = 0;
    }
    slideContainer.style.transform = `translateX(${currentIndex * -100}%)`
}

