// if user noumber of specfiy time not doing anything then call the api otherwise reset the api is called debounce

function debounce(fn, delayed){

    let timerId;
    return function(...args){
        clearTimeout(timerId);
      timerId = setTimeout(()=>{
        fn(...args)
       }, delayed)
    }

}

const search = (query) =>{
    console.log(`searching for ${query}`)

}

const newDeb = debounce(search, 300)

// search("h")
// search("ha")
// search("har")
// search("hard")
// search("hard ")
// search("hard j")
// search("hard js")

// newDeb("h")
// newDeb("ha")
// newDeb("har")
// newDeb("hard")
// newDeb("hard ")
// newDeb("hard j")
// newDeb("hard js dfghjkl;")










function deb(fn, delayed){

    let timerId;
    return function(...args){
        clearInterval(timerId)
        timerId = setTimeout(()=>{
            fn(...args)

        },delayed)

    }

}

const searchs = (query) =>{
console.log(`serching for ${query}`)
}

const debs = deb(searchs, 400)

debs('hgjk')
debs('hgjkghjkl;')
debs('hgjkghjkl;fghjkl;')
