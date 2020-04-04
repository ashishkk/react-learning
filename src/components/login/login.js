import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLogin } from '../../Actions/login/loginAction'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    changehanlder = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    loginHandler = () => {
        let { email, password } = this.state
        this.props.getLogin({ email, password })
        this.setState({}, () => { this.getResult() })
    }

    getResult = () => {
        { this.props.loginData.length > 0 ? this.props.history.push('/Dashboard') : alert("invalid  Email or Password") }

    }

    render() {
        // console.log('email', this.state.email, this.state.password)
        return (
            <div>
                Login PAGE
                <div>
                    <input name="email" type='email' onChange={this.changehanlder} /><br />
                    <input name="password" type='password' onChange={this.changehanlder} /> <br />
                    <button onClick={this.loginHandler}>Login</button>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        loginData: state.LoginReducer.userData

    }
}
const mapDispatchToprops = {
    getLogin
}

export default connect(mapStatetoProps, mapDispatchToprops)(Login)