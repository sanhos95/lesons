'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    // gain = prompt("Введите обязательную статью расходов в этом месяце",""),
    // prise = prompt("Во сколько обойдется?","");



let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooceExpenses: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце",""),
                b = prompt("Во сколько обойдется?",'');
        
            if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50){
                console.log("Все верно");
                appData.expenses[a] = b;
            } else {
                i = i - 1; 
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000){
                console.log("Высокий уровень достатка");
            } else {
                console.log("Произошла ошибка");
            }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сума накоплений?', ''),
                present = +prompt("Под какой процент?", '');

            appData.monthIncome = save/100/12*persent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooceExpenses: function() {
        for (let i = 1; i < 3; i++){
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    }, 
    shooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
    }
};





    

    // console.log(appData);
    // appData.expenses.push(gain)
    // appData.expenses.push(prise)


    // console.log(appData.budjet);
    // console.log(appData.timeData);
    // console.log(appData.savings);
    // console.log(appData.expenses);
    // alert(appData.budjet/30);