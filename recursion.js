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

// function palindromeStr(str){
//     let result = '';
//     function helperFn(str){
//         if(str.length === 0) return result;
//          result += str.charAt(str.length - 1);
//         return helperFn(str.substring(str.length - 1 , 0))
//     };
//     return str === helperFn(str)
// }
// console.log(palindromeStr('a'))

// function palindromeStrPointer(str){
//     function helperFn(left, right){
//         if(left >= right) return true;
//         if(str.charAt(left) != str.charAt(right)) return false;
//         left++;
//         right--;
//         return helperFn(left, right)
//     }
//     return helperFn(0, str.length - 1)
// }

// console.log(palindromeStrPointer('bbcbb'))

// function reverseArray(arr,left,right){
//     if(left >= right) return arr;
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//     return reverseArray(arr,left,right)
// }
// let arr = [1,2,3,4,5];
// console.log(reverseArray(arr, 0, arr.length - 1))

function powerSet(str){
    function helperFn(str, tempStr, i){
        if(i === str.length){
            console.log(tempStr);
            return;
        }
        //take
        // i++;
        helperFn(str,tempStr + str.charAt(i), i + 1);
        // Not take
        helperFn(str,tempStr, i + 1);
    }
    return helperFn(str, '', 0)
}
console.log(powerSet('abc'))
