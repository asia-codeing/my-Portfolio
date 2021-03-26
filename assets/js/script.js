//----Nav menu---
(() =>{
   const hamburgerBtn = document.querySelector(".hamburger-btn");
   const navMenu = document.querySelector(".nav-menu");
   const closeNavMenu = document.querySelector(".close-nav-menu");
   hamburgerBtn.addEventListener("click", showMenu);
   closeNavMenu.addEventListener("click", closeMenu);

   function showMenu(){
    navMenu.classList.add("open");
   }
   function closeMenu(){
    navMenu.classList.remove("open");
  }

  document.addEventListener("click",(event) =>{
      if(event.target.classList.contains("link")){
         if(event.target.hash !== ""){
             event.preventDefault();
             const hashId =event.target.hash;
             console.log(hashId);
         } 
      }else{
       
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