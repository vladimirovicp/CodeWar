// Цель этого упражнения — преобразовать строку в новую строку,
// где каждый символ в новой строке соответствует тому, "("если этот символ появляется только
// один раз в исходной строке или ")"если этот символ появляется в исходной строке более одного раза.
// Игнорировать заглавные буквы при определении, является ли символ дубликатом.

function duplicateEncode(word){
    // ...

    let rezult = '';
    let text ='';

    for (let i=0; i<word.length; i++){

        text = word.slice(0, i) + word.slice(i + 1);

        if(text.includes(word[i].toLowerCase()) || text.includes(word[i].toUpperCase())){

            rezult += ')'
        } else {
            rezult += '('
        }
    }
    return rezult;
}


//Чужое решение


// function duplicateEncode(word){
//     return word
//         .toLowerCase()
//         .split('')
//         .map( function (a, i, w) {
//             return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//         })
//         .join('');
// }

// function duplicateEncode(word){
//
//     var unique='';
//     word = word.toLowerCase();
//     for(var i=0; i<word.length; i++){
//         if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//             unique += '(';
//         }
//         else{
//             unique += ')';
//         }
//     }
//     return unique;
//
// }

// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }

// function duplicateEncode(word) {
//     var letters = word.toLowerCase().split('')
//     return letters.map(function(c, i) {
//         return letters.some(function(x, j) { return x === c && i !== j }) ? ')' : '('
//     }).join('')
// }

document.getElementById("result").textContent = duplicateEncode("Success");