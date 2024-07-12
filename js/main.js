const navList = document.querySelector('header nav ul')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle('open')
    navList.classList.toggle('open')
})