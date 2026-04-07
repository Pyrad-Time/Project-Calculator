const display = document.getElementById("display")
const buttons = document.getElementsByClassName("calculator__button")
const array = [...buttons]



array.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonItem = e.target
        console.log(buttonItem.dataset)
    })
});
