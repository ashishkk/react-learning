import React, {Component, useState} from 'react';
import Popup from "reactjs-popup";

class PopUp extends Component{
    constructor(){
        super();
        this.state = {
            showPopup: false
          };
    }

    handleOpen = () => {
        let {showPopup} = this.state;
        this.setState({showPopup:true})
    }

    handleClose = () => {
        let {showPopup} = this.state;
        this.setState({showPopup:false})
    }

    render() {
        return(
            <div>
               <h1>React PopUp</h1>
               {/* <button>increment</button> */}
               <button onClick={this.handleOpen}>open</button>

               {
                   this.state.showPopup &&
                 <div>
                     <p>dfjkdjdkdjkfjkfjkjdkfdjk</p>
                     <button onClick={this.handleClose}>close</button>
                     </div>
               }
               

            </div>
        )
    }
}
export default PopUp;