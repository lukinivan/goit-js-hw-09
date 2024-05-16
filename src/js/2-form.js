const formEl = document.querySelector('.feedback-form');
const inputId = 'Email';
const textareaId = 'Message';

formEl.addEventListener('input', e => {
  if (e.target.nodeName === 'INPUT')
    localStorage.setItem(inputId, e.target.value);
  if (e.target.nodeName === 'TEXTAREA')
    localStorage.setItem(textareaId, e.target.value);
});

formEl.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '')
    return alert('All form fields must be filled in');

  localStorage.removeItem(inputId);
  localStorage.removeItem(textareaId);
  formEl.reset();
});
