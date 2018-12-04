import {loginReducer} from './User/loginReducer';
import {registerReducer} from './User/registerReducer';
import {combineReducers} from 'redux';
import followingReducer from './FollowList/followingReducer';
import {followersReducer} from './FollowList/followersReducer';
import {personalReducer} from './PersonalPage/personalReducer';
import {personInfoReducer} from './PersonalPage/personInfoReducer';
const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    followingReducer,
    followersReducer,
    personalReducer,
    personInfoReducer
});
export default rootReducer;