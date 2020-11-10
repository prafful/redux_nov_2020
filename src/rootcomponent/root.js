import React from 'react';
import Friend from '../container/container-friend';
import FriendDetail from '../container/container-frienddetail';


class RootComponent extends React.Component {
  
    render() { 
        return (
            <div>
                <h1>Root Component Works!!!!</h1>
                <Friend></Friend>
                <FriendDetail></FriendDetail>
            </div>
          );
    }
}
 
export default RootComponent;