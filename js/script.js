
let plan;
let savingResult;
let error;
const savingResulInput = document.querySelector(".savingResult");
const errorForm = document.querySelector(".saveTime__estimate--form__error");
const allInputs = document.querySelectorAll(
  ".saveTime__estimate--formTwo--inputGroup--input"
);
const allParent = document.querySelectorAll(
  ".saveTime__estimate--formTwo--inputGroup"
);
const calcButton = document.querySelector(
  ".saveTime__estimate--formTwo button"
);
const signUpBtn = document.querySelectorAll(".signBtn");
const closeBtnModal = document.querySelector(".modalSignUp__closeBtn");

function translateElemnts() {
  const allImgs = document.querySelectorAll(
    ".herocontent__leftside--managers--imgs img"
  );
  allImgs.forEach((item, index) => {
    if (index !== 0) {
      item.style.transform = `translateX(${-10 * index}px)`;
    }
  });
}
translateElemnts();

function swiperCards() {
  const swiperTestmonial = document.querySelector(
    ".testmonial__swiper .swiper"
  );
  if (swiperTestmonial) {
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
  }
}
swiperCards();

//scrollnavbar

function scrollingNavBar(scrolling) {
  if (scrolling > 50) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
}
window.onscroll = () => {
  scrollingNavBar(window.scrollY);
};

function clickHamburg() {
  const hamBurgBtn = document.querySelector(".habmurgMenu");
  let show = false;
  hamBurgBtn.addEventListener("click", () => {
    if (!show) {
      document.body.classList.add("sliding");
      show = true;
    } else {
      document.body.classList.remove("sliding");
      show = false;
    }
  });
}
clickHamburg();

//fire modal

function fireModal(btn, closeBtn, classModal) {
  btn.forEach((item) => {
    if (item) {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.add(classModal);
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.body.classList.remove(classModal);
    });
  }
}

fireModal(signUpBtn, closeBtnModal, "modalOpen");

//Activate class on navbar

function activateClassNavBar() {
  const allLinks = document.querySelectorAll(".navbarDew  >ul >li>a");

  const pathName = window.location.pathname;

  allLinks.forEach((item, index) => {
    // item.classList.add(`${item.getAttribute("href")===pathName?'activelink':'noActive'}`)
    const pureAttribute = item.getAttribute("href").slice(1).toLowerCase();
    const purePathName = pathName.slice(1).toLowerCase();

    if (index < 4) {
      pureAttribute === purePathName
        ? item.classList.add("activelink")
        : item.classList.remove("activelink");
    }
  });
  if (window.location.pathname === "/") {
    document.body.classList.add("home");
  } else {
    document.body.classList.remove("home");
  }
}

activateClassNavBar();
//swiper pricing page

function swiperPricingPage() {
  const swiperPricing = document.querySelector(".pricingPage__swiper .swiper");
  if (swiperPricing) {
    const swiper = new Swiper(".pricingPage__swiper .swiper", {
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
        1200: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
swiperPricingPage();

//toggle Button

function toggleBtns() {
  const fixedPrice = [30, 60, 130, 200];
  const toggleBtns = document.querySelectorAll(
    ".pricingPage__container--toggleBtns button"
  );
  const subscription = document.querySelector(
    ".pricingPage__container--subscription"
  );
  const allPrices = document.querySelectorAll(".cardpricing__price--value");
  function fillPrices(prices) {
    allPrices.forEach((item, index) => {
      item.textContent = prices[index];
    });
  }
  fillPrices(fixedPrice);

  toggleBtns.forEach((item, index) => {
    if (item) {
      item.addEventListener("click", () => {
        for (let i = 0; i < toggleBtns.length; i++) {
          toggleBtns[i].classList.remove("active");
        }
        item.classList.add("active");
        /*
        if (index === 1) {
          subscription.classList.add("animate__animated", "animate__bounce");
        } else {
          subscription.classList.remove("animate__animated", "animate__bounce");
        }
        */
        if (index === 1) {
          const applyDiscount = fixedPrice.map((item) => item - item * 0.2);
          fillPrices(applyDiscount);
        } else {
          fillPrices(fixedPrice);
        }
      });
    }
  });
}
toggleBtns();

//addpricing page class

function addClassPage() {
  const arrayClasses = Array.from(document.body.children).map(
    (item) => item.className
  );

  if (arrayClasses.toString().indexOf("pricingPage") > -1) {
    document.body.classList.add("pricing");
  } else {
    document.body.classList.remove("pricing");
  }
  //document.body.children.map((item)=>console.log(item))
}
addClassPage();
function toggleFrequently() {
  const allCards = document.querySelectorAll(".frequentlyAsk__container--card");
  const allTxt = document.querySelectorAll(".frequentlyAsk__container--card p");

  allCards.forEach((item, index) => {
    if (item) {
      item.addEventListener("click", () => {
        if (allTxt[index].classList.contains("active")) {
          item.classList.remove("active");
          allTxt[index].classList.remove("active");
        } else {
          allTxt[index].classList.add("active");
          item.classList.add("active");
        }
      });
    }
  });
}
toggleFrequently();

//fire select box

if (
  document.querySelector(
    ".saveTime__estimate--formTwo--inputGroup--input.select"
  )
) {
  $(document).ready(function () {
    $(".saveTime__estimate--formTwo--inputGroup--input.select").niceSelect();
  });
}
//scrolling to calculator 

function scrollingCalculator(){
  const saveTimeSection = document.querySelector(".saveTime")
   
  window.scroll({
    top: saveTimeSection.offsetTop,
    
    behavior: "smooth",
  });
}

function getValuePlan() {
  window.addEventListener("load", () => {
    document.querySelectorAll(".list li").forEach((item) => {
      if (item.classList.contains("selected")) {
        plan = +item.getAttribute("data-value");
      }
      //  console.log(item.getAttribute("class","selected"))

      item.addEventListener("click", () => {
        plan = +item.getAttribute("data-value");
      });
    });
  });
  return plan;
}
getValuePlan();

function calculateSaving() {
  let data = {
    livingTraing: false,
    DewdroppersTraining: false,
    staffRate: false,
    noOfStaff: false,
    noOfCamapign: false,
  };

  const keysData = Object.keys(data);
  
  function fillingError(erorrTxt) {
    errorForm.textContent = erorrTxt;
  }
  function activeSavingResult() {
    savingResulInput.classList.add("active");
  }


  allInputs.forEach((item, index) => {
    item.addEventListener("keyup", () => {
      for (let i = 0; i < allInputs.length; i++) {
        if (index === i) {
          if (!isNaN(item.value) && item.value.trim().length !== 0 ) {
            data[keysData[i]] = +item.value;
            allParent[index].classList.add("right");
            allParent[index].classList.remove("wrong");
          } else {
            data[keysData[i]] = false;
            allParent[index].classList.add("wrong");
            allParent[index].classList.remove("right");
          }
        }
      }
      if (data.DewdroppersTraining > 0 &&   data.livingTraing <= data.DewdroppersTraining) {
       
        fillingError(
          "Live Training should be greater than Dewdroppers Training"
        );
      } else {
        fillingError("");
      }

      if (
        data.livingTraing !== false &&
        data.DewdroppersTraining !== false &&
        data.staffRate !== false &&
        data.noOfStaff !== false &&
        data.noOfCamapign !== false &&
        data.livingTraing > data.DewdroppersTraining
      ) {
        error = false;
      } else {
        error = true;
      }
      if (error) {
        calcButton.classList.remove("active");
        calcButton.setAttribute("disabled", true);
        savingResulInput.value = "00000"
      } else {
        calcButton.classList.add("active");
        calcButton.removeAttribute("disabled");
      }
    });
  });
 
  if (calcButton) {
    calcButton.addEventListener("click", () => {
      const slotOne =
        (data.livingTraing - data.DewdroppersTraining) *
        data.staffRate *
        data.noOfStaff *
        data.noOfCamapign;
      if (slotOne < plan) {
        error = true;
        fillingError("Please Review equivalent Plan");
      } else {
        fillingError("");
        const resultCalc = (data.livingTraing - data.DewdroppersTraining) *
        data.staffRate *
        data.noOfStaff *
        data.noOfCamapign - plan
        savingResult = resultCalc.toLocaleString('en-US');
     //   activeSavingResult();
       // savingResulInput.setAttribute("placeholder", savingResult);
       savingResulInput.value = savingResult
      }
      scrollingCalculator()
    });
  }
}
calculateSaving();
//distibute popup

function distributePop(){
  const allPops = document.querySelectorAll(".saveTime__estimate--formTwo--inputGroup--popup")
  allPops.forEach((item)=>{
    if(item){
      console.log(item.clientHeight + 20 )
      item.style.top = -(item.clientHeight+10)+"px"
    }
  })
}
distributePop()

