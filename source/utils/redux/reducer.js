const initialState = {
    email:'',
    password:'',
    isLogIn:'false'
}



const reducer = (state=initialState,action)=>
{
  
    switch(action.type){
        case "logIn": {
          return {...state,email:action.email,pass:action.pass,isLogIn:action.isLogIn};
        }
        case "logOut": {
          return {...state,email:'',pass:'',isLogIn:'false'};
        }
        default:{
          return 
        }
    }

}

export default reducer