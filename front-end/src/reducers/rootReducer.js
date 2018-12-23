import {registerReducer} from './User/registerReducer';
import authReducer from './User/authReducer';
import {combineReducers} from 'redux';
import followingReducer from './FollowList/followingReducer';
import {followersReducer} from './FollowList/followersReducer';
import {personalReducer} from './PersonalPage/personalReducer';
import {personInfoReducer} from './PersonalPage/personInfoReducer';
import postReducer from './User/postReducer';
const rootReducer = combineReducers({
    registerReducer,
    followingReducer,
    followersReducer,
    personalReducer,
    personInfoReducer,
    authReducer,
    postReducer

});
export default rootReducer;