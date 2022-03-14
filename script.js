const toggleButton = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navBar')[0]
const paragraphs = document.getElementsByClassName('paragraphs')[0]
// const nav = document.getElementsByClassName('navbar-links')[0]

let color = ['lightsteelblue']

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')

})

// function menu() {
//     if ( navbarLinks.classList.toggle('active') ) {
//         paragraphs.style.display = "none"
//     }
//     else {
//         paragraphs.style.display = "inline"
//     }
// }
