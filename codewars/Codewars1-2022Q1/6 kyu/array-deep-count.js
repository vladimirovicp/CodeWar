function deepCount(a){
    //...

    count = 0;

    function myCount(a){
        for (let i = 0; i < a.length; i++){
            count ++;
            if ( typeof a[i] == 'object'){
                myCount(a[i]);
            }
        }
    }

    myCount(a);
    return count;

  }


//Чужое решение

// function deepCount(a){
//     return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
//   }

// function deepCount(a){
//     let count = a.length;
//     for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//     return count;
//   }

// function deepCount(arr) {
//     const stack = [...arr]
//     let size = 0
    
//     while (stack.length) {
//       const next = stack.pop()
//       size += 1
      
//       if (Array.isArray(next)) {
//         stack.push(...next)
//       }
//     }
    
//     return size
//   }

document.getElementById("result").textContent = deepCount([1, 2, [3, 4, [5]]]);