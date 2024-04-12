

const h1 = document.getElementById('title');
// h1.style.color = 'red';

const btn = document.getElementById('btn');

btn.style.color = 'pink'



// document.getElementById('btn').style.background = 'pink';
// document.getElementById('btn').style.color = 'blue';




// getAttribute();
// setAttribute();

const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
// console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a class of first';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links);


// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector('#result');

// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading);

console.log(result.children);


