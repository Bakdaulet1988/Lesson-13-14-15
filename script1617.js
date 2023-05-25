/////ALERT

// console.log(11111111111)
// alert("Hello World!")
// console.log("HI!")



/////PROMPT
// prompt("What is your name?")

// let name = prompt("What is your name?")
// alert("Okay, your name is " + name) 

/////CONFIRM
// let isTrue = confirm("are you human?")
// alert(isTrue)

//1.
let name = prompt('как вас зовут?', "")
let age = prompt('сколько вам лет?', "")
alert(name + ", " + age)

//2.
let num1 = prompt('введите первое число', "");
let num2 = prompt('введите второе число', "");
console.log(num1 / num2);

//3.
let notice = confirm("Согласны ли вы получать уведомления?")
console.log(notice)

//4.
let yourAge = confirm("Сколько вам лет?")
console.log(yourAge)

//5.
let number = prompt('какое число?',)
alert(3 * 3 * number)

//6.
let hometown = prompt('Откуда вы родом?', "")
let city = prompt('Из какого города?', "")
alert(hometown + ", " + city)

//7.
let num3 = prompt('Введите любое число.', "")
let num4 = prompt('Введите любое число.', "")
let num5 = prompt('Введите любое число.', "")
alert((Number(num3) + Number(num4) + Number(num5))/3)

//8.
let hours = +prompt('Сколько сейчас часов?', "")
let minutes = +prompt('сколько минут?', "")
let seconds = +prompt('секунд?', "")
alert(hours*3600 + minutes*60 +seconds)

//9.
let celsius = +prompt('сколько сейчас градусов по цельсию?', "")
alert("по Фаренгейту " + (celsius *(9/5) + 32)) 
alert("по Кельвину " + (celsius + 273.15))

//10.
let radius = +prompt('Радиус круга?', "")
const pi = 3.14
alert(("Площадь круга " + (pi * radius * radius)) + "м2")

