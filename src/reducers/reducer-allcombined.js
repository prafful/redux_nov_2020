import { combineReducers } from "redux";
import reducerAllFriends from "./reducer-allfriends";
import reducerFriendDetail from "./reducer-frienddetail";




const allReducersCombined = combineReducers({
    allfriendsInStore: reducerAllFriends,
    friendDetailInStore: reducerFriendDetail
})

export default allReducersCombined