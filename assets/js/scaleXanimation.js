
let options = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.2
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale')
            entry.target.classList.replace('translate-x-0', 'translate-x-full')
        }
    })
}
let observer = new IntersectionObserver(callback, options)
let fadeElements = document.querySelectorAll('.translate-x-0')
fadeElements.forEach(elem => {
    observer.observe(elem)
})

let content = document.querySelector('.content')
let animatedContent = document.querySelectorAll('.animated-content')

animatedContent.forEach(item => {
    item.style.height = content.offsetHeight + 'px'
})

window.onresize = () => {
    animatedContent.forEach(item => {
        item.style.height = content.offsetHeight + 'px'
    })
}