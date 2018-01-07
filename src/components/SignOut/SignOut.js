import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {logout} from "../../actions/userActions";

class SignOut extends Component {

    static propTypes = {
        signout: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.signout()
    }

    render() {
        return <div>You have been successfully signed out!</div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SignOut)