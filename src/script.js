var miconElement=document.querySelector("#micon")

var navElement=document.querySelector("nav-menu")
miconElement.addEventListener("click",()=>{
    navElement.classList.toggle("left-[0px]")
})
