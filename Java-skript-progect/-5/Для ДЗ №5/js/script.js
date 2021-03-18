//let div = document.createElement('div')
let block = document.querySelector('.menu'), 
    div = document.createElement('li'),  
    text = document.createTextNode('Пятый пункт');

div.classList.add('menu-item');

block.appendChild(div);

div.appendChild(text);



//document.ul.replaceChild(menu-item[1], menu-item[2]);

//.menu.replaceChild(menu-item[2], menu-item[3]);

let oldChild = menu.replaceChild(menu-item[1], menu-item[2]);