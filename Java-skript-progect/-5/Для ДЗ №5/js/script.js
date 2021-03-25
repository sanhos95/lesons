//let div = document.createElement('div')
let block = document.querySelector('.menu'), 
    div = document.createElement('li'),  
	ul = document.querySelectorAll('ul'), 
	text2 = document.createTextNode('Пятый пункт'),
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


//elem.appendChild(узел);
//ul.firstElementChild.style.background = ‘purple’;
//parentNode.replaceChild(text2, original);
text2.remove(text)
console.log(text2);
