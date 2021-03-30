//let div = document.createElement('div')
let block = document.querySelector('.menu'), 
    div = document.createElement('li'),  
	ul = document.querySelector('ul'), 
	text2 = document.createTextNode('Пятый пункт'),
    text = document.createTextNode('Пятый пункт');


div.classList.add('menu-item');

block.appendChild(div);

div.appendChild(text);

column[0].style.background = 'url(img/apple_true.jpg)';

original.textContent = text2;

list2[2] = 'Груша';

list2[1].style.background = "red";
list2[2].style.background = "green";

// listNev = list2[1];
// list2[1] = list2[2];
// list2[1] = 'Груша';

console.log(listNev);
console.log(list2[1]);
//qestion.textContent = text3;
console.log(list2);
adv.remove(adv);