
// const target ={
//     mess:"name",
//     mess2: "name2"
// }

// const handler1 ={}

// const proxy1 = new Proxy(target, handler1)
// proxy1.mess2 = "gfhjkl"

// console.log(proxy1)

// here handler is empty so the is behave like the origingal one 

const target2 ={
    a:"hello",
    b:"proxy"
}

const handler2 ={
    get(target2, prop, receiver){
        return "everyone"
    }
}

const proxy2 = new Proxy(target2, handler2)
// console.log(proxy2)
// console.log(proxy2.a); // world
// console.log(proxy2.b); // world


const target3 ={
    message1: "hello",
    message2: "everyone",

}

const handler3 = {
    get(target3, prop, receiver) {
      if (prop === "message2") {
        return "worldfghjkl";
      }
      return Reflect.get(...arguments);
    },
  };
  

const prox3 = new Proxy(target3, handler3)
console.log(prox3.message1, prox3.message2)