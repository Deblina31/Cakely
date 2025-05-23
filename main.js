const navMenu= document.getElementById("nav-menu"),
navToggle= document.getElementById("nav-toggle"),
navClose=document.getElementById("nav_close")
//menu show
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add("show-menu")
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove("show-menu")
    })
}
const navLink=document.querySelectorAll(".socials")
const linkAction=()=>{
    const navMenu=document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

const shadowHeader=()=>{
    const header= document.getElementById("header")
    this.scrollY >=50? header.classList.add("shadow-header"):header.classList.remove("shadow-header")

}
window.addEventListener('scroll',shadowHeader)
const swiper = new Swiper('.favswiper', {
    loop: true,
    grabCursor:true,
    slidesPerView:"auto",
    centeredSlides:"auto"
  });
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >=350? scrollUp.classList.add("show-scroll")
    :scrollUp.classList.remove("show-scroll")
}
window.addEventListener('scroll', scrollUp)

const scrollActive=()=>{
    const scrollDown=window.scrollY

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId=current.getAttribute('id'),
            sectionsClass= document.querySelector('.nav-menu a[href*='+
                sectionId+']')
        if(scrollDown>sectionTop && scrollDown<=
            sectionTop+sectionHeight){
                sectionsClass.classList.add('active-link')
            }
            else{
            sectionsClass.classList.remove('active-link')}
        
    })
}
const sections=document.querySelectorAll("section[id]")
window.addEventListener('scroll', scrollActive)