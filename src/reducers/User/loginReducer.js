const initialState = {
    loginStatus: false,
    priKey: null,
};

export const loginReducer  = (state = initialState, action)=>{
    switch(action.type){
        case "LOGIN_ACTION": 
        return{...state,
            loginStatus: true,
            priKey:action.priKey,
        }
        default: return initialState;
    }
}