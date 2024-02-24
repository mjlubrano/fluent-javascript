// 1. Minimum
function min(a, b){
    return a < b ? a : b;
}
console.log(min(0,1000000));

// 2. Recursion
function isEven(n){
    if(n < 0){
        return isEven(-n);
    } else if(n === 0){
        return true;
    } else if(n === 1){
        return false;
    } else {
        return isEven(n - 2);
    }
    
}
console.log(isEven(-20));

// 3. Bean counting
function countBs(str){
    counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "B"){
            counter++;
        }
    }
}
console.log(countBs("ABBC"));

// 4. Bean counting - part 2
function countChar(str, char){
    counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            counter++;
        }
    }
    return counter;
}
console.log(countChar("kool kool koolk", "k"));