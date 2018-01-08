import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setVisibilityFilter } from "../../actions/todoActions"
import { getVisibilityFilter } from "../../reducers/todoReducer";

const VisibilityFilter = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href=""
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

VisibilityFilter.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: getVisibilityFilter(state) === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter)