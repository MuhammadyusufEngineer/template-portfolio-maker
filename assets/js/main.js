// owl carousel
const cards = document.querySelector('.card-container')
const card = document.querySelectorAll('.card-container .card')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
let idx = 0

function owlCarousel() {
    if (idx > card.length - 1) idx = 0
    else if (idx < 0) idx = card.length - 1
    if(window.innerWidth <= 767) {
        cards.style.transform = `translateX(${-idx * (card[0].offsetWidth + 20)}px)`
    }
    if(window.innerWidth > 767){
        cards.style.transform = `translateX(${-idx * 486}px)`
    }
}


prevBtn.onclick = () => {
    idx--
    owlCarousel()
}

nextBtn.onclick = () => {
    idx++
    owlCarousel()
}

// Swipe owl carousel on touchscreen

cards.addEventListener('touchstart', handleTouchStart, false)
cards.addEventListener('touchmove', handleTouchMove, false)

let x1 = null
let y1 = null

function handleTouchStart(e) {
    const firstTouch = e.touches[0]
    x1 = firstTouch.clientX
    y1 = firstTouch.clientY
}

function handleTouchMove(e) {
    if (!x1 || !y1) {
        return false
    }
    let x2 = e.touches[0].clientX
    let y2 = e.touches[0].clientY
    let xDiff = x2 - x1
    let yDiff = y2 - y1

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (idx >= card.length - 1) idx = 0
        else if (idx <= 0) idx = card.length - 1
        if (xDiff > 0) {
            idx--
            cards.style.transform = `translateX(${-idx * (card[0].offsetWidth + 20)}px)`
        }
        if(xDiff < 0) {
            idx++
            cards.style.transform = `translateX(${-idx * (card[0].offsetWidth + 20)}px)`
        }
    }
    else return

    x1 = null
    y1 = null
}



// testimonial tab

let testimonialContainer = document.querySelector('.testimonial-container')
const testimonialCards = document.querySelectorAll('.testimonial-card')
const testimonialBtn = document.querySelectorAll('.btn2')
let cardHeight;

testimonialBtn.forEach((button) => {
    button.onclick = () => {
        testimonialCards.forEach((card) => {
            card.classList.toggle('active');
        })
    }
})

// Accordions
const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
})
