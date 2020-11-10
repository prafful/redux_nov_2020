const reducerFriendClicked = function createFriendClickedReducer(state = null, action){
    console.log("Value of state in createFriendClickedReducer: ")
    console.log(state)
    console.log("Value of action in createFriendClickedReducer: ")
    console.log(action)
    switch (action.type) {
        case 'FRIEND_CLICKED':
            return action.payload
            
    
        default:
            break;
    }

    return state

}

export default reducerFriendClicked