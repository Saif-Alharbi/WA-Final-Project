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

const checkLogin = document.getElementById('loginEmail')
if(checkLogin){
    validateInput('loginEmail', 8, 24)
    validateInput('loginPassword', 8, 16)
}
const checkReg = document.getElementById('fullName')
if(checkReg){
    validateInput('fullName', 5, 24)
    validateInput('userName', 5, 16)
    validateInput('email', 8, 24)
    validateInput('password', 8, 16)
    const checkPassword = document.getElementById('confirmedPassword')
    checkPassword.addEventListener('keyup', (handler) => {
        const checkPasswordValue = checkPassword.value
        const passwordValue = document.getElementById('password').value
        const confirmedPasswordLabel = document.getElementById('confirmedPasswordError')

        !(checkPasswordValue === passwordValue)
            ? confirmedPasswordLabel.classList.add('error-message-visible')
            : confirmedPasswordLabel.classList.remove('error-message-visible')

        confirmedPasswordLabel.classList.contains('error-message-visible')
            ? submitBtn.disabled = true
            : submitBtn.disabled = false
    })
}

