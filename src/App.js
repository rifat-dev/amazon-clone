import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home/home'
import Hader from './hader/hader'
import LogIn from './pages/LogIn/logIn'
import Checkout from './pages/Checkout/Checkout'
import { useStateValue } from "./pages/components/StateProvider";
import { auth } from './pages/components/fairbase'
import './App.css';

const App = () => {

  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Hader />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/checkout" >
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
