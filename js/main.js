// призначаю групу
const box = document.querySelector(".js_box");
let grNumber;
function getNumberGr() {
  const max = 2;
  const min = 1;
  grNumber = Math.round(Math.random() * (max - min) + min);
  // Повертаємо 1 або 2 в залежності від випадкового значення
  localStorage.setItem("group", JSON.stringify(grNumber));
}

setTimeout(changePath, 7000);
function changePath() {
  if (JSON.parse(localStorage.getItem("group")) === 1) {
    window.location.href = "1.html";
  } else {
    window.location.href = "2.html";
  }
}

function addGroup() {
  getNumberGr();
  box.innerHTML = `<div class="group"> <h1>${grNumber}</h1></div>`;
}
setTimeout(addGroup, 3000);
if (JSON.parse(localStorage.getItem("group")) === 1) {
  window.location.href = "";
}

box.addEventListener("click", (e) => {
  box.innerHTML = `<div class="group">
  <p class="question_text">У веб-просторах та веб-краях, Є місце, де дані зачаєно, як скарб.<br/> 
  Відкрий інструменти, поглянь на "аплікуху". <br/>
   Кожні 5 секунд то прийде то зникне, як таємничий герой.<br/>
  
  Та завжди пам'ятайте  - це не особистий бенкет, тут жодних персональних слів, лише код та пакет.</p>
   <input type="text" class="qestions" placeholder=""sdsdsd/>
   <div class="feedback z_i"></div>
   </div> `;
  const getInputValue = document.querySelector(".qestions");
  console.log(getInputValue);
  getInputValue.addEventListener("change", (e) => {
    let value = e.currentTarget.value;
    console.log(value);
    const feedback = document.querySelector(".feedback");
    if (value.toLowerCase() === "local storage") {
      feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
      localStorage.setItem("value1", JSON.stringify(value));
    } else {
      feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
    }
  });
});
