function whoseBicycle(diary1, diary2, diary3) {
    function countScore(diary) {
        let score = 0;
        for (let key in diary) {
            score += diary[key];
        }
        return score;
    }


    let scoreSons = [];
    scoreSons[0] = countScore(diary1);
    scoreSons[1] = countScore(diary2);
    scoreSons[2] = countScore(diary3);


    if ((scoreSons[0] > scoreSons[1]) && (scoreSons[0] > scoreSons[2])) {
        return 'I need to buy a bicycle for my first son.';
    } else if (scoreSons[1] > scoreSons[2]) {
        return 'I need to buy a bicycle for my second son.';
    } else {
        return 'I need to buy a bicycle for my third son.';
    }


}

const rezult = whoseBicycle({
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
}, {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
}, {
    'algebra': 6,
    'history': 5,
    'physics': 5,
    'geography': 9,
    'chemistry': 10
});


let toApp = rezult;

//let toApp = 'dsgdfgdf'
export default toApp;


// 'I need to buy a bicycle for my second son.'


//   Test.assertEquals(whoseBicycle(
//                                 {
//                                   'algebra': 6,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 9,
//                                   'chemistry': 10
//                                 },
//                                 {
//                                   'algebra':6,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 9,
//                                   'chemistry': 10
//                                 },
//                                 {
//                                   'algebra': 6,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 9,
//                                   'chemistry': 10
//                                 }
//                               ), 'I need to buy a bicycle for my third son.'
// );

//     Test.assertEquals(whoseBicycle(
//                                 {
//                                   'algebra': 6,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 9,
//                                   'chemistry': 5
//                                 },
//                                 {
//                                   'algebra':6,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 9,
//                                   'chemistry': 10
//                                 },
//                                 {
//                                   'algebra': 6,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 9,
//                                   'chemistry': 10
//                                 }
//                               ), 'I need to buy a bicycle for my third son.'
// );

//     Test.assertEquals(whoseBicycle(
//                                 {
//                                   'algebra': 3,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 4,
//                                   'chemistry': 10
//                                 },
//                                 {
//                                   'algebra':6,
//                                   'history': 7,
//                                   'physics': 8,
//                                   'geography': 9,
//                                   'chemistry': 4
//                                 },
//                                 {
//                                   'algebra': 9,
//                                   'history': 7,
//                                   'physics': 9,
//                                   'geography': 9,
//                                   'chemistry': 10
//                                 }
//                               ), 'I need to buy a bicycle for my third son.'
// );