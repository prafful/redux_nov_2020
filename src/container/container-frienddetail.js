import React from 'react';
import { connect } from 'react-redux';

class FriendDetail extends React.Component {

    getLocationAndYears=()=>{
        var findFriend =  this.props.friendDetail.find(friend =>{
            return friend.id === this.props.clickedFriend.id
        })
        console.log(findFriend)
        return (
            <span>
                <h3> Location: {findFriend.location}</h3>
                <h3> Years: {findFriend.years}</h3>
            </span>
        )
    }
    
    render() { 
        if(this.props.clickedFriend === null){
            return(
                <div>
                    <h2>Status: Not Clicked!</h2>
                    <p>Click any friend to view detail!!!!</p>
                </div>
            )
        }else{
        return (  
                <div>
                       <h2>Friend Detail for {this.props.clickedFriend.id}</h2>
                       <h3>Status: Clicked!!!!</h3>
                       <h3>Name: {this.props.clickedFriend.name} </h3>
                       {this.getLocationAndYears()}

                </div>

            )
        }
    }
}

function convertStoreToProps(store){
    console.log("Store received in FriendDetail Container!!!!")
    console.log(store)
    return {
        clickedFriend: store.friendClickedInStore,
        friendDetail: store.friendDetailInStore

    }

}
 
export default connect(convertStoreToProps)(FriendDetail)