const friendNameClickedAction = function(friend){
    console.log("Building action broadcast for friend clicked!!!!");
    console.log(friend)
    console.log("Reducer will capture this broadcast i.e. type/payload....");
    return {
        type:'FRIEND_CLICKED',
        payload: friend
    }
}

export default friendNameClickedAction