const display = document.getElementById("display__data")
const buttons = document.getElementsByClassName("calculator__button")
const arrayButtons = [...buttons]


let state = {
    current: '', // numero atual
    previous: '',   // numero anterior
    operator: null
}


function add (a, b) {
    let add = Number(a) + Number(b)
    state.current = add
}
function subtract (a, b) {
    let subtract = (Number(a)) - (Number(b))
    state.current = subtract
}
function multiply (a, b) {
    let multiply = Number(a) * Number(b)
    state.current = multiply
}
function divide (a, b) {
    let divide = Number(a) / Number(b)
    state.current = divide
}   

function percent (a, b) {
    let decimal = (a||b)/100
    console.log(decimal, 'decimal')
    result =  decimal * (a||b)
    return result
}

function clean () {
    state = {
        current: '',
        previous: '',
        operator: null
    }
}


function setOperator(dataAction) {
    switch (dataAction) {
        case "operator--add":
            state.operator = "+"
            setPrevious()
            break;
    
        case "operator--subtract":
            state.operator = "-"
            setPrevious()
            break;

        case "operator--multiply":
            state.operator = "x"
            setPrevious()
            break;

        case "operator--divide":
            state.operator = "/"
            setPrevious()
            break;

        case "operator--percent":
            state.operator = "%"
            setPrevious()
            break;
        case "operator--clean":
            clean()
            break
            
    }
}

function setCurrent(number) {
    return state.current = state.current + number
}

function setPrevious() {
    state.previous = state.current
    state.current = ''
}

function render() {
    if(state.current !== '') {
        display.textContent = state.current
    }
    if(state.operator !== null && state.previous !== '') {
        display.textContent = `${state.previous} ${state.operator}`
    }

    if(state.current !== '' && state.operator !== null && state.previous !== '') {
        display.textContent = `${state.previous} ${state.operator} ${state.current}`
    }
    
}

arrayButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonItem = e.currentTarget
        const dataAction = buttonItem.dataset.action
        const number = buttonItem.dataset.number
        console.log(number)
        if(dataAction === "operator--equal") {
            if (state.operator === "+")
                add(state.previous, state.current)
            if (state.operator === "-")
                subtract(state.previous, state.current)
            if (state.operator === "/")
                divide(state.previous, state.current)
            if (state.operator === "x")
                multiply(state.previous, state.current)
            if (state.operator === "%")
                percent(state.previous, state.current)
            
        }

        if (number || number === 0) {
                setCurrent(number)
        }
        
        if(dataAction) {
            if(state.operator !== null) {
                state.operator = null
            }
            setOperator(dataAction)
         
            }

        console.log(state)

        render()
    })
});

