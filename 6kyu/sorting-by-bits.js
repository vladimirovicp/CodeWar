// В этой ката вы должны отсортировать массив из 32-битных целых чисел в порядке возрастания числа на биты у них есть.

// Например, учитывая массив [7, 6, 15, 8]

// 7 имеет 3 на биты (000..0,0111)
// 6 имеет 2 на биты (000..0,0011)
// 15 имеет 4 на биты (000...1111)
// 8 имеет 1 на бит (000...1000)
// Таким образом, массив в отсортированном порядке будет [8, 6, 7, 15].

// В тех случаях, когда два числа имеют одинаковое количество битов, вместо этого сравнивайте их реальные значения.

// Например, между 10 (...1010) и 12 (...1100), у них обоих одинаковое количество на биты '2'но целое число 10 меньше 12, поэтому оно идет первым в отсортированном порядке.

// Ваша задача написать функцию sortBybit() that takes an array of integers and sort them as described above.

// Примечание. Ваша функция должна изменять ввод, а не создавать новый массив.


function sortByBit(arr) {
    function myParse(x){
        return x.toString(2).replace(/0/gi,'').length;
    }

    return arr.sort((a,b) => {
        return myParse(a) === myParse(b) ? a - b : myParse(a) - myParse(b);
    });

}



let a = [3, 8, 3, 6, 5, 7, 9, 1];

let toApp = sortByBit(a);

export default toApp;