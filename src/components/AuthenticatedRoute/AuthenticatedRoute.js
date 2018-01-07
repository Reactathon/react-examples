import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { isAuthenticated } from '../../reducers/userReducer'

const AuthenticatedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

const mapStateToProps = state => {
    return {
        isAuthenticated: isAuthenticated(state)
    }
}

export default connect(mapStateToProps)(AuthenticatedRoute)