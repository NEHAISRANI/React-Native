const initialState = {
  email: '-',
  password: '-',
  islogIn: 'false',
};

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        email: action.email,
        pass: action.pass,
        islogIn: action.islogIn,
      };
    }
    case 'LOGOUT': {
      return {...state, email: '-', pass: '-', islogIn: 'false'};
    }
    default: {
      return state;
    }
  }
};

export default checkReducer;