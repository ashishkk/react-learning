import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAPICall} from '../../../Actions/DynamicApi/DynamicAction';

class DynamicAPI extends Component{
    constructor(){
        super();
        this.state ={
            id:1
        }

    }

    componentDidMount = () => {
        this.props.getAPICall(this.state.id);
    }

    getDispalyData = () => {
        if(this.props.loading){
            return <h1> Loading.......</h1>
        }
        else if(this.props.dynamicList){
            return (<div>
             <h5>id:{this.props.dynamicList.id}</h5>

             <h5>Title:{this.props.dynamicList.title}</h5>
            </div>)
        }
        else if (this.props.error){
            console.log("error", this.props.error)
        }
      
    }
    changehanlder = (e) => {
     this.setState({id:e.target.value})
    }
    submitHanlder = () => {
        this.props.getAPICall(this.state.id)
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.id} onChange={this.changehanlder} />
                <button onClick={this.submitHanlder}>submit</button>
                {this.getDispalyData()}
                </div>
        )
       
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return{
        loading: state.DynamicReducer.loading,
        dynamicList: state.DynamicReducer.post,
        error: state.DynamicReducer.error
    }
}

const mapDispatchToProps ={
    getAPICall
}

export default connect(mapStateToProps, mapDispatchToProps)(DynamicAPI);