
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


    const generateCard = (author, image, title, price, description) => {
      return `
       <div class='cards'>
       <h2>${author} </h2>
       <img src="${image}" alt="" />
       <p>${title}</p>
       <span>${price}</span>
       <p>${description}</p>
       </div>
        `;
    }
    const cardHTMl = data.map((card) => {
      return generateCard(card.author, card.image, card.title, card.price, card.description);

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

let header = document.createElement('h1');
header.classList.add('header');
header.innerText = 'Book Shop';
container.prepend(header);


wrapper.appendChild(frag);





