import { combineReducers } from "redux";
import reducerAllFriends from "./reducer-allfriends";
import reducerFriendClicked from "./reducer-friendClicked";
import reducerFriendDetail from "./reducer-frienddetail";




const allReducersCombined = combineReducers({
    allfriendsInStore: reducerAllFriends,
    friendDetailInStore: reducerFriendDetail,
    friendClickedInStore: reducerFriendClicked
})

export default allReducersCombined