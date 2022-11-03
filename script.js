submitBtn = document.getElementById('submitButton') 
function validateInput(elementId, min, max) {
    const element = document.getElementById(`${elementId}`)
    const elementLabel = document.getElementById(`${elementId}Error`)

    element.addEventListener('keyup', (handler) => {
        const elementValue = element.value

        elementValue.length < min || elementValue.length > max
            ? elementLabel.classList.add('error-message-visible')
            : elementLabel.classList.remove('error-message-visible')

        elementLabel.classList.contains('error-message-visible')
            ? submitBtn.disabled = true
            : submitBtn.disabled = false
    })
}

validateInput('fullName', 5, 24)
validateInput('userName', 5, 16)
validateInput('email', 8, 24)
validateInput('password', 8, 16)
//! bug with the code --------------------------------
validateInput('loginEmail', 8, 24)
validateInput('loginPassword', 8, 16)

const checkPassword = document.getElementById('confirmedPassword')
checkPassword.addEventListener('keyup', (handler) => {
    const checkPasswordValue = checkPassword.value
    console.log("🚀 ~ file: script.js ~ line 31 ~ checkPassword.addEventListener ~ value", value)
    const passwordValue = document.getElementById('password').value
    console.log("🚀 ~ file: script.js ~ line 33 ~ checkPassword.addEventListener ~ value", value)
    const confirmedPasswordLabel = document.getElementById('confirmedPasswordError')

    !(checkPasswordValue === passwordValue)
        ? confirmedPasswordLabel.classList.add('error-message-visible')
        : confirmedPasswordLabel.classList.remove('error-message-visible')

    confirmedPasswordLabel.classList.contains('error-message-visible')
        ? regBtn.disabled = true
        : regBtn.disabled = false
})
