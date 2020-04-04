import React, {Component} from 'react';

const updatedComponent = (Originalcomponent) => {
class WithCounter extends Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
    incrementHanlder = () => {
        let {counter}= this.state;
        this.setState({counter:counter+1})
    }

    render() {
        return(
            <Originalcomponent
            counter={this.state.counter}
            incrementHanlder ={this.incrementHanlder}
             />
        )
    }
}
return WithCounter
}
export default updatedComponent;