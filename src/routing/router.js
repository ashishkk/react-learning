import React, {Component} from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../components/login/login'
import Dashboard from '../components/dashboard/dashboard'
import AddtoCart from '../components/dashboard/addtocart/addtocart';
import Increment from '../components/dashboard/increment/increment';
import CallUSE  from '../components/dashboard/increment/callEffect';
import SearchInp from '../components/dashboard/increment/searchCountry';
import Counter from '../components/dashboard/hoc/counter';
import DropDown from '../components/dashboard/increment/dropdown';
import DropSearch from  '../components/dashboard/dropSearch/dropSearch';
import PopUp from '../components/dashboard/popUp/popUpWindow';
import FilterDropDown from '../components/dashboard/filterDropDown/filterDropDown';
import MultiDropDown from  '../components/dashboard/multiDropDown/multiDropDown';
import ImageUpload from '../components/dashboard/imageUpload/imageUpload';
import PostComp from '../components/dashboard/postComp/postComp';
import TodoComp from '../components/dashboard/todoComp/todoComp';
import DropKey from '../components/dashboard/dropDownWithKey/dropKey';
import DynamicApi from '../components/dashboard/dynamicApi/dynamicApi';
import Countries from '../components/dashboard/countries/countries';

class Routers extends Component {
    constructor() {
        super()
    }

    render(){
        return( 
            <div>
            <Router>
               <Route exact path='/' component={Login} />
               <Route exact path='/Dashboard' component={Dashboard} />
               <Route exact path='/AddtoCart' component={AddtoCart} />
               <Route exact path='/Increment' component={Increment} />
               <Route exact path='/Calluse' component={CallUSE} />     
               <Route exact path='/Search' component={SearchInp}/>        
               <Route exact path='/counter' component={Counter}/>
               <Route exact path='/dropdown' component={DropDown}/>
               <Route exact path='/dropSearch' component={DropSearch}/>
               <Route exact path='/popUp' component={PopUp}/>
               <Route exact path='/Filter' component={FilterDropDown}/>
               <Route exact path='/multiDropDown' component={MultiDropDown}/>
               <Route exact path='/imageUpload' component={ImageUpload}/>
               <Route exact path='/postComp' component={PostComp}/>
               <Route exact path='/todoComp' component={TodoComp}/>
               <Route exact path='/DropKey' component={DropKey}/>
               <Route exact path='/DynamicApi' component={DynamicApi}/>
               <Route exact path='/Countries' component={Countries}/>
            </Router>
            </div>
        )
    }
}

export default Routers