// Задача 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = +prompt('Введіть, будь ласка, довільне число');

// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

// console.log(number);

// function checkNumber(number) {
//   if (number === 10) {
//     alert('Вірно');
//   } else {
//     alert('Невірно');
//   }

//   console.log(number);
// }

// const userInput = +prompt('Введіть, будь ласка, довільне число');
// checkNumber(userInput);

// Задача 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min >= 0 && min <= 14) {
//   alert(`${min} входить у першу чверть`);
// } else if (min >= 15 && min <= 29) {
//   alert(`${min} входить у другу чверть`);
// } else if (min >= 30 && min <= 44) {
//   alert(`${min} входить у третю чверть`);
// } else {
//   alert(`${min} входить у четверту чверть`);
// }

// console.log(min);

// Задача 3:
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function getSeason(num) {
//   let result;

//   switch (num) {
//     case 1:
//       result = 'зима';
//       break;
//     case 2:
//       result = 'весна';
//       break;
//     case 3:
//       result = 'літо';
//       break;
//     case 4:
//       result = 'осінь';
//       break;
//     default:
//       result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//   }

//   return result;
// }
// let num = +prompt('Будь ласка, введіть випадкове число від 1 до 4');
// let season = getSeason(num);
// console.log(season);

// Задача 4:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// let totalMinutesInput = +prompt('будь ласка, введіть довільне число');
// let hourPart = Math.floor(totalMinutesInput / 60);
// let minutePart = totalMinutesInput % 60;

// let formatedHours = String(hourPart).padStart(2, '0');
// let formatedMinuted = String(minutePart).padStart(2, '0');
// let timeResult = `${formatedHours}:${formatedMinuted}`;
// console.log(timeResult);

// Завдання 5:
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// let loginName = prompt('Будь ласка, введіть ваш логін');
// let passwordName;
// if (loginName === 'Адмін') {
//   passwordName = prompt('А теперь, будь ласка, введіть пароль');
//   if (passwordName === 'Я головний') {
//     alert('Добрий день');
//   } else {
//     alert('Невірний пароль');
//   }
// } else if (loginName === '' || loginName === null) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }

// console.log(loginName);
// console.log(passwordName);

// Задача 6:
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let count = 0;

// while (count <= 20) {
//   console.log(count);
//   count++;
// }

// Задача 7:
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(20, 30));

// Задача 8:

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }
//   return a < b ? a : b;
// }

// console.log(min(2, 4));

// Задача 9:
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }

//   if (confirm('Вам є 18?')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isAdult(20));

// function isAdult(age) {
//   return age >= 18 || confirm('Вам є 18?');
// }

// console.log(isAdult(17));

// function isAdult(age) {
//   return age >= 18 ? true : confirm('Вам є 18?');
// }

// console.log(isAdult(17));

// Задача 10:

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(10);
