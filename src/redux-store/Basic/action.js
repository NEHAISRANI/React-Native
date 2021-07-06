const isLoggedIn = (email,pass,islogIn) => {
    return{
        type:'LOGIN',
        email:email,
        pass:pass,
        islogIn:islogIn
    }
}

const isLoggedOut = (islogOut) => {
    return{
        type:'LOGOUT',
        islogOut:islogOut
    }
}

export  {isLoggedIn,isLoggedOut} 