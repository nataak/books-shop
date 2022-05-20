
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
    for (key in data) {
    }


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





