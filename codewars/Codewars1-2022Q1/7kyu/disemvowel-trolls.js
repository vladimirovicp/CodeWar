function disemvowel(str) {
    // const masVowels = ['A', 'E', 'I', 'O', 'U'];

    let rez = '';
    for (let i = 0; i < str.length; i++){

        switch (str[i]){
            case 'A': break;
            case 'a': break;
            case 'E': break;
            case 'e': break;
            case 'I': break;
            case 'i': break;
            case 'O': break;
            case 'o': break;
            case 'U': break;
            case 'u': break;
            default: rez = rez + str[i];
        }
    }

    return  rez;

}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}

//Чужое решение

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// function disemvowel(str) {
//     return (str || "").replace(/[aeiou]/gi, "");
// }

document.getElementById("result").textContent = disemvowel("This website is for losers LOL!");