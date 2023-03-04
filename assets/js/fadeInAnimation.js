
let options = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.2
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            entry.target.classList.replace('opacity-0','opacity-100')
        }
    })
}
let observer = new IntersectionObserver(callback, options)
let fadeElements = document.querySelectorAll('.opacity-0')
fadeElements.forEach(elem => {
    observer.observe(elem)
})