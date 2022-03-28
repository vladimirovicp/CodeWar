// Мы хотим создать функцию, которая возвращает массив функций, которые возвращают свой индекс в массиве. Для лучшего понимания, вот 
//пример:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// Мы уже реализовали эту функцию, но когда мы на самом деле запускаем код, результат выглядит не так, как мы ожидали. Можете ли вы заметить, что с 
// ним не так? Также имеется тестовое приспособление

// function createFunctions(n) {
//     var callbacks = [];
  
//     for (let i=0; i<n; i++) {
//       callbacks.push(function() {
//         return i;
//       });
//     }
    
//     return callbacks;
//   }

function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      let j = i; // or const j = i;
      callbacks.push(function() {
        return j;
      });
    }
    
    return callbacks;
  }

let toApp = createFunctions(5);

//let toApp = 'dsgdfgdf'
export default toApp;


// function createFunctions(n) {
//     var callbacks = [];
    
//     var factory = function(x){
//       return function(){
//         return x;
//       };
//     };
  
//     for (var i=0; i<n; i++) {
//       callbacks.push(factory(i));
//     }
    
//     return callbacks;
//   }


// function createFunctions(n) {
//     var callbacks = [];
  
//     for (var i=0; i<n; i++) {
//       let j = i; // or const j = i;
//       callbacks.push(function() {
//         return j;
//       });
//     }
    
//     return callbacks;
//   }


// function createFunctions(n) { 
//     return Array(n).fill(1).map((a,b)=> (()=> b));
//   }