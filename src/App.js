import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomeLayout} from "./layouts/HomeLayout";
import {AuthLayout} from "./layouts/AuthLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./context/UserContext";
import React, {useEffect, useState} from "react";

function App() {
    const [userState, setUserState] = useState({
        token: '',
        user: {name: '', balance: '', avatar: ''},
    });

    //to check if user and token exists in the local storage and if true setting the state
    useEffect(() => {
        let token = localStorage.getItem("auth-token");
        let user = localStorage.getItem("user");
        if (token) {
            setUserState({
                token: token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <Router>
            <Switch>
                //Providing context to all the routes
                <UserContext.Provider value={{userState, setUserState}}>
                    <Route exact path="/" component={HomeLayout}/>
                    <Route exact path="/login" component={AuthLayout}/>
                </UserContext.Provider>
            </Switch>
        </Router>
    );
}

export default App;
