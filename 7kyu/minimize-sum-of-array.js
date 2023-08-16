// function minSum(arr) {
//
//     const max = Math.max.apply(null, arr);
//     const min = Math.min.apply(null, arr)
//
//     arr = arr.filter((n) => {return n != max});
//     arr = arr.filter((n) => {return n != min});
//
//     result += max * min;
//
//     if (arr.length>0){
//         minSum(arr);
//     }
//
// }
//
// let result = 0;
// minSum([9,2,8,7,5,4,0,6]);
//
// console.log(result)


function minSum(arr) {

    // console.log(
    //     arr.sort((a,b) => a - b).reduce((prev,curr) => prev + curr * arr.pop(), 0)
    // )

    //console.log(arr.sort((a,b) => a - b));

    arr = arr.sort((a,b) => a - b); //сортировка
    const initialValue = 0;
    const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue * arr.pop(), initialValue) ;

    console.log(sumWithInitial);




}


minSum([9,2,8,7,5,4,0,6]);
