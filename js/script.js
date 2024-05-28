const signUpBtn = document.querySelectorAll(".signBtn")
const closeBtnModal = document.querySelector(".modalSignUp__closeBtn")

function translateElemnts(){
    const allImgs = document.querySelectorAll(".herocontent__leftside--managers--imgs img")
    allImgs.forEach((item,index)=>{
        if(index !==0 ) {
            item.style.transform=(`translateX(${-10*(index)}px)`)
        }
    })
}
translateElemnts()

const swiper = new Swiper(".testmonial__swiper .swiper", {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 5,
    speed: 500,
  
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      994: {
        slidesPerView: 3,
        
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //scrollnavbar

function scrollingNavBar(scrolling) {
  

  if (scrolling > 50) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
}
window.onscroll =()=>{
  scrollingNavBar(window.scrollY)
}

function clickHamburg(){
  const hamBurgBtn = document.querySelector(".habmurgMenu")
  let show = false
  hamBurgBtn.addEventListener('click',()=>{
    if(!show){
      document.body.classList.add('sliding')
      show = true
    }else {
      document.body.classList.remove('sliding')
      show = false
    }
  })
}
clickHamburg()

//fire modal 

function fireModal(btn,closeBtn,classModal){
  

  btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      e.preventDefault()
      document.body.classList.add(classModal)
     
    })
  })

 
  closeBtn.addEventListener('click',()=>{
    document.body.classList.remove(classModal)
    
  })
}

fireModal(signUpBtn,closeBtnModal,"modalOpen")