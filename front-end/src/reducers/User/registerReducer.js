const initialState = null;

export const registerReducer  = (state = initialState, action)=>{
    switch(action.type){
        case "REGISTER_ACTION": 
            state.userData =  action.userData;
            state.priKey = "private123key";
            return state;
        default: return initialState;
    }
}