let filled = false

const submitButton = document.querySelector("button")
const inputList = document.querySelectorAll("input")
const body = document.querySelector("body")

body.addEventListener('mouseover', colorFilled)
submitButton.addEventListener('click', passwordValidate)

function colorFilled() {
    filledSet()
    if (filled) {
        submitButton.classList.remove('invalid')
        submitButton.classList.add('valid')
    } else {
        submitButton.classList.remove('valid')
        submitButton.classList.add('invalid')
    }
}

function filledSet() {
    filled = true
    inputList.forEach((input) => {
        if (input.value.length === 0) {
            filled = false
        }
    })
    if (inputList[4].value.length < 8) {
        filled = false
    }
    if (inputList[4].value !== inputList[5].value) {
        filled = false
    }
}

function passwordValidate(e) {
    if (inputList[4].value !== inputList[5].value && inputList[4].value.length >= 8) {
        alert("Confirm password must match required password.")
        e.preventDefault()
    }
}
