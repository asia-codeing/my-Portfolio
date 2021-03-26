document.querySelector(".section").classList.remove("hide");
document.querySelector(".section").classList.add("active");

//----Nav menu---
(() =>{
   const hamburgerBtn = document.querySelector(".hamburger-btn");
   const navMenu = document.querySelector(".nav-menu");
   const closeNavMenu = document.querySelector(".close-nav-menu");
   hamburgerBtn.addEventListener("click", showMenu);
   closeNavMenu.addEventListener("click", closeMenu);
   
   //----Function to open the nav menu-----
   function showMenu(){
    navMenu.classList.add("open");
   }

   //----Function to close the nav menu-----
   function closeMenu(){
    navMenu.classList.remove("open");
  }
  
  //-----Targeting the sections inthe nav menu---
  document.addEventListener("click",(event) =>{
      if(event.target.classList.contains("link")){
         if(event.target.hash !== ""){
             event.preventDefault();
             //-----Getting the section Id---
             const hashId =event.target.hash;
             
             document.querySelector(".section.active").classList.add("hide");
             document.querySelector(".section.active").classList.remove("active");

             document.querySelector(hashId).classList.add("active");
             document.querySelector(hashId).classList.remove("hide");

             navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
             navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
             event.target.classList.add("active", "inner-shadow");
             event.target.classList.remove("outer-shadow", "hover-in-shadow");
             closeMenu();
             window.location.hash = hashId;
         } 
      }
  })
})();

//----Hidding all sections except the active
(() =>{
    const sections  = document.querySelectorAll(".section");
    sections.forEach((section) =>{
    if(!section.classList.contains("active")){
        section.classList.add("hide");
    }
  })
})();