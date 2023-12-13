const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\b[A-Za-z0-9]+@gmail\.com\b/;
gmailButton.onclick = ()=> {

    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML='все ок'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'все не ок'
        gmailResult.style.color = 'red'
    }
}
//
// //коментарии использую как подсказки для себя , таким образом , как только захажу посмотреть свой код вспоминаю то что изучал сам , на коментарии можете не оброщать внимания;))
//
// // const childBlock = document.querySelector('.child_block')
// // function childDrive(){
// //     childBlock.style.transform='translateX(0)'
// //     setTimeout(()=>{
// //         childBlock.style.transform='translateX(448px)'
// //     },2000)
// // }
// // childDrive()
// //через setTimout
//
// const childBlock = document.querySelector('.child_block')
// let startTime
// // startTime мспоьзуется для отслнживания времени , помогает сделать анимацию плавной и предсказуемой
// function moveBlock(timestamp) {
//     if (!startTime) {
//         startTime = timestamp
//     }
// //timestamp в функции moveBlock используется для вычесления прощедшего времени
//     const elapsedTime = timestamp - startTime
//     const progress = elapsedTime / 2000
// //  progress предстовляет сбой процент завершения анимации на основе завершенного времени
//     if (progress <= 1) {
//         const newPosition = 448 * progress
//         childBlock.style.transform = 'translateX($newPosition}px)'
//         requestAnimationFrame(moveBlock)
//     }
//     else {
//         childBlock.style.transform = 'translateX(448px)'
//         startTime = null
//         requestAnimationFrame(() => setTimeout(moveBlock, 2000))
//     }
// }
// moveBlock()
// //if (progress<=1){  проверяет продолжается ли анимация , если да , то позиция обновляется и плонтруется новый кадр
// //Когда анимация завершена (progress > 1), она сбрасывает позицию, обновляет начальное время и планирует выполнение анимации снова после задержки в 2 секунды с использованием setTimeout.
//
//
// // я не стану удалять то что сделал до этого, просто переделаю по вашему примеру , который по моему субъективнуму мнению лучше моего (красный квадрат)

const childBlock = document.querySelector('.child_block')
const parentBlockWidth = 449
const moveSpeedChildBlock = 0.1
let positionX = 0
let positionY = 0
const moveBLock = () =>{
    if (positionX < parentBlockWidth && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBLock,moveSpeedChildBlock)
    } else if (positionX >= parentBlockWidth && positionY < parentBlockWidth){
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBLock, moveSpeedChildBlock)
    } else if (positionY >= parentBlockWidth && positionX > 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBLock, moveSpeedChildBlock)
    }else if (positionX <=parentBlockWidth && positionY > 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBLock,moveSpeedChildBlock)
    }
}
moveBLock()


const secondsSE = document.querySelector('#secondsS')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let secondsS = 0
let interval

start.onclick = () =>{
    if (!interval){
        interval = setInterval(()=> {
            secondsS++;
            secondsSE.textContent = secondsS;
        },1000);
    }
};
stop.onclick = () =>{
    clearInterval(interval)
    interval = null
}

reset.onclick = () =>{
    clearInterval(interval)
    interval = 0
    secondsS = 0
    secondsSE.textContent = secondsS
}
