const pro ={
    a:1,
    b:2,
    __proto__:{
        b:3, // This is called Property Shadowing
        c:4

    }
}

console.log(pro.b)
// in the output be will get the 2 This is called Property Shadowing 