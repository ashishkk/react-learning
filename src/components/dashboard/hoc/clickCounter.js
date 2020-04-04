import React, {Component} from 'react';
import UpdatedComponent from './withCounter';

class ClickCOunter extends Component{
    constructor(){
        super();
    }

    render() {
        const {counter, incrementHanlder} = this.props;
        return(
            <div>
                <h1>{counter}</h1>
                <button onClick={incrementHanlder}>CLICK ME!!</button>
            </div>
        )
    }
}
export default UpdatedComponent(ClickCOunter);