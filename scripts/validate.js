const arrayValidation ({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save-button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'form__error_visible'
  });

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  const showInputError = (formElement, inputElement, errorMessage, parameter) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(parameter.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(parameter.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(parameter.inputErrorClass);
  errorElement.classList.remove(parameter.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, parameter) => {
  if (!inputElement.validity.valid || inputElement.validity.typeMismatch) {
    showInputError(formElement, inputElement, inputElement.validationMessage, parameter);
  } else {
    hideInputError(formElement, inputElement, parameter);
  }
};


const setEventListener = (formElement, parameter) => {
  const inputList = Array.from(formElement.querySelectorAll(parameter.inputSelector));
  const buttonElement = formElement.querySelector(parameter.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, parameter);
      oggleButtonState(inputList, buttonElement, parameter);
    });
  });
}; 

const toggleButtonState = (inputList, buttonElement, parameter) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(parameter.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(parameter.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

const enableValidation = (parameter) => {
  const formList = Array.from(document.querySelectorAll(parameter.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListener(formElement, parameter);  
  });
};

enableValidation(arrayValidation);