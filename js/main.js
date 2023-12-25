// призначаю групу
const box = document.querySelector(".js_box");
let grNumber;
function getNumberGr() {
  const max = 2;
  const min = 1;
  grNumber = Math.round(Math.random() * (max - min) + min);
  // Повертаємо 1 або 2 в залежності від випадкового значення
  return grNumber;
}

function addGroup() {
  getNumberGr();
  box.innerHTML = `<div class="group">${grNumber}</div>`;
}
setTimeout(addGroup, 3000);

box.addEventListener("touchstart", (e) => {
  box.innerHTML = `<div class="group">
  <p class="question_text">У веб-просторах та веб-краях, Є місце, де дані зачаєно, як скарб.<br/> 
  Відкрий інструменти, поглянь на "аплікуху". <br/>
   Кожні 5 секунд то прийде то зникне, як таємничий герой.<br/>
  
  Та завжди пам'ятайте  - це не особистий бенкет, тут жодних персональних слів, лише код та пакет.</p>
   <input type="text" class="qestions" placeholder=""sdsdsd/>
   <div class="feedback"></div>
   </div> `;
  const getInputValue = document.querySelector(".qestions");
  console.log(getInputValue);
  getInputValue.addEventListener("change", (e) => {
    let value = e.currentTarget.value;
    console.log(value);
    const feedback = document.querySelector(".feedback");
    if (value.toLowerCase() === "local storage") {
      feedback.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/7778/7778643.png" width="50" height="50" />`;
      localStorage.setItem("value1", JSON.stringify(value));
    } else {
      feedback.innerHTML = `<img src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png" width="50" height="50" />`;
    }
  });
});
h;
