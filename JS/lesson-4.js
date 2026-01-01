// 1 - отримай body елемент і виведи його в консоль;

const body = document.querySelector('body');

console.log(body);

//  2 - отримай елемент id="title" і виведи його в консоль;

const titleId = document.querySelector('#title');

console.log(titleId);

// 3 - отримай елемент class="list" і виведи його в консоль

const classListElement = document.querySelector('.list');

console.log(classListElement);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const elementTopicAtributes = document.querySelectorAll('[data-topic]');

console.log(elementTopicAtributes);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const firstElementDataTopic = document.querySelector('[data-topic]');

console.log(firstElementDataTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastElementDataTopic =
  elementTopicAtributes[elementTopicAtributes.length - 1];

console.log(lastElementDataTopic);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const nextElementTitle = document.querySelector('h1 + *');

console.log(nextElementTitle);

console.log(titleId.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const nodeListTitleh3 = document.querySelectorAll('h3');

console.log(nodeListTitleh3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

nodeListTitleh3.forEach(element => {
  element.classList.add('active');
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navigationLiElement = document.querySelector(
  'li[data-topic="navigation"]',
);

console.log(navigationLiElement);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navigationLiElement.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const navigationLiElementText = navigationLiElement.querySelector('p');

navigationLiElementText.textContent = 'Я змінив тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = 'manipulation';

const currentTopicElement = document.querySelector(
  `[data-topic="${currentTopic}"]`,
);

console.log(currentTopicElement);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

currentTopicElement.setAttribute('style', 'background-color: lightblue;');

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const titleCompleted = document.querySelector('.completed');
console.log(titleCompleted);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

titleCompleted.closest('li').remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const textDocumentObject = document.createElement('p');

textDocumentObject.textContent =
  "Об'єктна модель документа (Document Object Model)";

titleId.insertAdjacentElement('afterend', textDocumentObject);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const lastElementLi = document.createElement('li');

const lastElementTitle = document.createElement('h3');

const lastElementText = document.createElement('p');

lastElementTitle.textContent = 'Властивість innerHTML';

lastElementText.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

// lastElementLi.append(lastElementTitle, lastElementText);

// classListElement.append(lastElementLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const h3 = 'Властивість innerHTML';
const P =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';

classListElement.insertAdjacentHTML(
  'beforeend',
  `<li><h3>${h3}</h3><p>${P}</p></li>`,
);

// 20 - очисти список

classListElement.innerHTML = '';

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const divNumberContainer = document.querySelector('.number-container');

for (let i = 0; i < 100; i++) {
  const number = randomNumber();

  const divContainer = document.createElement('div');
  divContainer.classList.add('number');

  if (number % 2 === 0) {
    divContainer.classList.add('even');
  } else {
    divContainer.classList.add('odd');
  }

  divContainer.textContent = number;

  divNumberContainer.append(divContainer);
}

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const formInput = document.querySelector('.js-username-input');

const span = document.querySelector('.js-username-output');

formInput.addEventListener('input', event => {
  const inputTextLength = event.target.value.length;
  if (inputTextLength < 6) {
    formInput.classList.add('success');
    formInput.classList.remove('error');
  } else {
    formInput.classList.add('error');
    formInput.classList.remove('success');
  }

  span.textContent = formInput.value;
  if (formInput.value === '') {
    span.textContent = ' Anonymous ';
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

formInput.addEventListener('focus', event => {
  const inputText = event.target.value;
  if (inputText === '') {
    formInput.style.outline = '3px solid red';
  } else {
    formInput.style.outline = '3px solid green';
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

formInput.addEventListener('blur', event => {
  const inputTextBlur = event.target.value;
  if (inputTextBlur === '') {
    formInput.style.outline = '3px solid red';
  } else {
    formInput.style.outline = '3px solid lime';
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('.js-contact-form');
const checkBox = document.querySelector('.js-policy-checkbox');

form.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.target.elements.userName.value.trim();
  const checkBoxValue = event.target.elements.accept.checked;
  const userName = {
    userName: inputValue,
  };
  if (inputValue === '' && !checkBoxValue) {
    alert('Будь ласка, заповніть усі поля');
    return;
  } else {
    console.log(userName);
  }

  span.textContent = ' Anonymous ';

  form.reset();
});

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал: // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const buttonDecrease = document.querySelector('.js-decrease');

const buttonIncrease = document.querySelector('.js-increase');

const box = document.querySelector('.box');

buttonDecrease.addEventListener('click', () => {
  const currentWidth = box.offsetWidth; // ширина в px
  const currentHeight = box.offsetHeight; // высота в px

  box.style.width = currentWidth - 20 + 'px';
  box.style.height = currentHeight - 20 + 'px';
});

buttonIncrease.addEventListener('click', () => {
  const currentWidth = box.offsetWidth;
  const currentHeight = box.offsetHeight;

  box.style.width = currentWidth + 20 + 'px';
  box.style.height = currentHeight + 20 + 'px';
});
