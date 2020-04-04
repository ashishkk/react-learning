import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CallUseApi = () => {
    const [countries, setCountries] = useState([]);
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState('');

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                setCountries(res.data)
                setLoad(true)
            }).catch(err => {
                // console.log("err", err)
                throw err
            })
    }, [])

    if (load) {
        return (
            <ul>
                {err ? <h1>did not get data</h1> : <div>{countries.map((item, index) => {
                    return <li>{item.name}</li>
                })}</div>}
            </ul>
        )
    } else {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

}
export default CallUseApi;