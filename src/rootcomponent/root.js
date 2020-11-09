import React from 'react';
import Friend from '../container/container-friend';


class RootComponent extends React.Component {
  
    render() { 
        return (
            <div>
                <h1>Root Component Works!!!!</h1>
                <Friend></Friend>
            </div>
          );
    }
}
 
export default RootComponent;