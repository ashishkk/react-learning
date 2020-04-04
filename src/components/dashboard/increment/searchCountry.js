import React, {Component} from 'react'
import {companies} from '../../../mockData'

class SearchInp extends Component {
    constructor(){
        super();
        this.state = {
            CompanyList: [],
            filteredCompanyList: []
        }
    }

    componentDidMount(){
        this.setState({CompanyList: companies}, () => {this.changeHandler('')});
    }

    changeHandler = (searchText) =>{
        console.log("searchText", searchText);
        let searchData = this.state.CompanyList.filter((item) => {
            return item.category.toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
        }) 
        this.setState({filteredCompanyList: searchData})

    }
    render() {
        return (
            <div>
                Search Country
                <input type='text' onChange={(e) => this.changeHandler(e.target.value)}/>
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Start</th>
                            <th>End</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.filteredCompanyList.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.start}</td>
                                            <td>{item.end}</td>
                                        </tr>
                                    )

                                })
                            }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default SearchInp;