import React, {Component} from 'react';
import {companies} from '../../../mockData'

class DropDown extends Component{
    constructor(){
        super();
        this.state = {
            companyList:companies,
            dropDownFilterList: []            
        }
    }

    componentWillMount = () => {
        this.setState({dropDownFilterList: companies});
    }

    selectHandler = (e) => {
        let selectName = e.target.value;
        let dropDownFilterList = this.state.companyList.filter((item) => {
            if(selectName === item.category){
                return item;
            }
        })
        this.setState({dropDownFilterList})
    }

    render(){
        return(
            <div>
                <h1> DROP DOWN</h1>
                <select onChange={this.selectHandler}> 
                    <option>Select</option>
                    <option>Retail</option>
                    <option>Auto</option>
                    <option>Finance</option>
                    <option>Technology</option>
                </select>

                <table>
                    <thead>
                        <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Start</th>
                        <th>End</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.dropDownFilterList.map((item, index) => {
                        return <tr>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                            <td>{item.start}</td>
                            <td>{item.end}</td>
                        </tr>
                    })}</tbody>
                </table>
            </div>
        )
    }
}

export default DropDown;