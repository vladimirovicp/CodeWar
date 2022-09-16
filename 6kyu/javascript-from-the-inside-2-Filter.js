
// https://www.freecodecamp.org/news/how-array-prototype-map-works-b6b69379c3af/

Array.prototype.filter = function (callback/*, thisArg*/) {

    console.log(callback);

    let T, A, k;

    if (this == null) {
        throw new TypeError('this is null or not defined');
    }

    //console.log(this);  //[ 1, 2, 3, 4, 5 ]

    let O = Object(this);

    //console.log(O); //[ 1, 2, 3, 4, 5 ]

    // let len = O.length >>> 0;
    let len = O.length;
    // console.log(len); //5

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
        T = arguments[1];
    }

    // console.log(T); //undefined

    A = [];

    k = 0;

    while (k < len) {
        let kValue, mappedValue;

        if (k in O) {
            kValue = O[k];
            mappedValue = callback.call(T, kValue, k, O);

            //console.log(   mappedValue,O[k]);
            //console.log(O[k])


            if (mappedValue === true) A.push(O[k]);
            if ( mappedValue !== true && mappedValue !== false){
                if(mappedValue !== undefined) A.push(O[k]);
            }
            // A[k] = mappedValue;
        }
        k++;
    }

    // let result= [];
    // A.forEach(el =>{
    //     if (el===true){
    //         result.push()
    //     }
    // })

    console.log(A)

    return A;


};

let base_array, empty_array, single_array;

    empty_array = [];
    single_array = [1];
    base_array = [1, 2, 3, 4, 5];


// var mapped_array = base_array.filter(function(item) { return item < 3 });
// console.log(base_array); // [1, 2, 3, 4, 5]
// console.log(mapped_array); // [1, 2]


base_array.filter((_, i, orig) => orig[i - 1]);



//
    // var base_array, empty_array, single_array;
    //
    //
    // empty_array = [];
    // single_array = [1];
    // base_array = [1, 2, 3, 4, 5];
    //
    // ler res = []
    //
    //
    // let mapped_to_same;
    //
    // for(let i=0; i < base_array.length; i++){
    //     res.push(base_array[i]);
    // }


    // Array.prototype.map = function(callback, thisArg) {
    //     let newArray = [];
    //     let x = this.length;
    //     for(let i=0; i<x; i++){
    //         let counter =  this[i] === undefined ? undefined : callback.call(thisArg, this[i], i, this);
    //         newArray.push( isNaN(counter) && counter !== undefined ? "" : counter);
    //     }
    //     return newArray;
    // };

    // Array.prototype.map = function(callback, thisArg) {
    //     let newArray = [];
    //     let x = this.length;
    //     console.log(x)
    //     for(let i=0; i<x; i++){
    //         console.log(thisArg, this[i], i, this)
    //         let counter = callback.call(thisArg, this[i], i, this);
    //         console.log(counter)
    //         newArray.push(counter);
    //     }
    //     return newArray;
    // };

    // let arr = [1, 2, 3];
    // arr = arr.map(e => e * 2);
    // console.log(arr);

    // let base_array = [1, 2, 3, 4, 5];

   // let plus_two_and_index = base_array.map(function(item, index) { return item + 2 + index; });
   //  var array_of_two = new Array(2).map(function(x) { return 1; });
   // var sum_with_context = [1, 2, 3].map(function(item, index) { return item + this[index]; }, [4, 5, 6]);


    // var plus_two_from_array = base_array.map(function(_, index, array) { return array[index] + 2; });
    // var array_times_five = base_array.map(function(_, _2, array) { return array; });
    //
    // var array_of_two_and_one = new Array(2).concat([null]).map(function(x) { return 1; });
    // console.log(array_of_two_and_one)
    // var mapped_to_same = base_array.map(function(x) { return x; });


    // describe("Javascript from the Inside: Map", function() {
    //     var base_array, empty_array, single_array;
    //
    //     before(function() {
    //         empty_array = [];
    //         single_array = [1];
    //         base_array = [1, 2, 3, 4, 5];
    //     });
    //
    //     it("should return a new array", function() {
    //         var mapped_to_same = base_array.map(function(x) { return x; });
    //         Test.assertNotEquals(mapped_to_same, base_array, "Oh no! I didn't return a new array.");
    //     });