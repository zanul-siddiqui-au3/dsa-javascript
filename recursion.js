function fibonaaci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonaaci(n - 1) + fibonaaci(n - 2)
}
// console.log(fibonaaci(40))

function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n-1)
}
// console.log(factorial(20))

function reachStairN(n){
    if(n === 1) return 1;
    if(n === 2) return 2;
    return reachStairN(n - 1) + reachStairN(n - 2);
}
// console.log(reachStairN(10))

function palindromeStr(str){
    let result = '';
    function helperFn(str){
        if(str.length === 0) return result;
         result += str.charAt(str.length - 1);
        return helperFn(str.substring(str.length - 1 , 0))
    };
    return str === helperFn(str)
}
// console.log(palindromeStr('a'))

function palindromeStrPointer(str){
    function helperFn(left, right){
        if(left >= right) return true;
        if(str.charAt(left) != str.charAt(right)) return false;
        left++;
        right--;
        return helperFn(left, right)
    }
    return helperFn(0, str.length - 1)
}

// console.log(palindromeStrPointer('bbcbb'))

function reverseArray(arr,left,right){
    if(left >= right) return arr;
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
    return reverseArray(arr,left,right)
}
let arr = [1,2,3,4,5];
// console.log(reverseArray(arr, 0, arr.length - 1))

// SubSequences 
// function powerSet(str){
//     function helperFn(newStr, i){
//         if(i === str.length){
//             console.log(newStr);
//             return;
//         }   
           // take it 
//         helperFn(newStr+ str.charAt(i), i+1);
//         not take it   
//         helperFn(newStr, i+1);
//     }
//     return helperFn('', 0)
// }

// console.log(powerSet('abc'))

// // Subset of an array
// function subArray(arr){
//     let result =  [];
//     function helperFn(newArr, i){
//         if(i === arr.length){
//             result.push(newArr);
//             return;
//         }
//         // takeit
//         helperFn([...newArr, arr[i]], i+1)
//         // not take it
//         helperFn(newArr, i+1)
//     }
//     helperFn([], 0)
//     return result
// }
// console.log(subArray([1,2,3]))


// Subset sum problem 
// function subSetSum(arr, sum){
//     let result = 0;
//     function helperFn(newArr, i){
//         if(i === arr.length){
//             const tempSum = newArr.reduce((prev, current)=> prev += current ,0);
//             if(tempSum === sum){
//                 result++
//             }
//             return;
//         }
//         // Include
//         helperFn([...newArr, arr[i]], i + 1)
//         // Exclude
//         helperFn(newArr, i + 1)
//     }
//     helperFn([], 0);
//     return result ? true : false;
// }
// console.log(subSetSum([3,34,4,12,5,2], 30))

// function permutations(arr){
//     function helperFn(newArr, i){
//         if(i === newArr.length){
//             console.log(newArr);
//             return;
//         }
//         for(let j = i; j < newArr.length; j++){
//             [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
//             helperFn(newArr, i + 1);
//             [newArr[j], newArr[i]] = [newArr[i], newArr[j]];
//         }
//     }

//     return helperFn(arr, 0);
// }

// console.log(permutations([1,2,3], 0))

function combinations(arr){
    const obj = {
        1: '',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'yz'
    };
    function helperFn(i, resultStr){
        if(i === arr.length){
            console.log(resultStr)
            return;
        };
        for(let j = 0; j < obj[arr[i]].length; j++){
            let tempStr = resultStr + obj[arr[i]].charAt(j); // Use a temporary string
            helperFn(i+1, tempStr);
        }
    }

    return helperFn(0, '');
}

console.log(combinations([2,3,4]))