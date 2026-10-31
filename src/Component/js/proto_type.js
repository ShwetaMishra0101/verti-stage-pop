const pro ={
    a:1,
    b:2,
    __proto__:{
        b:3, // This is called Property Shadowing
        c:4

    }
}

// console.log(pro.b)
// in the output be will get the 2 This is called Property Shadowing 


const pr ={
    a:1,
    value: 2,
    method(){
        return this.value+1

    }
}

// console.log(pr.method())



const child = {
    __proto__: pr,
  };
  child.value = 4
//   console.log(child.method())


// Constructors
// const boxes = [
//     {value:1, getValue(){ return this.value}},
//     {value:2, getValue(){ return this.value}},
//     {value:3, getValue(){ return this.value}}

// ]

// const boxPro ={
//     getValue(){
//         return this.value
//     },
// }

// const boxes = [
//     {value:1, __proto__ : boxPro},
//     {value:2, __proto__ : boxPro},
//     {value:3, __proto__ : boxPro},

// ]

// A constructor function

function Box(value){
    this.value = value
}

Box.prototype.getValue = function(){
    return this.value
}
const boxes = [new Box(1), new Box(2), new Box(3)]

console.log(boxes)

// Mutate Box.prototype after an instance has already been created
const box = new Box(1);
Box.prototype.getValue = function()
{
    return this.value + 1
}

const newd =box.getValue()
console.log(newd)  


const obj = {
    a:1,

}

console.log(Object.getPrototypeOf(obj) === Object.prototype)

const arr = [1,2,3,4]
console.log(Object.getPrototypeOf(arr) === Array.prototype)

const regexp = /abcd/

console.log(Object.getPrototypeOf(regexp) === RegExp.prototype)


