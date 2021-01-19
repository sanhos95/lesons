
Підключення скриптів
  <script>...тут скрипти...</script> - Для невеликих скриптів в документі .html
  <script src="script.js">...тут скрипти...</script> - Для підключення зовнішніх файлів src=" шлях до файлу";



Alert(...); - Виводити щось в вікно браузера
console.log(...); Вивести щось в консоль браузера ... може бути назвою змінної

Коментарі
	//... - Закоментувати 1 рядок
	/*...*/ - Закоментувати текст (в скобках)  Ctrl + / Гаряча клавіша в VsCode

Змінні
	var - повідомляємо js що зараз буде змінна
	var leftBorderWidth = 1; - Створюємо перемінну із назвою leftBorderWidth та присвоюємо їй значення 1
	
	let second = 2;
	const pi = 3.14 - const це константа яку неможливо змінити

Помилки 
	undefined - перемінна створена але немає ніякого значення (порожня)
	is not defined - перемінної не існує (або вона створена після виводу)

Інше 
	Infinity - числове значення яке ми отримаємо нпариклад поділивши число на  0
	NaN - числове значення яке ми отримаємо нпариклад поділивши строку на число
	"...", '', `` - (лапки) означают  що це строка
	
Типи даних
	var sym - символ
	var boolean = true; - логічний виводить true або false
	var obj - {}; - колекція даних (комплексний) може зберігати будь які дані


Властивості
	let persone = {
	name: = "John",
	age: = 25,
	isMarried: false
	};
	1. console.log(persone.name); - отримаємо John
	2. console.log(persone["name"]); - отримаємо John
	

	let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
	1. console.log(arr [2]) - отримаємо apple.bmp
	2. console.log(arr [0]) - отримаємо plum.png 


Типи даних
	1 3 6 - числовий
	'...', "...", `...`; - строка
	true/false -  булиновий (логічний) правда/неправда boolean
	null  - коли нічого не існує
	undefined - коли не знайдено зчачення змінної
	Sumbol

Перетворення даних в строку 
	Оператор typeof позволяет определить тип параметра (число, строка, объект). Оператор возвращает строку, содержащую тип ('number', 'string', 'object').
	 
	1. String(null);
	console.log(tupeof(String(null))); - отримаємо string
	console.log(typeof("" + false));
	Наприклад для адресної строки:
	console.log ('https://'vk.com/catalog/' + 5); під 5 можна розуміти будь яке значення або динамічної значення змінної	

Перетворення даних в число
	console.log(typeof(Number('5'))); - Отримаємо number
	console.log(typeof(+'5')); - Отримаємо number
	console.log(typeof(5 + + '5')); - Отримаємо number 
	console.log(typeof(parseInt('15px', 10))); - Отримаємо number 


Спілкування із користувачем
	let answer = confirm("Are you here");
	console.log(answer); - Виведе вікно із питанням	 "Are you here" із двома варіантами вибору так/ні якщо вибрати так то в консоль отримаємо true/false

	let answer = prompt("Есть ли вам 18?", "да");
	console.log(answer); - Виведе вікно із питанням "Есть ли вам 18?" із полем вводу в якому написано "да" але його можна змінити 

	let answer = +prompt("Есть ли вам 18?", "да"); + перетворює значення в число (те що введе користувач)


Оператори
	let incr = 10,
	    decr = 10;
		incr++;
		decr --;
	console.log(incr) додасть 1
	console.log(decr) відніме 1

	console.log(5%2); отримаємо 1 залишок від ділення

	= - рисвоювання
	== - перевірка на рівність 
	=== - строга перевірка по типам даних (строка число і тд) 
	
	&& - - поверне trure коли обидва значення дорівнює trure
	|| - поверне trure коли одне із значень дорівнює trure (isChecked || isClose); 
	(isChecked || !isClose); - перетворить !isClose в інверсне значення
	
	'use strict'; - строгий режим стандарту es6 ставиться на початку коду

GIT
	консоль 
		git init - встановити у вибрану дерикторію
		echo >> README.md - створити файл README.md
		git config --global user.name "Sanhos PS"
		git config --global user.email sanhos.95@gmail.com
		git add -A - Додати всі файли
		git status - Перевірити зміни в файлах
	 	git commit -a -m "Це перший комент"
		git add *.html - Додати зміни в файлі
		git log --help - Відкриває сторінку з документацією
		git push test - Відправити на git


Додавання нових файлів або модифікацію на git
git add -A
git commit -a -m "index mod"
git push
git pull На іншому компі щоб отримати зміни які були внесені з іншого пристрою
