import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountriesList } from '../../../Actions/countries/countiresAction';
import {getSelectCountryList} from '../../../Actions/countries/selectCountryAction';

class Countries extends Component {
    constructor() {
        super();
        this.state ={
            selectCountryName :"india"
        }
    }

    componentWillMount = () => {
        this.props.getCountriesList()
    // this.props.getSelectCountryList(this.state.selectCountryName)
    
    

        
    }

    selectHandler = () => {
        if(this.props.selectCountry){
            return(
                <div>
                     { this.props.selectCountry && this.props.selectCountry.map((item, i) => {
                        return (
                            <div>
                                <h2>{item.name}</h2>
                                <h2>{item.capital}</h2>
                                <img  src={item.flag}  height="100" width="100"/>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    changeHandler = (e) => {
        console.log(e.target.value)
        this.setState({selectCountryName:e.target.value}, () => {this.getSelectedCountry()})
    }
    getSelectedCountry = () => {
    this.props.getSelectCountryList(this.state.selectCountryName)
    }

    
    // renderFullList = () => {
    //     if (this.props.loading) {
    //         return (<div><h1>Loading........</h1></div>)
    //     }
    //     else if (this.props.listCountries) {
    //         return (
    //             <div>
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <th>Country Name</th>
    //                             <th>Country Capital</th>
    //                             <th>Country Flag</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {this.props.listCountries.map((item, i) => {
    //                             return (
    //                                 <tr>
    //                                     <td>{item.name}</td>
    //                                     <td>{item.capital}</td>
    //                                     <td><img src={item.flag} height='100px' width='100px' /></td>
    //                                 </tr>
    //                             )
    //                         })}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         )
    //     }
    //     else if (this.props.error) {
    //         console.log('ERROR', this.props.error)
    //     }
    // }

    renderDropDownList = () => {
        if (this.props.listCountries) {
            return (
                <div>
                    <select onChange={this.changeHandler}>
                        {this.props.listCountries.map((item, i) => {
                            return (<option>{item.name}</option>)
                        })}
                    </select>

                    <div>
                        {this.selectHandler()}
                        </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {/* {this.renderFullList()} */}
                {this.renderDropDownList()}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    console.log("list", state);
    return {
        listCountries: state.CountriesReducer.listCountries,
        loading: state.CountriesReducer.loading,
        error: state.CountriesReducer.error,
        selectCountry: state.SelectCountriesReducer.selectedlistCountries,
        newLoad: state.SelectCountriesReducer.loading,
        newError: state.SelectCountriesReducer.error
    }
}

const mapDispatchToProps = {
    getCountriesList,
    getSelectCountryList
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);