const reducerFriendDetail = function createFriendDetailReducer(state = null, action){
    var friendDetailExport = [
        {

            "location": "Chennaiiii",
            "years": "4",
            "id": 1
          },
          {
            "id": 2,
          
            "location": "Chennai",
            "years": 2
          },
          {
            "name": "BNP",
            "location": "Mumbai",
            "years": 8,
            "id": 3
          },
          {
          
            "location": "Japan",
            "years": 17,
            "id": 4
          },
          {
           
            "location": "Tea Chowk",
            "years": "9",
            "id": 5
          },
          {
          
            "location": "Tokyo",
            "years": "18",
            "id": 12
          }
    ]
    console.log("State in reducerFriendDetail: ")
    console.log(state)
    switch (action.type) {
      case "PLUS_CLICKED":
        var updatedFriendDetailExport = state.map(friend =>{
          if(friend.id === action.payload.id){
            friend.years++
            return friend
          }
          return friend
        })
        return updatedFriendDetailExport
    
      default:
        break;
    }



    return friendDetailExport
}

export default reducerFriendDetail