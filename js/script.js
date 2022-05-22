let key;
fetch('./js/data.json')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log('This is not 200OK');
      return Promise.reject(response);
    }
  })
  .then((data) => {
    // this is JSON

    const generateCard = (author, imageLink, title, price, description) => {
      return `
       <div class='cards' value="1" data="${price}">
       
       <img src="${imageLink}" alt="JS book" />
       <div class="card-wrapper" >
         <h2  class="author">${author} </h2>
         <p class="books-title">${title}</p>
         <span class="price">price:  ${price} &#36;
          </span>
         <div>
           <button class="btn btn-more" data-toggle-id="open">Show More</button>
           <button class="btn btn-add">Add to Cart</button>
         </div>
       </div>
       <div class="popup-wrapper hidden" >
         <p class="popup-text">${description}</p>
         <button class="btn btn-close btn-p">Close</button>
       </div>
       </div>
        `;
    };

    const cardHTMl = data
      .map((card) => {
        return generateCard(
          card.author,
          card.imageLink,
          card.title,
          card.price,
          card.description
        );
      })
      .join('');
    let books = document.createElement('div');
    books.classList.add('books');
    container.append(books);
    books.innerHTML = cardHTMl;
  })
  .catch((err) => {
    // Somtihing wrong
    console.warn('Something went wrong while receiving the information.');
    console.log(err);
  });

let frag = document.createDocumentFragment();
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

document.body.insertAdjacentElement('afterbegin', wrapper);

let container = document.createElement('div');
container.classList.add('container');
frag.appendChild(container);

let header = document.createElement('header');
header.classList.add('header');
header.innerHTML =
  '<h1 class="title"><a href="#sub-header" class="title-link">Welcom to amazing Book shop!</a></h1>';
container.prepend(header);

let subtitle = document.createElement('h2');
subtitle.classList.add('sub-header');
subtitle.id = 'sub-header';
subtitle.innerText = 'Books Catalog';
container.append(subtitle);

let chart = document.createElement('button');
chart.classList.add('chart');
chart.innerHTML = 'Cart';
header.append(chart);

wrapper.appendChild(frag);

window.addEventListener('load', function () {
  // BAG

  let products = document.querySelectorAll('.cards');

  let buttons = document.querySelectorAll('.btn-add');
  let openBtn = document.querySelector('.chart');

  function createCart() {
    let cart = document.createElement('div'),
      field = document.createElement('div'),
      heading = document.createElement('h3'),
      wrap = document.createElement('div'),
      card = document.createElement('div'),
      close = document.createElement('button'),
      abs = document.createElement('button');

    cart.classList.add('cart');
    field.classList.add('field');
    heading.classList.add('heading');
    close.classList.add('btn-close');
    close.classList.add('btn-cart');
    abs.classList.add('btn-close');
    abs.classList.add('btn-cart');
    abs.classList.add('btn-corfirm');
    wrap.classList.add('wrap');

    heading.textContent = 'In Cart:';
    close.textContent = 'Close';
    abs.textContent = 'confirm';
    header.append(cart);

    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(wrap);
    wrap.appendChild(close);
    wrap.appendChild(abs);
  }
  createCart();

  let fiel = document.querySelector('.field'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.btn-close');

  function openCart() {
    cart.style.display = 'block';
    cart.style.display = 'flex';
  }

  function closeCart() {
    cart.style.display = 'none';
  }

  openBtn.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);
  buttons.forEach(function (item, i, arr) {
    item.addEventListener('click', function () {
      let item = products[i].cloneNode(true);

      let btn = item.querySelector('.btn');
      let btn2 = item.querySelector('.btn-add');

      let closeBtn = document.createElement('div');
      closeBtn.classList.add('removeB');
      closeBtn.textContent = 'X';
      item.appendChild(closeBtn);

      fiel.appendChild(item);
      btn.remove();
      btn2.remove();

      function closeB() {
        item.style.display = 'none';
      }
      closeBtn.addEventListener('click', closeB);
    });
  });

  let popup = document.querySelectorAll('.popup-wrapper');

  popup.forEach(function (item, i) {
    let btn = item.querySelector('button');
    function closePopup() {
      item.style.display = 'none';
    }
    btn.addEventListener('click', closePopup);
  });

  let btnMore = document.querySelectorAll('.btn-more');

  for (let i = 0; i < btnMore.length; i++) {
    btnMore[i].addEventListener('click', function () {
      display(popup[i], 'block');
    });
  }

  function display(elems, value) {
    value = value || 'block';
    if (elems instanceof HTMLElement) {
      elems.style.display = value;
      return;
    }
  }
});
