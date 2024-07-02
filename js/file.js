const fixedPricePlans = [
  { planName: "Start Up", price: 30 },
  { planName: "Local", price: 60 },
  { planName: "Regional", price: 130 },
  { planName: "National", price: 220 },
];
let savingResult;
let error;
let plan;
let selectedPlanName;
let selectedPlanValue;
let fillDataPlan;
let resetDefault;
let planYearlyMonth;
if(document.querySelector(".registerCompany__cards--switchPalns--div.active")){
  planYearlyMonth = document.querySelector(".registerCompany__cards--switchPalns--div.active").querySelector('input').value
}

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
        if (item.classList.contains("choosePlan")) {
          activeRegister = true;
        } else {
          activeRegister = false;
        }
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.body.classList.remove(classModal);
      if(closeBtn.classList.contains('modalRegister__closeBtn')){
        resetDefault()
        console.log(55)
      }
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
  const swiperRegister = document.querySelector(
    ".registerCompany__cards .swiper"
  );
  if (swiperPricing) {
    const swiper = new Swiper(".pricingPage__swiper .swiper", {
      // Default parameters
      spaceBetween: 5,
      speed: 500,
      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },

        1200: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 5,
        },
      },
      navigation: {
        nextEl: ".pricingPage__swiper .swiper-button-next",
        prevEl: ".pricingPage__swiper .swiper-button-prev",
      },
    });
  }
  if (swiperCards) {
    const swiper = new Swiper(".registerCompany__cards .swiper", {
      // Default parameters
      slidesPerView: 3,
      spaceBetween: 5,
      speed: 500,

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
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
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".registerCompany__cards .swiper-button-next",
        prevEl: ".registerCompany__cards .swiper-button-prev",
      },
    });
  }
}
swiperPricingPage();

//toggle Button

const toggleBtnsPricing = document.querySelectorAll(
  ".pricingPage__container--toggleBtns button"
);
const toggleBtnsPricingRegister = document.querySelectorAll(
  ".registerCompany__cards--switchPalns--div "
);

const allPrices = document.querySelectorAll(
  ".pricingPage__swiper .cardpricing__price--value"
);
const allPricesRegister = document.querySelectorAll(
  ".registerCompany__cards .cardpricing__price--value"
);

const yearlyPrices = document.querySelectorAll(
  ".pricingPage__swiper .cardpricing__desc"
);
const yearlyPricesRegister = document.querySelectorAll(
  ".registerCompany__cards .cardpricing__desc"
);
const inputRegister = document.querySelectorAll(
  ".cardpricing__selectPlan--input"
);
const titleCardsRegister = document.querySelectorAll(
  ".registerCompany__cards .cardpricing__title:not(.exclude)"
);
const titlesLabels = document.querySelectorAll(
  ".cardpricing__selectPlan--label"
);
function fillTitle(titles) {
  titles.forEach((item, index) => {
    item.textContent = fixedPricePlans.map((item) => item.planName)[index];
  });
}
function fillPrices(priceElmnts, prices) {
  const titleCards = document.querySelectorAll(
    ".pricingPage__swiper  .cardpricing__title:not(.exclude)"
  );
 
  const getPrices = prices.map((item) => item.price);
  priceElmnts.forEach((item, index) => {
    item.textContent = getPrices[index] || prices[index];
  });
 
  fillTitle(titleCards);
  fillTitle(titleCardsRegister);
  fillTitle(titlesLabels);
}
fillPrices(allPrices, fixedPricePlans);
fillPrices(allPricesRegister, fixedPricePlans);

function fillInputRegister(priceList) {
  const labelRegister = document.querySelectorAll(
    ".cardpricing__selectPlan--label"
  );
  inputRegister.forEach((item, index) => {
    const prices = priceList.map((item) => item.price);
    const namePlans = priceList.map((item) => item.planName);
    item.setAttribute("value", prices[index]);
    item.setAttribute("id", namePlans[index]);
    labelRegister[index].setAttribute("for", namePlans[index]);
  });
}
function updateFillInputRegister(priceList) {
  inputRegister.forEach((item, index) => {
    item.setAttribute("value", priceList[index]);
  });
}

fillInputRegister(fixedPricePlans);
function toggleBtns(btns, pricesItems, txtdesc, switchBtns) {
  btns.forEach((item, index) => {
    if (item) {
      item.addEventListener("click", () => {
        for (let i = 0; i < switchBtns.length; i++) {
          switchBtns[i].classList.remove("active");
        }
        item.classList.add("active");

        if (index === 1) {
          //  subscription.classList.add("animate__animated", "animate__bounce");
          txtdesc.forEach((item) => {
            item.textContent = "Monthly price based on annual subscription";
          });
        } else {
          txtdesc.forEach((item) => {
            item.textContent = " Monthly price based on 6 month subscription";
          });
        }
        if (index === 1) {
          const applyDiscount = fixedPricePlans.map(
            (item) => item.price - item.price * 0.2
          );
          if(item.classList.contains("registerCompany__cards--switchPalns--div")){
            planYearlyMonth = item.querySelector('input').getAttribute('value')
          }
         
          updateFillInputRegister(applyDiscount);
          fillPrices(pricesItems, applyDiscount);
          if(item.classList.contains('registerCompany__cards--switchPalns--div') && errorSelect==false){
          
            if(document.querySelector('.focused')){
            selectedPlanValue = document.querySelector('.focused').querySelector('input').getAttribute('value')
            selectedPlanName = document.querySelector('.focused').querySelector('input').getAttribute('id')
            }
            
            
            planYearlyMonth = item.querySelector('input').getAttribute('value')
              fillDataPlan(selectedPlanValue,selectedPlanName,planYearlyMonth)
            
         
          }


        } else {
          fillPrices(pricesItems, fixedPricePlans);
          const fixedPrices = fixedPricePlans.map((item)=>item.price)
          if(item.classList.contains("registerCompany__cards--switchPalns--div")){
            planYearlyMonth = item.querySelector('input').getAttribute('value')
          }
          updateFillInputRegister(fixedPrices);
           if(item.classList.contains('registerCompany__cards--switchPalns--div') && errorSelect==false){
           
              if(document.querySelector('.focused')){
            selectedPlanValue = document.querySelector('.focused').querySelector('input').getAttribute('value')
            selectedPlanName = document.querySelector('.focused').querySelector('input').getAttribute('id')
            }
           
            planYearlyMonth = item.querySelector('input').getAttribute('value')
              fillDataPlan(selectedPlanValue,selectedPlanName,planYearlyMonth)
            
           //  fillDataPlan(selectedPlanValue,selectedPlanName)
          }
        }
      });
    }
  });
}
toggleBtns(toggleBtnsPricing, allPrices, yearlyPrices, toggleBtnsPricing);
toggleBtns(
  toggleBtnsPricingRegister,
  allPricesRegister,
  yearlyPricesRegister,
  toggleBtnsPricingRegister
);

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
  if (arrayClasses.toString().indexOf("aboutPage") > -1) {
    const txtAbout = document.querySelector(
      ".aboutPage__sectionOne--leftside--txt"
    );
    // txtAbout.style.maxHeight= window.innerHeight + "px"
    const wHeight = window.innerHeight;
    const txtHeight = txtAbout.clientHeight;
    const protionHeight = (wHeight * 50) / 100;
    txtAbout.style.height = (wHeight * 90) / 100 + "px";
    if (txtHeight > protionHeight) {
      document.body.classList.add("adjutment");
    } else {
      document.body.classList.remove("adjutment");
    }
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

function scrollingCalculator() {
  const saveTimeSection = document.querySelector(".saveTime");

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
  /*
  function activeSavingResult() {
    savingResulInput.classList.add("active");
  }
  */

  allInputs.forEach((item, index) => {
    if (index === 1) {
      item.setAttribute("disabled", true);
    }
    item.addEventListener("keyup", () => {
      for (let i = 0; i < allInputs.length; i++) {
        if (index === i) {
          if (
            !isNaN(item.value) &&
            item.value.trim().length !== 0 &&
            (i === 0 ? +item.value > 0.5 : +item.value > 0)
          ) {
            data[keysData[i]] = +item.value;

            //  data[keysData[1]] = +item.value - .5;
            allParent[index].classList.add("right");
            allParent[index].classList.remove("wrong");
          } else {
            data[keysData[i]] = false;
            allParent[index].classList.add("wrong");
            allParent[index].classList.remove("right");
          }
        }
      }

      let dewValue = data.livingTraing - 0.5;
      if (index === 0) {
        if (
          !isNaN(item.value) &&
          item.value.trim().length !== 0 &&
          +item.value > 0.5
        ) {
          data.DewdroppersTraining = dewValue;
          allInputs[1].value = dewValue;
          fillingError();
        } else {
          dewValue = 0;
          allInputs[1].value = dewValue;
          fillingError("Should be greater than .5");
        }
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
        savingResulInput.value = "00000";
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
        const resultCalc =
          (data.livingTraing - data.DewdroppersTraining) *
            data.staffRate *
            data.noOfStaff *
            data.noOfCamapign -
          plan;
        savingResult = resultCalc.toLocaleString("en-US");
        //   activeSavingResult();
        // savingResulInput.setAttribute("placeholder", savingResult);
        savingResulInput.value = savingResult;
      }
      console.log(data);
      scrollingCalculator();
    });
  }
}
calculateSaving();
//distibute popup

function distributePop() {
  const allPops = document.querySelectorAll(
    ".saveTime__estimate--formTwo--inputGroup--popup"
  );
  allPops.forEach((item) => {
    if (item) {
      item.style.top = -(item.clientHeight + 10) + "px";
    }
  });
}
distributePop();

//Register Form

let activeCompany = false;
let activePersonal = false;
const allChoosePlan = document.querySelectorAll(".choosePlan");
const closeModalChoosePlanBtn = document.querySelector(
  ".modalRegister__closeBtn"
);
const registerForm = document.querySelector(".registerForm");
const selectorsPersonalCompany = document.querySelector(
  ".registerForm__selectors"
);
const companyWidget = document.querySelector(".registerForm__company");
const personalWidget = document.querySelector(".registerForm__personal");
const backBtnRegister = document.querySelector(".modalRegister__backBtn");
const spanSteps = document.querySelector(
  ".registerForm__company__container--steps"
);
const nextButton = document.querySelector(
  ".registerForm__company__container--next"
);
const selectPlanBtn = document.querySelectorAll(".cardpricing__selectPlan");
let errorSelect = true;
const companySteps = document.querySelectorAll(".companysteps");
const payButton =  document.querySelector(".registerForm__company__container--pay")
let step = 0;
let formSteps = 3;

//firingChoosePlan
fireModal(allChoosePlan, closeModalChoosePlanBtn, "modalnOpenPlan");
//firing regsiterForm
function fireRegisterForm() {
  registerForm.classList.add("active");
  selectorsPersonalCompany.classList.add("hide");
  
  if (activeCompany) {
    companyWidget.classList.add("active");
    personalWidget.classList.remove("active");
    spanSteps.classList.add("active");
    if(step >0){
      backBtnRegister.classList.add("active");
    }else {
      backBtnRegister.classList.remove("active");
    }
  }
  if (activePersonal) {
    personalWidget.classList.add("active");
    companyWidget.classList.remove("active");
    backBtnRegister.classList.add("active");
  }
}
 resetDefault=()=> {
  
  registerForm.classList.remove("active");
  selectorsPersonalCompany.classList.remove("hide");
   backBtnRegister.classList.remove("active");
   personalWidget.classList.remove("active");
   companyWidget.classList.remove("active");
 
  //registerForm.classList.remove("active");
 // selectorsPersonalCompany.classList.remove("hide");
  //backBtnRegister.classList.remove("active");
  
  //companyWidget.classList.remove("active");
  
  /*
  spanSteps.querySelectorAll('span').forEach((item)=>{
    item.classList.remove('active')
  })
 // document.querySelector('.registerCompany__selectedItem--details--error').classList.remove('show')
  nextButton.classList.remove('hide')
  errorSelect = true
  payButton.classList.remove('show')
  for(let i = 0 ; i < selectPlanBtn.length;i++){
    selectPlanBtn[i].classList.remove('focused')
  }
  document.querySelectorAll(".cardpricing__selectPlan--input").forEach((item)=>{
    item.checked=false
  })
  document.querySelector('.registerCompany__selectedItem--details').classList.remove('no-error')
   
  document.querySelector('.registerCompany__selectedItem--details').innerHTML = `<p class="registerCompany__selectedItem--details--error show">Please Select Plan</p>`
  document.querySelector('.card-js').classList.add('hide')
  document.querySelectorAll(".registerCompany__cards--switchPalns--div").forEach((item)=>{
    item.classList.remove('active')
  })
  document.querySelectorAll(".registerCompany__cards--switchPalns--div")[0].classList.add('active')
  fillTitle(titleCardsRegister);
  fillTitle(titlesLabels);
  */
}
function backProcessRegister() {
  if (activePersonal) {
    resetDefault();
  }
  if (activeCompany) {
    if (step >0) {
      step--;
    }
    removeActiveSlides(step);
    /*
    if (step === 0) {
      resetDefault();
    }
    */
    
  }
  if(step===0 && activeCompany){
    backBtnRegister.classList.remove('active')
  }
    
}
function removeActiveList(arrayList, classTitle) {
  for (let i = 0; i < arrayList.length; i++) {
    arrayList[i].classList.remove(classTitle);
  }
}
function addActiveSlides(stepParam) {
  if (stepParam <= 3) {
    spanSteps.querySelectorAll("span")[stepParam - 1].classList.add("active");
  }
  removeActiveList(companySteps, "active");
  companySteps[stepParam].classList.add("active");
  if(stepParam>0){
    backBtnRegister.classList.add('active')
  }else {
    backBtnRegister.classList.add('active')
  }
}
function removeActiveSlides(stepParam) {
  spanSteps.querySelectorAll("span")[stepParam].classList.remove("active");
  removeActiveList(companySteps, "active");
  companySteps[stepParam].classList.add("active");
  nextButton.classList.remove("hide");
  payButton.classList.remove('show')
}
if(backBtnRegister){
  backBtnRegister.addEventListener("click", backProcessRegister);
}

function clickNextButton(e) {
  e.preventDefault();
  if (step <= formSteps - 1) {
    step++;
  }
  if (step === formSteps) {
    nextButton.classList.add("hide");
    if(!errorSelect){
      payButton.classList.add('show')
    }
  }

  addActiveSlides(step);
}
if(nextButton){
  nextButton.addEventListener("click", clickNextButton);
}

function clickSelectors() {
  if(selectorsPersonalCompany){
    selectorsPersonalCompany
    .querySelectorAll(".registerForm__selectors>div")
    .forEach((item) => {
      
      item.addEventListener("click", () => {
        if (item.querySelector("input").getAttribute("id") === "company") {
          activeCompany = true;
          activePersonal = false;
        } else {
          activeCompany = false;
          activePersonal = true;
        }
        if (activeCompany || activePersonal) fireRegisterForm();
      });
    });
  }

}
clickSelectors();
//function to update select plan and show Error
const errorWidget = document.querySelector(
  ".registerCompany__selectedItem--details--error"
);
const messageContainer = document.querySelector(
  ".registerCompany__selectedItem--details"
);
const cardJs = document.querySelector(".card-js");
function showErrorSelect() {
  if(errorWidget){
    errorWidget.classList.add("show");
    cardJs.classList.add("hide");
    messageContainer.classList.remove('no-error')
  }

}
function removeErrorSelect() {
  errorWidget.classList.remove("show");
  cardJs.classList.remove("hide");
}
function selectPlanRegister() {
  selectPlanBtn.forEach((item) => {
    item.addEventListener("click", () => {
      selectedPlanName = item.querySelector("input").getAttribute("id");
      selectedPlanValue = item.querySelector("input").getAttribute("value");
      errorSelect = false;
      removeErrorSelect();
      fillDataPlan(selectedPlanValue, selectedPlanName,planYearlyMonth);
      for(let i = 0 ; i < selectPlanBtn.length;i++){
        selectPlanBtn[i].classList.remove('focused')
      }
      item.classList.add('focused')
      messageContainer.classList.add('no-error')
    });
  });
  showErrorSelect();
}
selectPlanRegister();

fillDataPlan = (value, palanName,planmonthlyYear) => {
 
  messageContainer.innerHTML = `
  <p>Plan Price: ${value} USD</p>
  <p>Plan Name: ${palanName}</p>
   <p>Plan Period: ${planmonthlyYear}</p>
  `;
};
