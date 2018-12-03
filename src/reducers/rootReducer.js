import {loginReducer} from './User/loginReducer';
import {registerReducer} from './User/registerReducer';
import {combineReducers} from 'redux';
import followingReducer from './FollowList/followingReducer';
import {followersReducer} from './FollowList/followersReducer';
const rootReducer = combineReducers({
    followingReducer,
    followersReducer,
    loginReducer,
    registerReducer,
    
});
export default rootReducer;