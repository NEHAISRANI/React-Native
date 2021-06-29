const isLoggedIn = (email,pass,isLogIn) => {
    return{
        type:'logIN',
        email:email,
        pass:pass,
        isLogIn:isLogIn
    }
}

const isLoggedOut = (isLogOut) => {
    return{
        type:'logOUT',
        isLogOut:isLogOut
    }
}

export  {isLoggedIn,isLoggedOut} 
