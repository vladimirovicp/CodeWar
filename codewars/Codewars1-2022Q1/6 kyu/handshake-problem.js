function getParticipants(handshakes) {
    // ...
    let people = 1;
    for (let i = 0; i < handshakes; i = i + people++) {
        console.log(i + ' | ' + people);
    };
    return people;
}


//Чужое решение


document.getElementById("result").textContent = getParticipants(3);