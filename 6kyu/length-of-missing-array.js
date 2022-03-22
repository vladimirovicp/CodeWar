function getLengthOfMissingArray(arrayOfArrays) {
    const lengthMas = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a,b)=> a - b);

    if (lengthMas.includes(0)) {
      return 0
    }

    for(let i=0; i< lengthMas.length - 1; i++){
      if (lengthMas[i]+1 !== lengthMas[i+1]){
        return lengthMas[i] + 1;
      }
    }

    return 0;

  }

//getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]);

let toApp = getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]]);

//let toApp = 'dsgdfgdf'
export default toApp;

