const submit = document.querySelector('.submitBtn');
const grBtn = document.querySelector('#grBtn');
const sBtn = document.querySelector('#sBtn');
const nameField = document.querySelector('#fullName1');


submit.addEventListener("click", (event) => {
  if (nameField.validity.typeMismatch) {
    nameField.setCustomValidity("ERRORR")
  } else {
    nameField.setCustomValidity("")
  }
})
