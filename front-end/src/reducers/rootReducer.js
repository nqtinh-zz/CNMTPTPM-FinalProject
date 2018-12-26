import {registerReducer} from './User/registerReducer';
import authReducer from './User/authReducer';
import {combineReducers} from 'redux';
import {personalReducer} from './PersonalPage/personalReducer';
import newfeedReducer from './User/newfeedReducer';
import postReducer from './User/postReducer';

const rootReducer = combineReducers({
    registerReducer,
    personalReducer,
    authReducer,
    postReducer,
    newfeedReducer

});
export default rootReducer;