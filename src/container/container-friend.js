import React from 'react'
import { connect } from 'react-redux';

class Friend extends React.Component {

    displayAllFriends=()=>{
        return this.props.friendslist.map(friend=>{
            return(
                <li key={friend.id}>
                    {friend.name}
                </li>
            )
        })
    }
    
    render() { 
        return ( 
            <div>
                <div>List of Friends....</div>
                <br></br>
                <ol>
                    {this.displayAllFriends()}
                </ol>
            </div>
         );
    }
}

function convertStoreToProps(store){
    console.log("Store received in Friend Container: ")
    console.log(store)
    //this.props.friendslist is available in Friend Container after below step!
    return {
       friendslist: store.allfriendsInStore 
    }
}
 
export default connect(convertStoreToProps)(Friend)