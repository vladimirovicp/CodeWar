function getParticipants(handshakes) {
    // ...
    let people = 1;
    for (let i = 0; i < handshakes; i = i + people++) {
        //console.log(i + ' | ' + people);
    };
    return people;

    // let people = 1;
    // let i = 0;
    // while(i < handshakes){
    //     people++;
    //     i +=  people;
    //
    // }
    //
    // return people;
}


//Чужое решение

// function getParticipants(h){
//     return Math.ceil((1+Math.sqrt(1+8*h))/2)}

// function getParticipants(h){
//     for(var i=0,k=1;i<h;i+=k++){}
//     return k;
// }

// function getParticipants(h){                 //MO ZHUANG BI
//     for (var i=1;i*(i-1)/2<h;i++){} return i;
// }
//ZHUANG BI ZAO LEI PI

// function getParticipants(handshakes){
//     var sum=0, i=1;
//     while (sum<handshakes)
//         sum+=i++;
//     return i;
// }

// function getParticipants(handshakes){
//     var participants = 1;
//     while( participants*(participants-1)/2 < handshakes ) participants++;
//     return participants
// }//z.

// function getParticipants(hasha){
//     let comb = hasha * 2,
//         D = 1 + 4 * comb,
//         d = Math.sqrt(D),
//         x = Math.ceil((1 + d)/2);
//     return x;
// }

document.getElementById("result").textContent = getParticipants(7);