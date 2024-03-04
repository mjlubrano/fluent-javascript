//1. Primitive Multiply
// Write a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. This is a constructor function that takes a message string as an argument and can be used to create an instance of the exception type.
// It is a good idea to use this type of constructor function to create a new instance of the exception type. This is because it allows you to attach properties to the instance that can be used to give the user more information about the error.
// The instance of the exception type will have a message property that contains the message string that was passed to the constructor function.
function primitiveMultiply(a,b){
    if (Math.random() < 0.2){
        return a*b;
    } else {
        // log the message 'multiplaction failed' along with the current timestamp with millisecond precision
        // console.log('Multiplication failed at ' + new Date().toLocaleString()); // second precision
        console.log('Multiplication failed at ' + new Date().toISOString().replace(/T|Z/g, ' ').trim()); // millisecond precision
        throw new MultiplicatorUnitFailure('Multiplication failed');

    }
}
function MultiplicatorUnitFailure(message){
    this.message = message;
    this.stack = (new Error()).stack;
}

function primitiveMultiplyWrapper(a,b){
    try {
        return primitiveMultiply(a,b);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure){
            return primitiveMultiplyWrapper(a,b);
        } else {
            throw e;
        }
    }
}

console.log('Exercise 1.........');
// console.log(primitiveMultiply(2,3));
console.log(primitiveMultiplyWrapper(2,3));

//2. Locked Box
// Consider the following (rather contrived) object:
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};
// It is a box with a lock. Inside is an array, but you can get at it only when the box is unlocked. Directly accessing the private _content property is forbidden.
// Write a function withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
// For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.
function withBoxUnlocked(body){
    let locked = box.locked;
    if (!locked){
        return body();
    }
    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}
console.log('Exercise 2.........');
console.log(box.locked);
