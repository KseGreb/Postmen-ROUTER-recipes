6 шагов :

Вы должны создать свою API с рецептами и совершить к ней запросы GET, POST, PUT, DELETE, используя POSTMAN. Вот вам список товаров, который у вас должен быть

ПИШЕМ через Router

1 - Скопируйте это и вставить в созданный вами документ Recipes.js

const recipes = [
{
name: "chicken",
id: "1aa",
price: 20
},
{
name: "fish",
id: "2bb",
price: 40
},
{
name: "bread",
id: "3cc",
price: 6
},
{
name: "milk",
id: "4dd",
price: 7
},
{
name: "coconut",
id: "5ee",
price: 3
},
];

module.exports = recipes;



2 - Создайте документ index.js : в нем создайте сервер и свяжите его с портом 4000

3 - Перепишите код, используя знания, полученные о Router.

4 - Сделайте запрос GET через POSTMAN. Вы должны получить все товары, которые у вас находятся в документе Recipes.js

5 - Сделайте запрос POST через POSTMAN. Добавьте товар с id = "6zzf". Name: eggs. Price: 8

6 - Сделайте запрос DELETE через POSTMAN. Удалите товар с id = "1aa".

7 - Сделайте запрос PUT через POSTMAN. Измените товар с именем fish
Новое имя = "Wild salmon"
id = "56ggg"
price = 5

