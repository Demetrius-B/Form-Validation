const submit = document.querySelector('button');
const grBtn = document.querySelector('#grBtn');
const sBtn = document.querySelector('#sBtn');
const nameField = document.querySelector('#fullName1');

class CheckValidity {
  constructor(input, type) {
    this.input = input;
    this.type = type;
    this.errors = [];
  }
  addError(message) {
    this.errors.push(message);
  }
  getMessage() {
    const status = this.input.validity

    if (status.typeMismatch) {
      this.addError('Invalid Entry');
    }
    if (status.tooLong) {
      this.addError('Entry is too long')
    }
    if (!this.input.value.match(/[A-Z]/g)) {
      this.addError('Entry must contain at least one uppercase')
    }
    return this.errors
  }
}


submit.addEventListener("click", (event) => {
  event.preventDefault();
  let validateName = new CheckValidity(nameField, "fullname");
  let errorMessages = validateName.getMessage();
  console.log(errorMessages);
});
