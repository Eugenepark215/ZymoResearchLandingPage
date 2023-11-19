const $form = document.querySelector('form');
const $firstName = document.querySelector('#first-name');
const $lastName = document.querySelector('#last-name');
const $company = document.querySelector('#company');
const $role = document.querySelector('#role');
const $comments = document.querySelector('#comments');
const $success = document.querySelector('#success');
const $sub = document.querySelector('.sub');

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

  $sub.className = 'sub hidden';
  $success.className = 'text-align-center';

  $success.style.opacity = 1;
  let opacity = 1;
  setInterval(() => {
    setInterval(() => {
      if (opacity > 0) {
        opacity -= 0.05;
        $success.style.opacity = opacity;
      }
    }, 200)
  }, 1000)
}

$form.addEventListener('submit', handleSubmit);
