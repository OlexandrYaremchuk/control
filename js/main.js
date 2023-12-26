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
