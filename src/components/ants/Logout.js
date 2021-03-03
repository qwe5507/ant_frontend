import React, { useEffect } from "react"

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUserLogout } from '../../redux/actions/user_action';

import firebase from "../../firebase";

function Logout() {
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.Auth.logout(() => {
                localStorage.removeItem('loginstate');
                localStorage.removeItem('userid');
                localStorage.removeItem('username');

                dispatch(setUserLogout());

                // Firebase 로그아웃
                firebase.auth().signOut().then(() => {
                    console.log('Firebase Logout 완료');
                }).catch((error) => {
                    console.log('Firebase Logout 에러', error.message);
                });

                history.push('/');
            });
        }
    }, []);

    return (
        <div></div>
    )
}

export default Logout;