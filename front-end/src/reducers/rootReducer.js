import {registerReducer} from './User/registerReducer';
import authReducer from './User/authReducer';
import {combineReducers} from 'redux';
import followingReducer from './FollowList/followingReducer';
import {followersReducer} from './FollowList/followersReducer';
import {personalReducer} from './PersonalPage/personalReducer';
import {personInfoReducer} from './PersonalPage/personInfoReducer';
const rootReducer = combineReducers({
    registerReducer,
    followingReducer,
    followersReducer,
    personalReducer,
    personInfoReducer,
    authReducer

});
export default rootReducer;