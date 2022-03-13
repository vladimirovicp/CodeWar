function isIsogram(str){
    //...

    for (let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){

            console.log(str[i] + ' | ' + str[j].toUpperCase())
            if ( str[i] == str[j] || str[i].toUpperCase() == str[j]){
                return false;
            }
        }
    }

    return true;
}

//Чужое решение

// function isIsogram(str){
//     return !/(\w).*\1/i.test(str)
// }



document.getElementById("result").textContent = isIsogram("abcdefghijklmnopqrstuvwxyzi");