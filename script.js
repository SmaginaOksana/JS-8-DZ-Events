// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// input.addEventListener("keydown", (event) => {
//   ul.innerHTML = `<li>${event.key}</li>`;
// });
// console.log(ul);

// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

// const input = document.querySelector("input");
// input.addEventListener("keyup", () => {
//   console.log(input.value);
// });

// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const form = document.querySelector("form");
// const input = document.querySelector(".text");
// const ul = document.querySelector("ul");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   ul.innerHTML = `<li>${input.value}</li>`;
//   input.value = "";
// });

// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/..

// const form = document.querySelector("form");
// const inputFirst = document.querySelector(".first");
// const inputSecond = document.querySelector(".second");
// const select = document.querySelector("select");
// const div = document.querySelector("div");

// // подзадание 1:
// form.addEventListener("submit", (event) => {
//   if (inputFirst.value === "" || inputSecond.value === "") {
//     alert("Введите числа во все поля");
//     return;
//   } else if (select.value === "выбрать") {
//     alert("Выберите арифметический знак");
//     return;
//   }
//   event.preventDefault();
//   if (select.value === "+") {
//     div.append(+inputFirst.value + +inputSecond.value);
//     return;
//   } else if (select.value === "-") {
//     div.append(+inputFirst.value - +inputSecond.value);
//     return;
//   } else if (select.value === "*") {
//     div.append(+inputFirst.value * +inputSecond.value);
//     return;
//   } else {
//     div.append(+inputFirst.value / +inputSecond.value);
//   }
//   inputFirst.value = "";
//   inputSecond.value = "";
// });

// // подзадание 2:
// form.addEventListener("submit", (event) => {
//   if (inputFirst.value === "" || inputSecond.value === "") {
//     alert("Введите числа во все поля");
//     return;
//   } else if (select.value === "выбрать") {
//     alert("Выберите арифметический знак");
//     return;
//   }
//   event.preventDefault();
//   div.append(eval(`${inputFirst.value} ${select.value} ${inputSecond.value}`));
// });

// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

// const button = document.querySelector("button");
// const randomColor = () => {
//   function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   const a = getRandomInteger(0, 255);
//   const b = getRandomInteger(0, 255);
//   const c = getRandomInteger(0, 255);
//   return `rgb(${a},${b},${c})`;
// };
// const randomDegree = () => {
//   function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   return `${getRandomInteger(-180, 180)}`;
// };
// button.addEventListener("mouseenter", () => {
//   button.style.background = randomColor();
// });
// button.addEventListener("mouseleave", () => {
//   button.style.transform = `rotate(${randomDegree()}deg)`;
// });
