function head(mas){
    return mas[0];
}

function tail(mas){
    let rez=[];
    for(let i=1; i < mas.length; i++){
        rez[i - 1]=  mas[i];
    }
    return rez;

}

function init(mas){
    let rez=[];
    for(let i=0; i < mas.length - 1; i++){
        rez[i]=  mas[i];
    }
    return rez;  
}

function last(mas){
    return mas[mas.length - 1];
}

//Чужое решение

// function head(a) {return a[0]}

// function last(a) {return a[a.length - 1]}

// function init(a) {return a.slice(0, -1)}

// function tail(a) {return a.slice(1)}



document.getElementById("result").textContent = tail([1,2,3,4,5]);