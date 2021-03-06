import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import {MenuItem} from 'material-ui/Menu'

import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import { isAuthenticated } from '../../reducers/userReducer'

import './Header.css'

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
    }

    state = {
        open: false
    }

    constructor(props) {
        super(props);
        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    toggleDrawer() {
        this.setState((prevState) => {
            return {open: !prevState.open}
        })
    }

    renderSignInOutButtons() {
        const {isAuthenticated, signout} = this.props
        if(isAuthenticated) {
            return <Button color="contrast"><Link onClick={signout} to="/signout">Sign Out</Link></Button>
        } else {
            return <Button color="contrast"><Link to="/signin">Sign In</Link></Button>
        }
    }

    render() {
        const {classes, } = this.props;

        return (<div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="contrast"
                                aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        Demo
                    </Typography>
                    <Button color="contrast"><Link to="/register">Register</Link></Button>
                    {this.renderSignInOutButtons()}
                </Toolbar>
            </AppBar>
            <Drawer open={this.state.open}>
                <MenuItem><img width={200} alt="logo"
                               src="https://www.jonahgroup.com/wp-content/themes/v4/images/jonah_logo.png"/></MenuItem>
                <Link className="nav-items" to="/"><MenuItem onClick={this.toggleDrawer}>Home</MenuItem></Link>
                <Link className="nav-items" to="/list"><MenuItem onClick={this.toggleDrawer}>Todo List</MenuItem></Link>
                <Link className="nav-items" to="/weather"><MenuItem onClick={this.toggleDrawer}>Weather</MenuItem></Link>
            </Drawer>
        </div>)
    }

}


const mapStateToProps = state => {
    return {
        isAuthenticated: isAuthenticated(state)
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Header))