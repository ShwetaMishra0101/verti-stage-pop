const original  = {

    name :"shweta",
   address:{
    city:"bengaluru"

    }
}


const copy = {...original}

copy.name ="Mishra"
copy.address.city = "Delhi";
console.log(copy.name, original.name)
console.log(copy.address.city, original.address.city) 



