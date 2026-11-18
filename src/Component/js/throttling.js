const throttle =(fun, delay) =>{

    let lastCall = 0;
    return function(...args){
        let now = Date.now();
        if(now - lastCall < delay){
            return
        }
        lastCall = now;
        return fun(...args)
    }

}

const sendMess = (message) =>{
    console.log(`sending messsage ${message}`)
}

const newMessage = throttle(sendMess, 3000)

newMessage('newMessage'),
newMessage("me fghjk")