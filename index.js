// Write your code here!
// let element = document.createElement('div');
// document.body.appendChild(element)

// let ul = document.createElement('ul')
// for (let i=0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// };

// element.appendChild(ul)

// let element = document.querySelector("p#greeting");
// element.innerHTML = 'Hello, DOM!'

// element.style.backgroundColor = '#27647B';
// element.style.textAlign = 'center';
// ul.style.textAlign = 'left'

document.querySelector('#main').remove();

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'Tibbs is the champion'
