import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import friendNameClickedAction from '../actions/action-friendNameClicked';

class Friend extends React.Component {

    displayAllFriends=()=>{
        return this.props.friendslist.map(friend=>{
            return(
                <li key={friend.id}
                    onClick={()=>this.props.friendClicked(friend)}>
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

function myConvertStoreToProps(store){
    console.log("Store received in Friend Container: ")
    console.log(store)
    //this.props.friendslist is available in Friend Container after below step!
    return {
       friendslist: store.allfriendsInStore 
    }
}

function myConvertEventToProps(dispatch){
    return bindActionCreators({
        friendClicked: friendNameClickedAction
    }, dispatch)
}
 
export default connect(myConvertStoreToProps, myConvertEventToProps)(Friend)