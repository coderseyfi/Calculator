const firstNum = document.querySelector('.firstNum')
const operation = document.getElementById('operation')
const opVal = document.querySelector('.opt-val')
const secondNum = document.querySelector('.secondNum')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const form = document.querySelector('.container')

window.addEventListener('load',()=>{
    form.classList.add('scale')
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    switch (operation.value) {
        case '+':
            result.textContent = `Result: ${Number(firstNum.value) + Number(secondNum.value)}`
            break;
        case '-':
            result.textContent = `Result: ${Number(firstNum.value) - Number(secondNum.value)}`
            break;
        case '*':
            result.textContent = `Result: ${Number(firstNum.value) * Number(secondNum.value)}`
            break;
        case '/':
            result.textContent = `Result: ${Number(firstNum.value) / Number(secondNum.value)}`
            break;
        default:
            break;
    }
})