import {registerReducer} from './User/registerReducer';
import authReducer from './User/authReducer';
import {combineReducers} from 'redux';
import {personalReducer} from './PersonalPage/personalReducer';
import newfeedReducer from './User/newfeedReducer';
import postReducer from './User/postReducer';
import {searchReducer} from './Search/searchReducer';
import {searchReducer2} from './Search/searchReducer2';


const rootReducer = combineReducers({
    registerReducer,
    personalReducer,
    authReducer,
    postReducer,
    newfeedReducer,
    searchReducer,
    searchReducer2
    

});
export default rootReducer;