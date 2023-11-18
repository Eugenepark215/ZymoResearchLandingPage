const $form = document.querySelector('form');
const $firstName = document.querySelector('#first-name');
const $lastName = document.querySelector('#last-name');
const $company = document.querySelector('#company');
const $role = document.querySelector('#role');
const $comments = document.querySelector('#comments');
const $success = document.querySelector('#success');

function handleSubmit(event) {
  event.preventDefault();
  const formValue = {
    firstName: $firstName.value,
    lastName: $lastName.value,
    company: $company.value,
    role: $role.value,
    comments: $comments.value
  }
  console.log(formValue);
  $form.reset();
  $success.className = 'text-align-center';
}

$form.addEventListener('submit', handleSubmit);
