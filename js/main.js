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
  <p></p>
   <input type="text" class="qestions" placeholder=""sdsdsd/>
   </div> `;
});
