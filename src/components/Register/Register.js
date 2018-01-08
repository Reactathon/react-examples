import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Typograph from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

import {registerUser} from "../../services/userService"

import './Register.css'

class Register extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        errors: {}
    }

    onChange = name => event => {
        const user = Object.assign({}, this.state.user, {[name]: event.target.value})
        this.setState({user})
    }

    submit = () => {
        const {user} = this.state
        const errors = {}
        let validationErrors = false
        for (const prop in user) {
            if(!user[prop]) {
                errors[prop] = true
                validationErrors = false
            }
        }

        if(!validationErrors) {
            registerUser(user)
            this.props.history.push('/signin')
        } else {
            this.setState({errors})
        }



    }

    render() {
        return (
            <Paper>
                <Typograph type='display3' style={{textAlign: 'center'}}>Register</Typograph>
                <form className='register-container'>
                    <TextField label='First Name' error={this.state.errors.firstName} value={this.state.user.firstName} onChange={this.onChange('firstName')}/>
                    <TextField label='Last Name' error={this.state.errors.lastName} value={this.state.user.lastName} onChange={this.onChange('lastName')}/>
                    <TextField label='Email' error={this.state.errors.email} value={this.state.user.email} onChange={this.onChange('email')}/>
                    <TextField label='Password' error={this.state.errors.password} type="password" value={this.state.user.password} onChange={this.onChange('password')}/>
                    <Button onClick={this.submit}>Submit</Button>
                </form>
            </Paper>
        )
    }
}

export default Register