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
  const data = JSON.parse(localStorage.getItem('formInputsData'));
  if (data) {
    userName.value = data.name;
    email.value = data.email;
    userMessage.value = data.message;
  }
};

form.addEventListener('input', () => {
  formInputsData.name = userName.value;
  formInputsData.email = email.value;
  formInputsData.message = userMessage.value;
  localStorage.setItem('formInputsData', JSON.stringify(formInputsData));
});
window.onload = () => {
  const data = JSON.parse(localStorage.getItem('formInputsData')); // Corrected key name
  if (data) {
    userName.value = data.name; // Use the retrieved data instead of formInputsData
    email.value = data.email;
    userMessage.value = data.message;
  }
};
