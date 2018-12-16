const initialState = {privateKey:'abc',publicKey:'abc'};

export const registerReducer  = (state = initialState, action)=>{
    switch(action.type){
        case "REGISTER_ACTION": 
           return{
               ...state,
               privateKey: action.privatekey,
               publicKey: action.publickey
           }
        case "GET_PRIVATE_KEY":
           return{
               ...state
           }
        default: return initialState;
    }
}