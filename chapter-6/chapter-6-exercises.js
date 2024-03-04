//1. Define a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(vector){
        return new Vec(this.x + vector.x, this.y + vector.y);
    }
    minus(vector){
        return new Vec(this.x - vector.x, this.y - vector.y);
    }
    length(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length());

//2. & 3. Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group. Then make it iterable.
class Group {
    constructor(){
        this.members = [];
    }
    add(value){
        if(!this.has(value)){
            this.members.push(value);
        }
    }
    delete(value){
        this.members = this.members.filter(v => v !== value);
    }
    has(value){
        return this.members.includes(value);
    }
    static from(collection){
        let group = new Group;
        for (let value of collection){
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator]() {
        let index = 0;
        let members = this.members;
        return {
            next() {
                if (index < members.length) {
                    return { value: members[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}
console.log('Exercise 2.........');
let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
group.delete(10);
console.log(group.has(10));
console.log(group);
let group2 = new Group([10, 20]); // this will not populate the group with the values
console.log(group2); // Group { members: [] }

// iterate over the group
console.log('Iterating over the group');
group.add(30);
for (let value of group) {
    console.log(value);
}

//4. Borrowing a method
console.log('Exercise 4.........');
let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
console.log(Object.prototype.hasOwnProperty.call(map, "three"));
console.log(Object.prototype.hasOwnProperty.call(map,"hasOwnProperty"));