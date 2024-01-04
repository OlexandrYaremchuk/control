const box = document.querySelector(".js_box_1");
const video_container = document.querySelector("video");
// question 1
setTimeout(question_1, 2000);

function question_1() {
  video_container.src = "./image/find_room.mp4";

  box.innerHTML = `<div class="group">
    <p class="question_text">
    Поверни мене на бік, і я все. Розрізай мене навпіл, і я ніщо. Що я? 
    </p>
     <input type="text" class="qestions" placeholder="Введи номер аудиторії"/>
     <div class="feedback z_i"></div>
     </div> `;
  const getInputValue = document.querySelector(".qestions");
  console.log(getInputValue);
  getInputValue.addEventListener("change", (e) => {
    let value1 = e.currentTarget.value;
    console.log(value1);
    const feedback = document.querySelector(".feedback");
    if (value1.toLowerCase() === "8") {
      feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
      localStorage.setItem("value1", JSON.stringify(value1));

      // Викликаємо функцію question_2 після запису в localStorage
      video_container.src = "./image/run_to_room.mp4";
      setTimeout(question_2, 400);

      // question_2();
    } else {
      feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
    }
  });
}

// question2
function question_2() {
  if (localStorage.getItem("value1") !== null) {
    console.log("yes");
    video_container.src = "./image/find_pc.mp4";

    box.innerHTML = `<div class="group">
    <p class="question_text">
    У веб-просторах та веб-краях, Є місце, де дані зачаєно, як скарб.<br/> 
    Відкрий інструменти, поглянь на "аплікуху". <br/>
     Кожні 5 секунд то прийде то зникне, як таємничий герой.<br/>
    
    Та завжди пам'ятайте  - це не особистий бенкет, тут жодних персональних слів, лише код та пакет.
    
    </p>
     <input type="text" class="qestions" placeholder="Введи знайдену підказку"/>
     <div class="feedback z_i"></div>
     </div> `;
    const getInputValue = document.querySelector(".qestions");
    console.log(getInputValue);
    getInputValue.addEventListener("change", (e) => {
      let value2 = e.currentTarget.value;
      console.log(value2);
      const feedback = document.querySelector(".feedback");
      if (value2.toLowerCase() === "там") {
        feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
        localStorage.setItem("value2", JSON.stringify(value2));
        question_3();
      } else {
        feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
      }
    });
  }
}
// question3
function question_3() {
  if (localStorage.getItem("value2") !== null) {
    console.log("yes");
    video_container.src = "./image/pum_burum.mp4";

    box.innerHTML = `<div class="group">
    <p class="question_text">Шукай мене там, де я маю бути, якщо чогось не буде. <br/> Я те що дозволяє сліпому побачити, я те що забувають писати розробники, але знаходять тестувальники.<br/>. Я не тег я атрибут. Щоб мене побачити потрібно зламати щось інше.</p>
     <input type="text" class="qestions" placeholder="Введи знайдену підказку"/>
     <div class="feedback z_i"></div>
     </div> `;
    const getInputValue = document.querySelector(".qestions");
    console.log(getInputValue);
    getInputValue.addEventListener("change", (e) => {
      let value3 = e.currentTarget.value;
      console.log(value3);
      const feedback = document.querySelector(".feedback");
      if (value3.toLowerCase() === "був") {
        feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
        localStorage.setItem("value3", JSON.stringify(value3));
        question_4();
      } else {
        feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
      }
    });
  }
}
function question_4() {
  if (localStorage.getItem("value3") !== null) {
    console.log("yes");
    box.innerHTML = `<div class="group">
    <p class="question_text">Додаток, в якому один бачить що треба робити а інший чи так воно вийшло.</p>
     <input type="text" class="qestions" placeholder="Введи відповідь"/>
     <div class="feedback z_i"></div>
     </div> `;
    const getInputValue = document.querySelector(".qestions");
    console.log(getInputValue);
    getInputValue.addEventListener("change", (e) => {
      let value4 = e.currentTarget.value;
      console.log(value4);
      const feedback = document.querySelector(".feedback");
      if (value4.toLowerCase() === "figma") {
        alert("Ваша підказка  - `Початок`");
        feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
        localStorage.setItem("value4", JSON.stringify(value4));
        finish();
      } else {
        feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
      }
    });
  }
}
function finish() {
  if (localStorage.getItem("value4") !== null) {
    const result1 = localStorage.getItem("value2");
    const result2 = localStorage.getItem("value3");
    const result3 = localStorage.getItem("value4");
    console.log("yes");
    video_container.src = "./image/go.mp4";

    box.innerHTML = `<div class="group">
    <p class="question_text">${result1}  ${result2}  ${result3} </p>
     
    </div> `;
  }

  video_container.src = "./image/rebus.mp4";
  function addRebus() {
    const rebus = document.querySelector(".group");
    rebus.insertAdjacentHTML(
      "beforeend",
      `<img src="./image/rebus.png" class="rebus"/>`
    );
  }
  setTimeout(addRebus, 17000);
}

// Очистка localStorage (це видалити, якщо вам не потрібно очищати localStorage)
function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
