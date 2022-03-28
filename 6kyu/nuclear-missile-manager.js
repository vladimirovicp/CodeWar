// Наша система управления ядерными ракетами закодирована в Node.js. В настоящее время мы тестируем систему, и кажется,
// что launchAll function не работает, как ожидалось. Он должен запускать 5 ракет с интервалом в 1 секунду.
// // Текущий код пытается запустить ракету №5 пять раз...
//
// Можете ли вы исправить это для нас? Вы знаете, это довольно критический код...
//
// Запись: Есть 5 ракет с маркировкой i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.


function launchAll(launchMissile) {
    for(let i = 0; i < 5; i++) {
        setTimeout(function() {
            launchMissile(i);
        }, i * 1000);
    }
}


let toApp = launchAll([0, 1, 2, 3, 4]);

export default toApp;