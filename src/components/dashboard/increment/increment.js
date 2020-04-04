import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Increment = () => {
    const [state, setState] = useState({count: 0})
    const [fullname, setfullname] = useState({name:"ashish", lastname:"kumar"})
    

    const incrementHandler = () => {
        setState({count: state.count+1})
    }
     
    useEffect(() => {
        setfullname({name:"narender", lastname:"baddam"})
    })
    return (
        <div>
            <h1>{state.count}</h1>
            <h1>{fullname.name}</h1>
            Incrementer
            <button onClick = {incrementHandler}>Increment</button>
        </div>
    )
}
export default Increment;