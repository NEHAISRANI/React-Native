const initialState = {
    email:'-',
    password:'-',
    isLoggedIn:'false'
}



const reducer = (state=initialState,action)=>
{
  
    switch(action.type){
        case "LOG_IN": {
          return {...state,email:action.email,pass:action.pass,isLoggedIn:action.isLoggedIn};
        }
        case "LOG_OUT": {
          return {...state,email:'-',pass:'-',isLoggedIn:'false'};
        }
        default: {
          return state;
        }
    }

}

export default reducer