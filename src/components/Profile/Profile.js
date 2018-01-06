import React, { Component } from 'react'

import UserProfile from './UserProfile'
import { connect } from 'react-redux'

class Profile extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(`The profile id is ${id}`)
    }

    render() {
        const {profile} = this.props
        return <UserProfile firstName={profile.firstName} lastName={profile.lastName} email={profile.email} />
    }

}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Profile)
