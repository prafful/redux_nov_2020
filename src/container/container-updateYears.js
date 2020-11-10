import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import plusClickedAction from '../actions/action-plusClicked';

class UpdateYears extends React.Component {
    getYears=()=>{
        var findFriend =  this.props.friendDetail.find(friend =>{
            return friend.id === this.props.clickedFriend.id
        })
        console.log(findFriend)
        return (
            <span>
                <button onClick={()=>{this.props.plusClicked(findFriend)}}>+</button>
                <h3> Years: {findFriend.years}</h3>
                <button>-</button>
            </span>
        )
    }

  render() {
    if(this.props.clickedFriend === null){
        return(
            <div>
                <h2>Status: Not Clicked!</h2>
                <p>Click any friend to view years!!!!</p>
            </div>
        )
    }else{ 
        return ( 
            <div>
                <h2>Update Years....for.... {this.props.clickedFriend.id}</h2>
                {this.getYears()}
            </div>
         )
        }
    }
}


function convertStoreToProps(store){
    console.log("Store received in UpdateYears Container!!!!")
    console.log(store)
    return {
        clickedFriend: store.friendClickedInStore,
        friendDetail: store.friendDetailInStore

    }

}

function convertEventToProps(dispatch){
    return bindActionCreators({
        plusClicked: plusClickedAction
    }, dispatch)
}

export default connect(convertStoreToProps, convertEventToProps)(UpdateYears)