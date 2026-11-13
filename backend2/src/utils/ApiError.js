class ApiError extends Error{
    constructor(
        stateCode,
        message = "somthing went worng",
        errors =[],
        stack ="",
    ){

        super(message)
        this.stateCode = stateCode
        this.data = null
        this.message = message
        this.errors = errors
        if(statck){
        this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}