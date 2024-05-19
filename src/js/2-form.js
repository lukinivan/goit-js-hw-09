// const formEl = document.querySelector('.feedback-form');
// const feedbackId = 'feedback-form-state';
// const formData = { email: '', message: '' };

// checkLocalStorage();

// formEl.addEventListener('input', e => {
//   if (e.target.nodeName === 'INPUT') formData.email = e.target.value;
//   if (e.target.nodeName === 'TEXTAREA') formData.message = e.target.value;
//   localStorage.setItem(feedbackId, JSON.stringify(formData));
// });

// formEl.addEventListener('submit', e => {
//   e.preventDefault();
//   const form = e.target;
//   const email = form.elements.email.value;
//   const message = form.elements.message.value;

//   if (email === '' || message === '')
//     return alert('All form fields must be filled in');

//   localStorage.removeItem(feedbackId);
//   formEl.reset();
// });

// function checkLocalStorage() {
//   if (localStorage.getItem(feedbackId) === null) return;

//   const savedData = JSON.parse(localStorage.getItem(feedbackId));
//   formEl.elements.email.value = savedData.email;
//   formData.email = savedData.email;

//   formEl.elements.message.value = savedData.message;
//   formData.message = savedData.message;
// }

// ! Цей код мені запропонував AI зробивши рефакторинг того що я написав, я вирішив його сюди помістити просто за для пам'яті про нього, та і вам показати)

const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.elements.email;
const messageTextarea = formEl.elements.message;
const feedbackId = 'feedback-form-state';
const formData = { email: '', message: '' };

checkLocalStorage();

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const saveToLocalStorage = debounce(() => {
  localStorage.setItem(feedbackId, JSON.stringify(formData));
}, 300); // Затримка 300 мілісекунд

formEl.addEventListener('input', e => {
  if (e.target.type === 'email') formData.email = emailInput.value;
  if (e.target.type === 'textarea') formData.message = messageTextarea.value;
  saveToLocalStorage();
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!formEl.checkValidity()) {
    return alert('All form fields must be filled in');
  }

  localStorage.removeItem(feedbackId);
  formEl.reset();
});

function checkLocalStorage() {
  const savedData = JSON.parse(localStorage.getItem(feedbackId));
  if (!savedData) return;
  emailInput.value = formData.email = savedData.email;
  messageTextarea.value = formData.message = savedData.message;
}
