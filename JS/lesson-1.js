// Задача 1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну numberInput.
// Перевірте, чи дорівнює змінна numberInput числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

const numberInput = Number(
  prompt('Будь ласка, введіть довільне число від 1 до 10')
);

if (numberInput === 10) {
  alert('Вірно');
} else {
  alert('Не вірно');
}

console.log(numberInput);

// Задача 2

// У змінній randomMinute лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const randomMinute = Math.floor(Math.random() * 60);

if (randomMinute >= 0 && randomMinute <= 15) {
  alert(`ваше ${randomMinute} входить в першу чверть`);
} else if (randomMinute <= 30) {
  alert(`ваше ${randomMinute} входить в другу чверть`);
} else if (randomMinute <= 45) {
  alert(`ваше ${randomMinute} входить в третю чверть`);
} else {
  alert(`ваше ${randomMinute} входить в четверту чверть`);
}

console.log(randomMinute);

// Задача 3

// Змінна seasonNum може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

let seasonNum = +prompt('будь ласка, введіть довільне число від 1 до 4');
let seasonResult;

switch (seasonNum) {
  case 1:
    seasonResult = 'зима';
    break;
  case 2:
    seasonResult = 'весна';
    break;
  case 3:
    seasonResult = 'літо';
    break;
  case 4:
    seasonResult = 'осінь';
    break;
  default:
    seasonResult = 'Вибачте, але ви маєте ввести значення від 1 до 4';
}

console.log(seasonResult);

// Задача 4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

let totalMinutesInput = +prompt('будь ласка, введіть довільне число');
let hourPart = Math.floor(totalMinutesInput / 60);
let minutePart = totalMinutesInput % 60;

let formattedHours = String(hourPart).padStart(2, '0');
let formattedMinutes = String(minutePart).padStart(2, '0');

let timeResult = `${formattedHours}:${formattedMinutes}`;
console.log(timeResult);

// Задача 5

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

let loginInput = prompt('будь ласка, введіть ваш логін');

if (loginInput === 'Адмін') {
  let passwordInput = prompt('будь ласка, введіть пароль');
  if (passwordInput === 'Я головний') {
    alert('Добрий день!');
  } else if (passwordInput === '' || passwordInput === null) {
    alert('Скасовано');
  } else {
    alert('Невірний пароль!');
  }
} else if (loginInput === '' || loginInput === null) {
  alert('Скасовано');
} else {
  alert('Я вас не знаю');
}

// Задача 6

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

let counter = 0;
while (counter <= 20) {
  console.log(counter);
  counter += 1;
}

// Задача 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(getNumbers(1, 10));

// Задача 8

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Not a number!';
  }
  return a < b ? a : b;
}

// Задача 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Вам меньше 18. Ви впевнені, що хочете продовжити?');
  }
}

// Задача 10

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділиться без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    }
  }
}
