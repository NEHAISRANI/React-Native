const isLoggingIn = (email,pass,isLoggedIn) => {
    return{
        type:'LOG_IN',
        email:email,
        pass:pass,
        isLoggedIn:isLoggedIn
    }
}

const isLoggingOut = (isLoggedOut) => {
    return{
        type:'LOG_OUT',
        isLoggedOut:isLoggedOut
    }
}

export  {isLoggingIn,isLoggingOut} 
