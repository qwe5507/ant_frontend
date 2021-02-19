import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import ChatPage from './components/ant/ChatPage/ChatPage';
import LoginPage from './components/ant/LoginPage/LoginPage';
import RegisterPage from './components/ant/RegisterPage/RegisterPage';
import firebase from "./firebase";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from './redux/actions/user_action';
import Spinner from 'react-bootstrap/Spinner';

function ChatApp() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading)
  let history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        history.push("/");
        dispatch(setUser(user));
      } else {
        history.push("/login");
        dispatch(clearUser());
      }
    });
  }, [dispatch, history])


  if (isLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh ' }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  } else {
    return (
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    );
  }
}

export default App;

