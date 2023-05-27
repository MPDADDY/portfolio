const userName = document.getElementById('name');
const email = document.getElementById('email');
const userMessage = document.getElementById('comments');
const form = document.getElementById('contact_form');

const formInputsData = {
  name: '',
  email: '',
  message: '',
};
form.addEventListener('input', () => {
  formInputsData.name = userName.value;
  formInputsData.email = email.value;
  formInputsData.message = userMessage.value;
  localStorage.setItem('formInputsData', JSON.stringify(formInputsData));
});
window.onload = () => {
  const data = JSON.parse(localStorage.getItem('formInputData'));
  if (data) {
    userName.value = formInputsData.name;
    email.value = formInputsData.email;
    userMessage.value = formInputsData.message;
  }
};
