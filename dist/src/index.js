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
let pid = 22; //could be a string or a number
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
//# sourceMappingURL=index.js.map