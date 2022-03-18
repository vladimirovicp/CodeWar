// Я люблю числа Фибоначчи в целом, но я должен признать, что люблю некоторые больше, чем другие.
//
//     Я хотел бы, чтобы вы написали мне функцию, которая при задании числа (n) возвращает n-е число в последовательности Фибоначчи.
//
//     Например:
// nthFibo(4) == 2
// Потому что 2 - 4-е число в последовательности Фибоначчи.
//
//     Для справки, первые два числа в последовательности Фибоначчи равны 0 и 1, и каждое последующее число является суммой предыдущих двух.

function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence

    if (n <=3){
        if (n == 1 ){return 0;}
        if (n == 2 ){return 1;}
        if (n == 3 ){return 1;}
    }

    let pred = 1;
    let tekushee = 1
    let rez = 1;

    for (let i = 0; i < n - 3; i++){
        pred = tekushee;
        tekushee = rez;
        rez = pred + tekushee;
    }

    return rez;

}


//Чужое решение


// function nthFibo(n) {
//     let [prev, curr] = [0, 1];
//     for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//     return prev;
// }

// function nthFibo(n) {
//     return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
// }

//const nthFibo = n =>
//   Math.round(((1 + 5 ** .5) / 2) ** --n / 5 ** .5);

document.getElementById("result").textContent = nthFibo(10);