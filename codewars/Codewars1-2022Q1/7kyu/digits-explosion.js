function explode(s) {
    let rezult ="";

    for (let i = 0; i < s.length; i++){

        for(let j= 0; j < s[i]; j++){
            rezult = rezult + s[i];
        }

    }
    return rezult;

}

//Чужое решение

// const explode = s => s.replace(/\d/g, d => d.repeat(d));


// function explode(s) {
//     return s.split("").map((e) => e.repeat(+e)).join("");
// }

// function explode(s) {
//     return s.toString().split('').map(function(el) {
//         return el = el.repeat(el);
//     }).join('');
// }


document.getElementById("result").textContent = explode("312");


// var tests = [["312", "333122"],["102269","12222666666999999999"],["0", ""],["000", ""],["123", "122333"]];
// for(let i = 0; i < tests.length; i++) {
//     Test.assertEquals(explode(tests[i][0]), tests[i][1], 'Input: ' + tests[i][0]);
// }