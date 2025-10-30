// Basic types 

let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number 
age = 23

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,2,3, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Veronika', true]

// Tuple Array
let employee: [number,string][]
employee = [
    [1, 'Veronika'],
    [2, 'Marija'],

]

// Union
let pid: string | number = 22   //could be a string or a number

// Enum 
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}


// Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
customerId = 5

// Functions
function addNum(x:number,y:number): number {
    return x + y
}

console.log(addNum(1,3))

// Void
function log(message: string | number): void {
    console.log(message)
}
log(2)
log('hello')