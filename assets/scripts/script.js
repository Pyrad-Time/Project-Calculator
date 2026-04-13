const display = document.getElementById("display__data")
const buttons = document.getElementsByClassName("calculator__button")
const arrayButtons = [...buttons]





function add (a, b) {
    
    result = Number(a) + Number(b)
    return result
}
function subtract (a, b) {
    result = Number(a) - Number(b)
    return result
}
function multiply (a, b) {
    result = Number(a) * Number(b)
    return result
}
function divide (a, b) {
    result = Number(a) / Number(b)
    return result
}   

function percent (a, b) {
    let decimal = (a||b)/100
    console.log(decimal, 'decimal')
    result =  decimal * (a||b)
    return result
}

let displayValue = ""

let firstSentence = ''
let operator = null
let secondSentence = ''
let result = 0

arrayButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonItem = e.currentTarget
        const dataAction = buttonItem.dataset.action
        const dataNumber = buttonItem.dataset.number
        const number = Number(dataNumber)
        
       


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

        if (dataAction === "operator--percent") {
            operator = "%"
        }

        
        if (dataNumber !== undefined) {
            if(operator === null){
                firstSentence += number
            } else {
                secondSentence = secondSentence + number
            }
        }
          
console.log(firstSentence)
console.log(secondSentence)
       
        if(dataAction === "operator--equal") {
            //console.log(firstNumber)
            //console.log(secondNumber)
            //console.log(operator)
            switch (operator) {
                case '+':
                    result = add(firstSentence, secondSentence)
                    display.textContent = result
                    firstSentence = result
                    secondSentence = ''
                    break;
            
                case '-':
                    result = subtract(firstSentence, secondSentence)
                    display.textContent = result
                    firstSentence = result
                    secondSentence = ''
                    break;
                case '/':
                    result = divide(firstSentence, secondSentence)
                    display.textContent = result
                    firstSentence = result
                    secondSentence = ''
                    break;
                case 'x':
                    result = multiply(firstSentence, secondSentence)
                    display.textContent = result
                    firstSentence = result
                    secondSentence = ''
                    break;
                case '%':
                    result = percent(firstSentence, secondSentence)
                    display.textContent = result
                    firstSentence = result
                    secondSentence = ''
                    break;
            }

        }


    })
});

