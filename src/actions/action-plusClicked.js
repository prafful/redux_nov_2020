const plusClickedAction = function(friend){
    console.log("Building action broadcast for plus clicked!!!!");
    console.log(friend)
    console.log("Reducer will capture this broadcast i.e. type/payload....");
    return {
        type:'PLUS_CLICKED',
        payload: friend
    }
}

export default plusClickedAction