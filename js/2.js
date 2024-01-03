const box = document.querySelector(".js_box_1");

// question 1
setTimeout(question_1, 2000);

function question_1() {
  box.innerHTML = `<div class="group">
    <p class="question_text">
    <img class="cub" src="./image/cub.png"/></p>
     <input type="text" class="qestions" placeholder="Напиши відповіль"/>
     <div class="feedback z_i"></div>
     </div> `;
  const getInputValue = document.querySelector(".qestions");
  console.log(getInputValue);
  getInputValue.addEventListener("change", (e) => {
    let value1 = e.currentTarget.value;
    console.log(value1);
    const feedback = document.querySelector(".feedback");
    if (value1.toLowerCase() === "11") {
      feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
      localStorage.setItem("value1", JSON.stringify(value1));

      // Викликаємо функцію question_2 після запису в localStorage
      question_2();
    } else {
      feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
    }
  });
}

// question2
function question_2() {
  if (localStorage.getItem("value1") !== null) {
    console.log("yes");
    box.innerHTML = `<div class="group">
    <p class="question_text">В сітці павутиній та відповідях живе.<br/> Тут замішаний код, таємничий та невідомий. <br/> Шукаючи вкладку де запит живе ти слід підступного наміру знайдеш. <br/> Можливо в тілі, відповідь буде</p>
     <input type="text" class="qestions" placeholder="Напиши відповідь"/>
     <div class="feedback z_i"></div>
     </div> `;
    const getInputValue = document.querySelector(".qestions");
    console.log(getInputValue);
    getInputValue.addEventListener("change", (e) => {
      let value2 = e.currentTarget.value;
      console.log(value2);
      const feedback = document.querySelector(".feedback");
      if (value2.toLowerCase() === "alt") {
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
  if (localStorage.getItem("value1") !== null) {
    console.log("yes");
    box.innerHTML = `<div class="group">
    <p class="question_text">Властивість, яка може зробити щось на сторінці видимим або навпаки</p>
     <input type="text" class="qestions" placeholder="Введи знайдену підказку"/>
     <div class="feedback z_i"></div>
     </div> `;
    const getInputValue = document.querySelector(".qestions");
    console.log(getInputValue);
    getInputValue.addEventListener("change", (e) => {
      let value3 = e.currentTarget.value;
      console.log(value3);
      const feedback = document.querySelector(".feedback");
      if (value3.toLowerCase() === "figma") {
        feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
        localStorage.setItem("value3", JSON.stringify(value3));
        question_3();
      } else {
        feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
      }
    });
  }
}
// question4
function question_4() {
  if (localStorage.getItem("value1") !== null) {
    console.log("yes");
    box.innerHTML = `<div class="group">
    <p class="question_text">Яка властивість може зробити явним на сторінці та навпаки.</p>
     <input type="text" class="qestions" placeholder="Введи знайдену підказку"/>
     <div class="feedback z_i"></div>
     </div> `;
    const getInputValue = document.querySelector(".qestions");
    console.log(getInputValue);
    getInputValue.addEventListener("change", (e) => {
      let value3 = e.currentTarget.value;
      console.log(value3);
      const feedback = document.querySelector(".feedback");
      if (value3.toLowerCase() === "figma") {
        feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
        localStorage.setItem("value3", JSON.stringify(value3));
      } else {
        feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
      }
    });
  }
}

// Очистка localStorage (це видалити, якщо вам не потрібно очищати localStorage)
function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
