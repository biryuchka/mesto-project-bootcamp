function isValid (form, input, inputErrorClass, errorClass) {
  if (input.validity.valid) {
    clearInputError(form, input, inputErrorClass, errorClass);
  } else {
    showInputError(form, input, input.validationMessage, inputErrorClass, errorClass);
  }
}; 

function isInvalid (form, inputs, submitBtnSelector, inactiveBtnClass){
  let invalid = false;
  const submitBtn = form.querySelector(submitBtnSelector);
  inputs.forEach((input_) => {
      if (!input_.validity.valid) {
          invalid = true;
      }
  })
  
  if (invalid) {
      submitBtn.classList.add(inactiveBtnClass);
  } else {
      submitBtn.classList.remove(inactiveBtnClass);
  }
  formBtn.disabled = invalid;
};

function showInputError (form, input, errorText, inputErrorClass, errorClass) {
  const formError = form.querySelector(`.${input.name}-error`);
  input.classList.add(inputErrorClass);
  formError.textContent = errorText;
  formError.classList.add(errorClass);
};

function clearInputError(form, input, inputErrorClass, errorClass) {
  const formError = form.querySelector(`.${input.name}-error`);
  input.classList.remove(inputErrorClass);
  formError.classList.remove(errorClass);
  formError.textContent = '';
};

function setFormEventListeners(
  form, 
  inputSelector,
  submitBtnSelector,
  inactiveBtnClass,
  inputErrorClass,
  errorClass ) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  inputs.forEach((input_) => {
    input_.addEventListener('input', () => { isValid(form, input_, inputErrorClass, errorClass) });
  })
  form.addEventListener('input', () => { isInvalid(form, inputs, submitBtnSelector, inactiveBtnClass) });
}

export function enableValidation ({
  formSelector,
  inputSelector,
  submitBtnSelector,
  inactiveBtnClass,
  inputErrorClass,
  errorClass}) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form_) => {      
      setFormEventListeners(form_,
        inputSelector,
        submitBtnSelector,
        inactiveBtnClass,
        inputErrorClass,
        errorClass)
  });
};