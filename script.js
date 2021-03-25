let cards = document.querySelectorAll('.card');
let flex = document.querySelector('.flex');
let images = Array.from(document.querySelectorAll('.image'));
flex.addEventListener('mouseout', () => {
    images.forEach(image => {
        image.style.filter = ``
    })
})
cards.forEach((card, i) => {
    card.addEventListener('mouseover', () => {
        console.log(images[i], i)
        images.forEach(image => {
            if (image === images[i]) {
                image.style.filter = `brightness(105%) contrast(105%)`
                return 
            } else {
                image.style.filter = `brightness(80%) contrast(80%) blur(1px)`
            }
        })
    })
})