import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


dataFromLocalStorage();

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  formData = {}
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}
