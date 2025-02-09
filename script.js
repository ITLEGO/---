console.log("Hallo world")
let xxx =  31235 * 2/100 - 57
console.log (xxx)

let yyy = Math.sqrt(8)
// Math.sqrt(17) 
// Math.sin(2) 

console.log("Корень из 8 = " , yyy)
console.log("Вася")
console.log(100 + 2)
console.log("100" + 2)
let имя="Савва"
let возрост=333
console.log("мня зовут", имя, "и мне",возрост, "лет")
console.log("мня зовут", имя, "и мне",возрост, "лет")
console.log("мня зовут " + имя, "и мне",возрост, "лет")
console.log(`мня зовут ${имя} и мне ${ возрост} лет`)









// придумали переменную "кнопка" которая ведет на кнопку "B1"
let кнопка = document.querySelector(".B1")

// делает так что нажатие на "кнопка" вызывает команду сменитьЦветШтуки() 
кнопка.addEventListener("click", function(){
    сменитьЦветШтуки()   
})

// новая функция -- меняет backgroundColor .заголовок-секции на "yellow"
function сменитьЦветШтуки(){
    document.querySelector(".заголовок-секции").style.backgroundColor = "yellow"
}

// сделать так чтоб цвет менялся на зеленый
// сделать чтоб была команда "сменитьЦветЛого()" -- меняет цвет логотипа на другой
// привязать сменитьЦветЛого() к кнопке заказать проект


//document.querySelector(".Главное-лого").innerHTML = "Hello world" 