import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TODO_LIST} from '../../../Actions/todo/todoAction'

class Todo extends Component{
    constructor(){
        super();
    }


componentDidMount = () => {
    this.props.TODO_LIST();
}
    render(){
       if(this.props.Loading){
           return(<h1>LOADING.............</h1>)
       }
       else if(this.props.TodoList){
           return(
               <div>
                   {<ul>{this.props.TodoList.map((item, i) => {
                       return <li>{item.title}, {item.completed}</li>
                   })}</ul>}
               </div>
           )
       }
       else if(this.props.err){
           return alert('ERROR')
       }
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return{
        Loading: state.TodoReducer.Loading,
        TodoList: state.TodoReducer.TodoList,
        err: state.TodoReducer.err
    }
}

const mapDispatchToProps = {
    TODO_LIST
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)