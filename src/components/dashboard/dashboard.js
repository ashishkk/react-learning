import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Dashboard extends Component {
    constructor() {
        super()
    }

    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to='/AddtoCart'> Add to Cart</Link>
                    </li>
                    <li>
                        <Link to='/Increment'> FnctionalComponent</Link>
                    </li>
                    <li>
                        <Link to='/CallUse'> Use Effect</Link>
                    </li>
                    <li>
                        <Link to='/Search'> Search Input</Link>
                    </li>

                    <li>
                        <Link to='/counter'> counter</Link>
                    </li>
                    <li>
                        <Link to='/dropdown'> DROP-DOWN</Link>
                    </li>
                    <li>
                        <Link to='/dropSearch'> DROP-Search</Link>
                    </li>
                    <li>
                        <Link to='/popUp'> POP-UP</Link>
                    </li>
                    <li>
                        <Link to='/Filter'> Custom-Drop-Down</Link>
                    </li>
                    <li>
                        <Link to='/multiDropDown'> Multiple-Drop-Down</Link>
                    </li>
                    <li>
                        <Link to='/imageUpload'> Image-Upload</Link>
                    </li>
                    <li>
                        <Link to='/postComp'> Post API Call</Link>
                    </li>
                    <li>
                        <Link to='/todoComp'> TODO LIST API Call</Link>
                    </li>
                    <li>
                        <Link to='/DropKey'> Drop Down Key</Link>
                    </li>
                    <li>
                        <Link to='/DynamicApi'> DYNAMIC API CALL</Link>
                    </li>
                    <li>
                        <Link to='/Countries'> Countries List </Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Dashboard