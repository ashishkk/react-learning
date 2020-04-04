import React, {Component} from 'react';
import UpdatedComponent from './withCounter'
class HoverCounter extends Component{
    constructor(){
        super();
    }
    render() {
        const {counter, incrementHanlder} = this.props;
        return(
            <div>
               <h1>{counter}</h1>
               <button onMouseOver={incrementHanlder}>increment</button>
            </div>
        )
    }
}
export default UpdatedComponent(HoverCounter);