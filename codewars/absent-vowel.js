function absentVowel(x){
    const vowel = ['A','E','I','O','U'];
    let i = 0;
    while (vowel.length > 0 && i <= x.length){

        vowel.forEach( (element, index) => {
            if (x[i] === element || x[i] === element.toLowerCase()) {
                delete vowel[index];
            }
        });
        i++;
    }
    let rez = '';
    vowel.forEach((element, index) =>{
        rez = index;
    });
    return rez;
}

// document.getElementById("result").textContent = absentVowel("John Doe hs seven red pples under his bsket");