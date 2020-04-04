import React, {Component} from 'react'
import './filterDropDown.css'

class FilterDropDown extends Component {
    constructor(){
        super();
        this.state={
            cities: ['Hyderabad', 'Chennai', 'Mumbai', 'Kerala', 'Nagpur'],
            city: '',
            newCities: [],
            toggle: false
        }

    }
    toogleHanlder = () => {
        let {toggle} = this.state;
        this.setState({toggle:!toggle})
    }
    removeCityHandler = (ind) => {
        let {cities} = this.state;
        const findcity = cities.find((city, i) => i === ind)
        const removeCity = cities.filter((city, i) => i !== ind)
        this.setState({cities:removeCity, city:findcity}, () => {this.storeCities()})
        
    }
    storeCities = () => {
        let {cities, city, newCities} = this.state;
        newCities.push(city);
        this.setState({newCities})
    }
    revertNewCities = (ind) => {
        let {newCities, city} = this.state;
        console.log("newCities", ind)
        const findNewCity = newCities.find((oldVal, i) => i === ind);
        const removeNewCity = newCities.filter((newCity, i) => i !== ind);
        this.setState({newCities: removeNewCity, city: findNewCity}, () => {this.setOldCities()})
    }
    setOldCities = () => {
        let {cities, city} = this.state;
        cities.push(city);
        this.setState({cities})
    }
    render(){
        console.log(this.state.newCities)
        const {cities, newCities} = this.state;
        const storeNewCities = newCities.map((newCity, i) => {
            return <li className='newListItem' onClick={()=> {this.revertNewCities(i)}}>{newCity}</li>
        })
        return(
            <div className='dropDownContainer'>
                Filter Drop Down
                <div className='dropDown'>
                    <div className='dropDownInput'>
                        <input className='inputWrapper' onClick={this.toogleHanlder}/>
                        <img className="drop-img"
                        src={this.state.toggle ? "https://upload.wikimedia.org/wikipedia/commons/1/16/Black_Arrow_Down.svg" : "https://tse3.mm.bing.net/th?id=OIP.KVDpHu1_6xeIW75RMIffDQHaHa&pid=Api&P=0&w=300&h=300" }
                        />
                        <ul className='newCitiesList'>
                            {storeNewCities}
                        </ul>
                        
                    </div>
                    <hr />
                    <div className={this.state.toggle ? 'show' : 'hide'}>
                        <ul className='dropDownList'>
                            {this.state.cities.map((item, index) => {
                                return (
                                    <li className='listItem' onClick={() =>this.removeCityHandler(index)}>{item}</li>
                                )
                            } )}
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default FilterDropDown;