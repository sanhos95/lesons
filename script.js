let money = prompt("Ваш бюджет на месяц?",""), 
    time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData =  {
    buget: money, expenses:{

    }
}

let num = 50;              //перемінна num = 50
while (num < 55){          //перевіряємо чи num менше 55
    console.log(num);      //виводимо в консольку значення на даний момент
    num++;                 //додаємо по 1 поки умова не виконається
}

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55)