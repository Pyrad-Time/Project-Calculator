const display = document.getElementById("display")
const buttons = document.getElementsByClassName("calculator__button")
const array = [...buttons]



let firstNumber = null
let operator = null
let secondNumber = null

function add (a, b) {
    return console.log(a + b)
}
function subtract (a, b) {
    return console.log(a - b)
}
function multiply (a, b) {
    return console.log(a * b)
}
function divide (a, b) {
    return console.log(a / b)
}   


array.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonItem = e.currentTarget
        const dataAction = buttonItem.dataset.action
        const dataNumber = buttonItem.dataset.number
        const number = Number(dataNumber)
        
        if (dataNumber) {
            if(!operator) {
                firstNumber = number
            } else {
                secondNumber = number
            }
        }

        if (dataAction === "operator--add") {
            operator = "+"
        }
        
        if (dataAction === "operator--subtract") {
            operator = "-"
        }
        
        if (dataAction === "operator--multiply") {
            operator = "x"
        }
        
        if (dataAction === "operator--divide") {
            operator = "/"
        }


        if(dataAction === "operator--equal") {
            switch(operator) {
                case "+": 
                const result = add(firstNumber, secondNumber)
                break
            }
        }


    })
});

