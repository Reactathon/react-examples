import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Typography from 'material-ui/Typography'

import {loginUser} from '../../actions/userActions'
import {isAuthenticated, loginError} from '../../reducers/userReducer'

import './SignIn.css'

class SignIn extends Component {

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired
    }

    state = {
        userName: '',
        password: ''
    }

    constructor(props) {
        super(props)

        // Bind the handle methods so they can reference this.state
        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleUserNameChange(event) {
        this.setState({userName: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    handleSignIn() {
        const {userName, password} = this.state
        this.props.login(userName, password)
        this.setState({
            userName: '',
            password: ''
        })
    }

    renderError(error) {
        if(error) {
            if(error === 401) {
                return <Typography color="error">Invalid username or password</Typography>
            } else {
                return <Typography color="error">An error occurred when logging in</Typography>
            }
        }
    }

    render() {

        const { isAuthenticated, error } = this.props


        if (isAuthenticated) {
            return <Redirect to={{
                pathname: '/',
            }}/>
        }

        return (
            <div className="signin-container">
                <h1>Sign In</h1>
                {this.renderError(error)}
                <span>User Name: <input value={this.state.userName} onChange={this.handleUserNameChange} type="input"/></span>
                <span>Password:  <input value={this.state.password} onChange={this.handlePasswordChange}
                                        type="password"/></span>
                <button onClick={this.handleSignIn}>Sign In</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: isAuthenticated(state),
        error: loginError(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userName, password) => dispatch(loginUser(userName, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)