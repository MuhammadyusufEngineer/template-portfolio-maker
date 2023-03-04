
let options = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.2
}
let callback = (entry, observer) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-avatar')
            entry.target.classList.replace('opacity-0','opacity-100')
        }
}
let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelectorAll('.animate-avatar')[0])