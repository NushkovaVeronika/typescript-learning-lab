"use strict";
// Basic types 
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
age = 23;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, 3, 'Hello'];
// Tuple
let person = [1, 'Veronika', true];
// Tuple Array
let employee;
employee = [
    [1, 'Veronika'],
    [2, 'Marija'],
];
// Union
let pid = 22; // could be a string or a number
// Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 5;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
// Void
function log(message) {
    console.log(message);
}
log(2);
log('hello');
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name); // this inherits from the Person class
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'QA Engineer');
console.log(emp.register());
console.log(brad.register());
console.log(brad, mike);
//# sourceMappingURL=index.js.map