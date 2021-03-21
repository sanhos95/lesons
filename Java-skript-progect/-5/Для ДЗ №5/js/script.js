//let div = document.createElement('div')
let block = document.querySelector('.menu'), 
    div = document.createElement('li'),  
    text = document.createTextNode('Пятый пункт');

div.classList.add('menu-item');

block.appendChild(div);

div.appendChild(text);

let column = document.getElementsByTagName('body'),
	original = document.getElementById('title'),
	//original3 = document.createElementId('li2'), 
	original2 = (''); 
column[0].style.background = 'url(img/apple_true.jpg)';

original2.textContent = 'Get nice cheese';
//parentNode.replaceChild(original2, original);

console.log(original);
elem.appendChild(узел);
