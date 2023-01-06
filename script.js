
const hamburguer = document.querySelectorAll(".hamburguer")
const hamburguersoluções = document.querySelectorAll(".hamburguer-soluções")
const navMenu = document.querySelector(".nav-menu")
const navsoluções = document.querySelector(".nav-soluções")

hamburguer.forEach(hamburguer => {
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
}); 
}); 

hamburguersoluções.forEach(hamburguersoluções => {
    hamburguersoluções.addEventListener("click", () => {
        hamburguersoluções.classList.toggle('active')
        navsoluções.classList.toggle('active')
    }); 
    }); 