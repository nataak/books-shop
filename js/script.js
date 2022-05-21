
let key;
fetch('../js/data.json')
  .then((response) => {

    if (response.ok) {
      return response.json();
    } else {
      console.log('This is not 200OK')
      return Promise.reject(response);
    }
  }).then((data) => {
    // this is JSON


    const generateCard = (author, imageLink, title, price, description) => {
      return `
       <div class='cards'>
       
       <img src="${imageLink}" alt="JS book" />
       <div class="card-wrapper">
         <h2  class="author">${author} </h2>
         <p class="books-title">${title}</p>
         <span class="price">price: &#36; ${price}
          </span>
         <div>
           <button class="btn">Show More</button>
           <button class="btn btn-add">Add to Bag</button>
         </div>
       </div>
       <div class="popup-wrapper hidden">
         <p class="popup-text">${description}</p>
         <button class="btn btn-close">Close</button>
       </div>
       </div>
        `;
    }
    const cardHTMl = data.map((card) => {
      return generateCard(card.author, card.imageLink, card.title, card.price, card.description);

    }).join('');
    let books = document.createElement('div');
    books.classList.add('books');
    container.append(books);
    books.innerHTML = cardHTMl;

  }).catch((err) => {
    // Somtihing wrong
    console.warn('Something went wrong while receiving the information.');
    console.log(err);
  });




let frag = document.createDocumentFragment();
let wrapper = document.createElement("div");
wrapper.classList.add('wrapper');

document.body.insertAdjacentElement('afterbegin', wrapper);

let container = document.createElement("div");
container.classList.add('container');
frag.appendChild(container);

let header = document.createElement('header');
header.classList.add('header');
header.innerHTML = '<h1 class="title"><a href="#sub-header" class="title-link">Welcom to amazing Book shop!</a></h1>'
container.prepend(header);

let subtitle = document.createElement('h2');
subtitle.classList.add('sub-header');
subtitle.id = 'sub-header'
subtitle.innerText = 'Books Catalog';
container.append(subtitle);


wrapper.appendChild(frag);





