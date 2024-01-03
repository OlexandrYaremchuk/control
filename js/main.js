// призначаю групу
const box = document.querySelector(".js_box");
let grNumbers = [];

function getNumberGr() {
  const max = 2;
  const min = 1;

  // Якщо всі числа вже використані, генеруємо новий масив
  if (grNumbers.length === 0) {
    grNumbers = Array.from({ length: max }, (_, index) => index + 1);
  }

  // Вибираємо випадкове число з доступних
  const randomIndex = Math.floor(Math.random() * grNumbers.length);
  const selectedNumber = grNumbers[randomIndex];

  // Видаляємо вибране число з масиву
  grNumbers.splice(randomIndex, 1);

  // Повертаємо вибране число
  return selectedNumber;
}

function changePath() {
  const groupNumber = getNumberGr();
  localStorage.setItem("group", JSON.stringify(groupNumber));

  if (groupNumber === 1) {
    window.location.href = "1.html";
  } else {
    window.location.href = "2.html";
  }
}

function addGroup() {
  const groupNumber = getNumberGr();
  localStorage.setItem("group", JSON.stringify(groupNumber));

  box.innerHTML = `<div class="group"> <h1>${groupNumber}</h1></div>`;
  setTimeout(changePath, 7000);
}

setTimeout(addGroup, 3000);
