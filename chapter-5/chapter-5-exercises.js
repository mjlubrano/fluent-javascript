// make all functions in script.js available in this file
import * as functions from './script.mjs';   

//1. Flattening
function flatten(arr){
    return arr.reduce((a, b) => a.concat(b));
}
console.log(flatten([[1,2,3], [4,5,6], [7,8,9]]));

//2. Your own loop
function loop(value, test, update, body){
    for(let i = value; test(i); i = update(i)){
        body(i);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
loop(2, n => n <100, n => n * 2, console.log);

//3. Everything
function every(arr, test){
    for(let i = 0; i < arr.length; i++){
        if(!test(arr[i])){
            return false;
        }
    }
    return true;
}
console.log(every([1,3,5], n => n < 10));
console.log(every([2,4,16], n => n < 10));

//4. Dominant writing direction
function dominantDirection(text){
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    
    if(counted.length == 0) return "ltr";
    
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
console.log(dominantDirection("Hello!"));