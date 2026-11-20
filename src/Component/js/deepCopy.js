const original = {
    name : "ram",
    address:{
        city:"Delhi",
    }
}


const copy = structuredClone(original);

console.log(copy.address.city ="Mumbai", original.address.city)