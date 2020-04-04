import React, {Component, Children} from 'react'
import {personsList} from '../../../presMockData'
class MultipleDropDown extends Component {
    constructor(){
        super()
        this.state = {
            personsList: personsList,
            personName: '',
            childName: ''

        }

    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    render(){
        let filterPersonList = this.state.personsList.find((children, i) => (children.Name === this.state.personName))
        let filterCity = filterPersonList && this.state.childName ? filterPersonList.children.find((city, i) => 
        (city.Name === this.state.childName)) : null
        console.log(filterCity)

        return (
            <div>
                <div>
                    <select
                    name='personName'
                    value={this.state.personName} onChange={this.changeHandler}>
                        {this.state.personsList.map((items, index) => {
                            return <option>
                                {items.Name}
                            </option>
                        })}
                    </select>
                </div>
                <div>
                    { filterPersonList &&
                    <select
                    name='childName'
                    value={this.state.childName} onChange={this.changeHandler}>
                        {filterPersonList.children.map((item, i) => {
                            return <option>
                                {item.Name}
                            </option>

                        })}
                    </select>
                    }
                </div>
                <div>
                    {filterCity &&
                    <select>
                        {filterCity.City.map((item, i) => {
                            return <option>
                                {item.name}
                            </option>
                        })}
                    </select>
                    }
                </div>
            </div>
            )
    }
}
export default MultipleDropDown