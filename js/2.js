const box = document.querySelector(".js_box_1");
const video_container = document.querySelector("video");

// question 1
setTimeout(question_1, 2000);

function question_1() {
  video_container.src = "./image/find_room.mp4";
  video_container.addEventListener("loadedmetadata", function () {
    video_container.play(); // Автоматичне відтворення відео
  });
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
    if (value1.toLowerCase() === "9") {
      feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
      localStorage.setItem("value1", JSON.stringify(value1));

      // Викликаємо функцію question_2 після запису в localStorage
      setTimeout(question_2, 400);
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
    video_container.addEventListener("loadedmetadata", function () {
      video_container.play(); // Автоматичне відтворення відео
    });
    box.innerHTML = `<div class="group">
    <p class="question_text">В сітці павутиній та відповідях живе.<br/> Тут замішаний код, таємничий та невідомий. <br/> Шукаючи вкладку де запит живе ти слід підступного наміру знайдеш. <br/> Можливо в тілі, відповідь буде</p>
     <input type="text" class="qestions" placeholder="Напиши знайдену підказку"/>
     <div class="feedback z_i"></div>
     </div> `;
    const getInputValue = document.querySelector(".qestions");
    console.log(getInputValue);
    getInputValue.addEventListener("change", (e) => {
      let value2 = e.currentTarget.value;
      console.log(value2);
      const feedback = document.querySelector(".feedback");
      if (value2.toLowerCase() === "де") {
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
    video_container.addEventListener("loadedmetadata", function () {
      video_container.play(); // Автоматичне відтворення відео
    });
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
      if (value3.toLowerCase() === "побачились") {
        feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
        localStorage.setItem("value3", JSON.stringify(value3));
        question_4();
      } else {
        feedback.innerHTML = `<img class="z_i res" src="./image/error.png" />`;
      }
    });
  }
}
// question4
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
        alert("Ваша підказка  - `вперше`");

        feedback.innerHTML = `<img class="z_i res" src="./image/good.png"/>`;
        localStorage.setItem("value4", JSON.stringify("вперше"));
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
    video_container.addEventListener("loadedmetadata", function () {
      video_container.play(); // Автоматичне відтворення відео
    });
    box.innerHTML = `<div class="group">
    <p class="question_text">${result1}  ${result2}  ${result3} </p>
     
    </div> `;
  }

  video_container.src = "./image/rebus.mp4";
  video_container.addEventListener("loadedmetadata", function () {
    video_container.play(); // Автоматичне відтворення відео
  });
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
