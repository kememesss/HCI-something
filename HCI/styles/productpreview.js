document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click',() => {
        document.querySelector("#main").src=img.src
    })
})