// Вам будет предоставлен список объектов. Каждый объект имеет type, material, и , возможно secondMaterial.
// Существующие материалы: paper, glass, organic, и plastic.
//
//     Ваша задача - отсортировать эти объекты по 4 корзинам для переработки в соответствии с их
//     material(иsecondMaterial, если они присутствуют), перечислив type объекты, которые должны попасть в эти корзины.

function recycle(array) {



    // return
    let paper= [],
    glass = [],
    organic = [],
    plastic = [];


    for (let i =0; i <array.length; i++){
        if(array[i].material === 'paper') paper.push(array[i].type);
        if(array[i].material === 'glass') glass.push(array[i].type);
        if(array[i].material === 'organic') organic.push(array[i].type);
        if(array[i].material === 'plastic') plastic.push(array[i].type);

        if(array[i].secondMaterial !== 'undefined'){
            if(array[i].secondMaterial === 'paper') paper.push(array[i].type);
            if(array[i].secondMaterial === 'glass') glass.push(array[i].type);
            if(array[i].secondMaterial === 'organic') organic.push(array[i].type);
            if(array[i].secondMaterial === 'plastic') plastic.push(array[i].type);
        }
    }

    console.log(
        [paper,glass,organic,plastic]
    );

}

// console.log(10);
// console.log(JSON.stringify([1,2,'5']));

let a = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

recycle(a);

// output = [
//     ["wine bottle", "amazon box", "beer bottle"],
//     ["wine bottle", "beer bottle"],
//     ["rotten apples", "out of date yogurt"],
//     ["out of date yogurt"]
// ]