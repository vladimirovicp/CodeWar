// Пара перчаток
// Приближается зима, вы должны подготовить свои лыжные каникулы. Цель этого ката — определить 
//количество пар перчаток, которое вы можете составить из перчаток, которые есть в вашем ящике.

// Учитывая массив, описывающий цвет каждой перчатки, верните количество пар, которые вы можете составить, 
//предполагая, что только перчатки одного цвета могут образовывать пары.


//Примеры:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

// function numberOfPairs(gloves) {

//     const sortGloves = gloves.sort();
//     let count = 0;

//     for (let i = 0; i < sortGloves.length - 1; i++) {
//         if (sortGloves[i] === sortGloves[i + 1]) {
//             count++
//             i++

//         }
//     }

//     return count;
//}
//не сработало

function numberOfPairs(gloves) {

    const glovesObj = gloves.reduce((accumulator, currentValue) => {

        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, {});

    let count = 0;

    for (let color in glovesObj) {
        count += Math.floor(glovesObj[color] / 2)
    }

    return count;
}


//let toApp = numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']);
//let toApp = numberOfPairs(["Blue", "Fuchsia", "Lime", "Silver", "Blue", "Maroon", "White", "Aqua", "Maroon", "Navy", "Navy", "Black", "White", "Fuchsia", "Navy", "Purple", "Yellow", "Fuchsia", "Navy", "Olive", "Olive", "Gray", "Purple", "Blue", "Teal", "Aqua", "Navy", "Green", "Purple", "Lime", "Green", "Aqua", "Maroon", "Yellow", "Maroon", "Purple", "Gray", "Green", "Purple", "Silver", "Gray", "Fuchsia", "Gray", "Aqua", "Fuchsia", "Navy", "Navy", "Silver", "Black", "Silver", "White", "Yellow", "Lime", "Gray", "White", "Gray", "Green", "Aqua", "Silver", "White", "Silver", "Aqua", "Gray", "Purple", "Blue", "Purple", "Yellow", "Lime", "Lime", "Green", "Red", "Teal", "Yellow", "Navy", "Lime", "White"]);
let toApp = numberOfPairs(["Navy", "Maroon", "Maroon", "Black", "Blue", "Black", "Yellow", "Gray", "White", "Olive", "Fuchsia", "Olive", "Teal", "Green", "Lime", "Green", "Olive", "White", "Yellow", "Gray", "Aqua", "Navy", "Navy", "Maroon", "Yellow", "Purple", "Gray", "Purple", "Green", "Yellow", "Blue", "Teal", "Silver", "Fuchsia", "Aqua", "Teal", "White", "Aqua", "Yellow", "Teal", "Yellow", "Green", "Maroon", "Black", "Fuchsia", "Green", "Silver", "Black", "Lime", "Black", "Teal", "Teal", "Lime", "Lime", "Lime", "Olive", "Gray", "Blue", "Green", "Olive", "Silver", "Aqua", "Lime", "Black", "White", "Lime", "Aqua", "Green", "Teal", "Fuchsia", "Blue", "White", "Gray", "White", "Gray", "Purple", "Maroon", "Yellow", "Green", "Aqua", "Olive", "Silver", "Silver", "Lime", "Silver", "Navy", "Yellow", "Maroon", "Lime", "Teal", "Lime"]);
//let toApp = 'dsgdfgdf'
export default toApp;