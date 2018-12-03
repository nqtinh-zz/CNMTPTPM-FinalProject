import {loginReducer} from './User/loginReducer';
import {registerReducer} from './User/registerReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    loginReducer,
    registerReducer
});
export default rootReducer;