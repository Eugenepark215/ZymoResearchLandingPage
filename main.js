const $form = document.querySelector('form');
const $firstName = document.querySelector('#first-name');
const $lastName = document.querySelector('#last-name');
const $company = document.querySelector('#company');
const $role = document.querySelector('#role');
const $comments = document.querySelector('#comments');
const $success = document.querySelector('#success');
const $sub = document.querySelector('.sub');

// const data = [
//   {
//     img: './icons/checkmark_icon.jpg',
//     name: 'Lorem Ipsum',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
//     link: 'https://www.lipsum.com/'
//  },
//   {
//     img: './icons/bullseye_icon.jpg',
//     name: 'Lorem Ipsum',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
//     link: 'https://www.lipsum.com/'
//   },
//   {
//     img: './icons/graphs_icon.jpg',
//     name: 'Lorem Ipsum',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
//     link: 'https://www.lipsum.com/'
//   },
// ]

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

function renderProductCard(entry) {
  const $li = document.createElement('li');

  const $productImgContainer = document.createElement('div');
  $productImgContainer.setAttribute('class', 'product-img-container');
  $li.appendChild($productImgContainer);

  const $img = document.createElement('img');
  $img.setAttribute('src', './icons/checkmark_icon.jpg');
  $img.setAttribute('class', 'product-img');
  $productImgContainer.appendChild($productImg)

  const $productTextContainer = document.createElement('div');
  $productTextContainer.setAttribute('class', 'product-text-container');
  $li.appendChild($productTextContainer);

  const $h1 = document.createElement('h1');
  $h1.setAttribute('class', 'product-header');
  $h1.textContent = 'Lorem Ipsum';
  $productTextContainer.appendChild($h1);

  const $p = document.createElement('p');
  $p.setAttribute('class', 'product-text');
  $h1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,';
  $productTextContainer.appendChild($p);

  const $a = document.createElement('a');
  $a.setAttribute('class', 'product-anchor');
  $a.setAttribute('href', 'https://www.lipsum.com/')
  $productTextContainer.appendChild($a);

  return $li;
}
