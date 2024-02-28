//1. range function
function myrange(start, end){
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
console.log(myrange(3, 10));

// 1. range with step function
function myrange(start, end, step = 1){
    let arr = [];
    if(step > 0){
        for(let i = start; i <= end; i += step){
            arr.push(i);
        }
    } else {
        for(let i = start; i >= end; i += step){
            arr.push(i);
        }
    }
    return arr;
}

// 1. sum function
function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(sum(myrange(1, 10)));

//2. reverseArray function
function reverseArray(arr){
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([1,2,3,4,5]));

//2. reverseArrayInPlace function
function reverseArrayInPlace(arr){
    for(let i = 0; i < Math.floor(arr.length / 2); i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,5]));

//3. arrayToList function
function arrayToList(arr){
    let list = null;
    for(let i = arr.length - 1; i >= 0; i--){
        list = {value: arr[i], rest: list};
    }
    return list;
}
console.log(arrayToList([1,2,3]));

//3. listToArray function
function listToArray(list){
    let arr = [];
    for(let node = list; node; node = node.rest){
        arr.push(node.value);
    }
    return arr;
}
console.log(listToArray(arrayToList([1,2,3])));

//3. prepend function
function prepend(value, list){
    return {value, rest: list};
}
//3. nth function
function nth(list, n){
    if(!list){
        return undefined;
    } else if(n === 0){
        return list.value;
    } else {
        return nth(list.rest, n - 1);
    }

}
console.log("-------------------");
console.log(arrayToList([10, 20, 30]), 1);
console.log(nth(arrayToList([10, 20, 30]), 1));

//4. deepEqual function
function deepEqual(a, b){
    if(a === b){
        return true;
    }
    if(a == null || typeof a != "object" || b == null || typeof b != "object"){
        return false;
    }
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if(keysA.length != keysB.length){
        return false;
    }
    for(let key of keysA){
        if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
            return false;
        }
    }
    return true;
}
let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, obj2));