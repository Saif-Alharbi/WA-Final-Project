submitBtn = document.getElementById("submitButton");
function validateInput(elementId, min, max) {
  const element = document.getElementById(`${elementId}`);
  const elementLabel = document.getElementById(`${elementId}Error`);

  element.addEventListener("keyup", (handler) => {
    const elementValue = element.value;

    elementValue.length < min || elementValue.length > max
      ? elementLabel.classList.add("error-message-visible")
      : elementLabel.classList.remove("error-message-visible");
    elementValue.length < min || elementValue.length > max
      ? element.classList.add("input-field-error")
      : element.classList.remove("input-field-error");
    elementLabel.classList.contains("error-message-visible")
      ? (submitBtn.disabled = true)
      : (submitBtn.disabled = false);
  });
}

const checkLogin = document.getElementById("loginEmail");
if (checkLogin) {
  validateInput("loginEmail", 8, 24);
  validateInput("loginPassword", 8, 16);
}
const checkReg = document.getElementById("fullName");
if (checkReg) {
  validateInput("fullName", 5, 24);
  validateInput("userName", 5, 16);
  validateInput("email", 8, 24);
  validateInput("password", 8, 16);
  const checkPassword = document.getElementById("confirmedPassword");
  checkPassword.addEventListener("keyup", (handler) => {
    const checkPasswordValue = checkPassword.value;
    const passwordValue = document.getElementById("password").value;
    const confirmedPasswordLabel = document.getElementById(
      "confirmedPasswordError"
    );

    !(checkPasswordValue === passwordValue)
      ? confirmedPasswordLabel.classList.add("error-message-visible")
      : confirmedPasswordLabel.classList.remove("error-message-visible");    
    !(checkPasswordValue === passwordValue)
      ? checkPassword.classList.add("input-field-error")
      : checkPassword.classList.remove("input-field-error")
    confirmedPasswordLabel.classList.contains("error-message-visible")
      ? (submitBtn.disabled = true)
      : (submitBtn.disabled = false);
  });
}
const modal = document.getElementById("feedback-modal");
const btn = document.getElementById("add-feedback");
const span = document.getElementById("close-btn");
btn.onclick = function() {
  modal.style.display = "block"
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function closeModal() {
  modal.style.display = "none";
  document.getElementById("feedback-field").value="";
}
