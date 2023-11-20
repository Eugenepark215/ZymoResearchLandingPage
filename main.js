const $form = document.querySelector('form');
const $firstName = document.querySelector('#first-name');
const $lastName = document.querySelector('#last-name');
const $company = document.querySelector('#company');
const $role = document.querySelector('#role');
const $comments = document.querySelector('#comments');
const $success = document.querySelector('#success');
const $sub = document.querySelector('.sub');
const $ul = document.querySelector('.ul');

const data = [
  {
    img: './images/Product1.webp',
    name: 'Lorem Ipsum',
    link: 'https://www.lipsum.com/'
  },
  {
    img: './images/Product2.png',
    name: 'Lorem Ipsum',
    link: 'https://www.lipsum.com/'
  },
  {
    img: './images/Product3.jpg',
    name: 'Lorem Ipsum',
    link: 'https://www.lipsum.com/'
  },
]

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

  const $productAnchor = document.createElement('a');
  $productAnchor.setAttribute('class', 'product-anchor');
  $productAnchor.setAttribute('href', entry.link)
  $productImgContainer.appendChild($productAnchor);

  const $img = document.createElement('img');
  $img.setAttribute('src', entry.img);
  $img.setAttribute('class', 'product-img');
  $productAnchor.appendChild($img)

  const $productTextContainer = document.createElement('div');
  $productTextContainer.setAttribute('class', 'product-text-container text-align-center');
  $li.appendChild($productTextContainer);

  const $h1 = document.createElement('h1');
  $h1.setAttribute('class', 'product-header');
  $h1.textContent = entry.name;
  $productTextContainer.appendChild($h1);

  const $a = document.createElement('a');
  $a.setAttribute('class', 'product-anchor');
  $a.setAttribute('href', entry.link)
  $a.textContent = 'Learn more'
  $productTextContainer.appendChild($a);

  return $li;
}


function renderProducts(event) {
  for (let i = 0; i < data.length; i++) {
    $ul.prepend(renderProductCard(data[i]));
  }
}

document.addEventListener('DOMContentLoaded', renderProducts)
