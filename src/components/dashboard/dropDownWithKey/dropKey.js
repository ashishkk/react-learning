import React, {Component} from 'react';
import {companies} from '../../../mockData';

class DropKey extends Component{
    constructor(){
        super();
        this.state = {
            newCompanies: companies,
            filterCompanies:[]
        }
    }
    componentDidMount = () => {
        this.setState({filterCompanies:companies})
    }
  
    handleSelect = (e) => {
   let selectFieldName = e.target.value;
   let {newCompanies} = this.state;
   let filterCompanies=newCompanies.map((item,index) => {
       return item[selectFieldName]
   })
   this.setState({filterCompanies,companyName:selectFieldName})
    }

    render() {
        console.log("filtercompanies", this.state.filterCompanies)
        return(
            <div>
                Drop KEY
                <select onChange={this.handleSelect}>
                    <option value="name">name</option>
                    <option value="category">category</option>
                    <option value="start">start</option>
                    <option value="end">end</option>
                    </select>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>CATEGORY</th>
                                <th>START</th>
                                <th>END</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.filterCompanies.map((item,index) => {
                                        return (
                                            <tr>
                                                {/* <td>{item}</td> */}
                                        <td>{this.state.companyName == "name"? <p>{item}</p> :<p>{item.name}</p> } </td>
                                        <td>{this.state.companyName == "category"? <p>{item}</p> :<p>{item.category}</p> } </td>
                                        <td>{this.state.companyName == "start"? <p>{item}</p> :<p>{item.start}</p> } </td>
                                        <td>{this.state.companyName == "end"? <p>{item}</p> :<p>{item.end}</p> } </td>
                                                </tr>
                                        )
                                    })
                                }
                                </tbody>
                        </table>
            </div>
        )
    }
}

export default DropKey;