import React, {Component, useEffect} from 'react';
import {companies} from '../../../mockData'
import axios from 'axios';

class DropSearch extends Component{
    constructor(){
        super();
        this.state = {
            searchInput: '',
            dropDownInput:null,
            companies: [],
            getFilteredCompany: companies,
            apiData: [],
            isVisible: 5
        }
    }

    getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
            this.setState({apiData: result.data})
        }).catch(error => {
            console.log(error)
        })
        
    }

    componentWillMount = () => {
        this.setState({companies: companies});
        this.getData();
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    submitHandler = () => {
        let { searchInput, dropDownInput, companies } = this.state;
        let filteredData = companies;
        if(searchInput) {
            filteredData = filteredData.filter((item, index) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
        }
        if(dropDownInput) {
            filteredData = filteredData.filter((item,index) => item.category === dropDownInput)
        }
        this.setState({getFilteredCompany:filteredData})
    }

    loadMore = () => {
        let {isVisible} =this.state;
        this.setState({isVisible: isVisible+4})
    }
    render() {
        // console.log(this.state.searchInput, this.state.dropDownInput)
        console.log("filteredcompanies0", this.state.getFilteredCompany.length)
        return(
            <div>
                <h1>Drop Search</h1>
                <input name="searchInput" type='text' value={this.state.searchInput} onChange={this.changeHandler}/>
                <br></br>
                <select name="dropDownInput" onChange={this.changeHandler}> 
                    <option value="">Select</option>
                    <option value="Retail">Retail</option>
                    <option value="Auto">Auto</option>
                    <option value="Finance">Finance</option>
                    <option value="Technology">Technology</option>
                </select>    
                <br></br> 
                <button disabled={!this.state.searchInput} onClick={this.submitHandler}>Search</button>
                {this.state.getFilteredCompany.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Start</th>
                        <th>End</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.getFilteredCompany.map((item) => {
                            return (
                                <tr>
                                    <td>{item.category}</td>
                                    <td>{item.name}</td>
                                    <td>{item.start}</td>
                                    <td>{item.end}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table> 
                    : <p>
                        "No Data to Display"
                    </p>
                    }

                    <div>
                        <h1>posts</h1>
                        {
                            this.state.apiData.slice(0, this.state.isVisible).map((item, index) =>{
                                return (
                                    <div>
                                        <h1>{item.id}, {item.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={this.loadMore}>Load more.......</button>
            </div>
        )
    }
}
export default DropSearch;