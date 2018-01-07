import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import {Provider} from 'react-redux'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue'

import createStore from './store/createStore'
import Landing from './components/Landing/Landing.js'
import Header from './components/Header/Header'

import About from './components/About/About'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import Register from './components/Register/Register'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Profile from './components/Profile/Profile'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AccountInformation from './components/AccountInformation/AccountInformation'


import './App.css';
import 'typeface-roboto'

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
        primary: blue
    },
});

const store = createStore()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <div className="App">
                            <Header/>
                            <Switch>
                                <Route path="/about" component={About}/>
                                <Route path="/" exact component={Landing}/>
                                <Route path="/profile/:id" component={Profile}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/signout" component={SignOut}/>
                                <AuthenticatedRoute path="/account-information" component={AccountInformation}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                    </MuiThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
