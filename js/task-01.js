// Напиши скрипт, який:

// 1) Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// 2) Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >, вкладених в нього).

const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(item => {
const categoryTitle = item.querySelector('h2').textContent;
const categoryElements = item.querySelectorAll('li').length;
console.log(`Category: ${categoryTitle}\nElements: ${categoryElements}\n`);
});

    