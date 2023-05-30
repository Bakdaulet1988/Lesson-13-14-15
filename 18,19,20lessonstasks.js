// //1.
// let number = +prompt("Введите число: ")
// console.log(number % 2 ? 'нечетное' : 'четное')

// //2.
// let num1 = +prompt("Введите число: ")
// let num2 = +prompt("Введите число: ")
// // if (num1 > num2) {
// //     console.log("num1 больше")
// // } else {
// //     console.log("num2 больше")
// // }
// console.log(num1 > num2 ? 'num1 больше' : 'num2 больше')

// //3.
// let year = prompt("Сейчас високосный год или нет? Введите текущий год")
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     console.log('Високосный')
// } else {
//     console.log('невисокосный ')
// }

// //4.
// let variable = null
// if (typeof variable  === "string") {
//     console.log("Переменная является строкой")
// } else if (typeof variable  === 'number') {
//     console.log("Переменная является числом")
// } else {
//     console.log("Переменная не является строкой или числом")
// }

// //5.
// let hour = +prompt("Укажите время")
// if (hour >= 6 && hour <= 12)  {
//     console.log("Доброе утро")
// } else if (hour > 12 && hour <= 18)  {
//     console.log("Добрый день")
// } else if (hour > 18) {
//     console.log("Доброй ночи")
// }

// //6.
// let num1 = +prompt("Введите число: №1 ")
// let num2 = +prompt("Введите число: №2 ")
// let num3 = +prompt("Введите число: №3 ")
// if (num1 > num2 && num1 > num3 ) {
//     console.log("num1 больше")
// } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 больше")
// } else if (num3 > num1 && num3 > num2) {
//     console.log("num3 больше")
// }

// //7.
// let login = "aaa"
// let password = 1233

// let usersLogin = prompt("Введите свой логин")
// let userspassword = +prompt("Введите свой пароль")
// if (login === usersLogin && password === userspassword ) {
//     console.log("Доступ разрешен")
// } else {
//     console.log("Доступ запрешен")
// }

//8.
// let month = +prompt("Введите число месяца")
// if (month === 1) {
//     console.log("Январь")
// } else if (month === 2) {
//     console.log("Февраль")
// } else if (month === 3) {
//     console.log("Март")
// } else if (month === 4) {
//     console.log("Апрель")
// } else if (month === 5) {
//     console.log("Май")
// } else if (month === 6) {
//     console.log("Июнь")
// } else if (month === 7) {
//     console.log("Июль")
// } else if (month === 8) {
//     console.log("Август")
// } else if (month === 9) {
//     console.log("Сентябрь")
// } else if (month === 10) {
//     console.log("Октябрь")
// } else if (month === 11) {
//     console.log("Ноябрь")
// } else if (month === 12) {
//     console.log("Декабрь")
// } else {
//     console.log("Всего 12 месяцев в году")
// }

//9.
// let age = +prompt("Укажите возраст")
// if (age <= 12)  {
//     console.log("Детский возраст")
// } else if (age > 12 && age <= 18) {
//     console.log("Подростковый возраст")
// } else if (age > 18 && age <= 65) {
//     console.log("Взрослый возраст")
// } else if (age >= 65) {
//     console.log("Пожилой возраст")
// }

//10.
// let season = +prompt("Какой сейчас месяц? Введи цифру")
// if (season === 12 || season === 1 || season === 2) {
//     console.log("Зима")
// } else if (season === 3 || season === 4 || season === 5) {
//     console.log("Весна")
// } else if (season === 6 || season === 7 || season === 8) {
//     console.log("Лето")
// } else if (season === 9 || season === 10 || season === 11) {
//     console.log("Осень")
// } else {
//     console.log("Всего четыре сезона!")
// }


////////////////medium task
//1.
// let num = +prompt("Сколько будет гостей?")
// if (num % 2) {
//     console.log(num)
// } else {
//     console.log(num / 2)
// }

//2.
// let apples = +prompt("Сколько будет яблок?") // 6
// if (apples % 3) { // 
//     console.log("непоровну")
// } else {
//     console.log("Поровну")
// }

//3.
// let a = +prompt("A") //2
// let b = +prompt("B") //2
// let c = +prompt("C") //10
// if (a + b > c && a + c > b && b + c > a) {
//     console.log("Да")
// } else {
//     console.log("Нет")
// }

//4.
// let a = +prompt("A") //2
// let b = +prompt("B") //2
// let c = +prompt("C") //10

// if (a + b > c && a + c > b && b + c > a) {
//     if (a === b && b === c && a === c) {
//         console.log("Равносторонн")
//     } else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
//         console.log("Равнобедр")
//     } else {
//         console.log("Разносторонн")
//     }
// } 
// else  {
//     console.log("Несуществ")
// }

//5.
let weight = +prompt("Введите вес товара")
let delivery_country = +prompt("Введите страну доставки")

if (weight <= 1) {
    console.log("стоимость доставки составляет 10 долларов")
} else if (weight > 1 || weight <= 5 && delivery_country == "USA") {
    console.log("стоимость доставки составляет 20 долларов")
} else if (weight > 1 || weight <= 5 && delivery_country != "USA") {
    console.log("стоимость доставки составляет 30 долларов") 
} else if (weight > 5 && delivery_country =="") {
    console.log("стоимость доставки составляет 50 долларов") 
}
