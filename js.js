// Опишіть своїми словами різницю між функціями setTimeout() і setInterval().
//  setInterval() запустить выполнение функции можно больше одного раза и может регулярно повторять её через указанный интервал времени. так же остановить исполнение можно вызовом: clearInterval(timerId)
// setTimeout() запускается только один раз за вызов функции, а значит после завершения выполнения функции он прекратит работу. 
// Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
// Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
// что б функция setInterval() остановилась, если в ней нет четко указанного интервала времени


// Завдання
// Реалізувати програму, яка циклічно показує різні картинки. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
// Технічні вимоги:

// У папці banners лежить HTML код та папка з картинками.
// При запуску програми на екрані має відображатись перша картинка.
// Через 3 секунди замість неї має бути показано друга картинка.
// Ще через 3 секунди – третя.
// Ще через 3 секунди – четверта.
// Після того, як будуть показані всі картинки - цей цикл має розпочатися наново.
// Після запуску програми десь на екрані має з'явитись кнопка з написом Припинити.
// Після натискання на кнопку Припинити цикл завершується, на екрані залишається показаною та картинка, яка була там при натисканні кнопки.
// Поруч із кнопкою Припинити має бути кнопка Відновити показ, при натисканні якої цикл триває з тієї картинки, яка в даний момент показана на екрані.
// Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

const img = document.querySelector(".images-wrapper")
const stopBTN = document.querySelector("#stop")
const resumeBTN =  document.querySelector("#resume")
const timer = document.querySelector("#timer")
let timeToNext = 3000
let currentImgIndex = 0
let leftToNext = timeToNext
let interval = createInterval()
function goToNext(){
 img.children[currentImgIndex].hidden = true
 currentImgIndex++
 if(currentImgIndex === img.children.length){
     currentImgIndex = 0
 }
 img.children[currentImgIndex].hidden = false
}

function createInterval(){
    return setInterval(()=> {
    leftToNext -= 10
    if(leftToNext <= 0){
        leftToNext = timeToNext
        goToNext()
    }
    timer.textContent = (leftToNext / 1000).toFixed(3)
    }, 10)
}

stopBTN.addEventListener("click", ()=> clearInterval(interval))

resumeBTN.addEventListener("click", function(){
    clearInterval(interval)
    interval = createInterval()
})