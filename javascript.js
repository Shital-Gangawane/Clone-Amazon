let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")



let startslider = 0
let endslider = (imgItem.length - 1) * 100 //700

slideBtnLeft.addEventListener("click",()=>{
    if(startslider < 0){

        startslider = startslider + 100;
       }
        imgItem.forEach(element =>{
            element.style.transform =  `translateX(${startslider}%)`;
        })
    
    
})
slideBtnRight.addEventListener("click",()=>{
  if(startslider >= -endslider+100){
    startslider =startslider - 100;
   }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startslider}%)`;

    })

})


/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")


//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})




//Today’s Deals

const leftbtn = document.querySelector("l-btn");
const rightbtn = document.querySelector("r-btn");

rightbtn.addEventListener('click',function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    
})