// Вы пишете функцию, которая принимает два набора аргументов произвольной длины. Возвращаемое значение будет суммой значений всех аргументов.

// Функция должна содержать как минимум 1 аргумент на набор.

// calculate(1)(1) // должно вернуть 2
// calculate(1,1)(1) // должно вернуть 3
// calculate(1,1)(1,-1) // должно вернуть 2
// calculate(2,4)(3,7,1) // должно вернуть 17

function calculate(...per){
    let func = function( ...per2) { 
        let sum1 = per.length == 1 ? per[0] : per.reduce( (a,b) => a + b);
        let sum2 = per2.length == 1 ? per2[0] : per2.reduce( (a,b) => a + b);
        return  sum1 + sum2;
    };
    return func;
}

let toApp = calculate(1,1)(1);

export default toApp;


// const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((s, v) => s + v);

// function calculate(...a) {
//     return function (...b) {
//       return [...a, ...b].reduce((sum, n) => sum + n)
//     };
//   }

//   function calculate() {
//     var first = 0; 
//     for(var i = 0 ; i < arguments.length; i+=1) {
//       first += arguments[i];
//     }
//     return function() {
//     var second = 0;
//     for(var j = 0 ; j < arguments.length; j +=1) {
//       second += arguments[j];
//     }
//     return first+second;
//     }
//   }