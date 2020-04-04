import React, {Component} from 'react';
import HoverCounter from './hoverCounter'
import ClickCOunter from './clickCounter';

class Counter extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div>
               <ClickCOunter />
             <HoverCounter />
            </div>
        )
    }
}
export default Counter;