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

let кнопка = document.querySelector(".B1")

кнопка.addEventListener("click", function(){
    сменитьЦветШтуки()   
})
function сменитьЦветШтуки(){
    document.querySelector(".заголовок-секции").style.backgroundColor = "yellow"
}
//document.querySelector(".Главное-лого").innerHTML = "Hello world" 