// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

// function onMouseMove(event) {
//    mouseMoveCbInvocationCounter += 1;

//    coordsOutputRef.textContent = `
//      Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//      X: ${event.clientX},
//      Y:${event.clientY}
//    `;
// }

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 500));
// function onInputChange(event) {
//    inputCbInvocationCounter += 1;

//    outputRef.textContent = `
//     Кількість викликів onInputChange: ${inputCbInvocationCounter},
//     Значення: ${event.target.value}
//   `;
// }

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

input.addEventListener('input', _.debounce(onInput, 300))
function onInput(event) {
   inputCbInvocationCounter += 1;

   output.textContent = `
    Кількість викликів onInputChange: ${inputCbInvocationCounter},
    Значення: ${event.target.value}
  `;
}