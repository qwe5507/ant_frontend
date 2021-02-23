import UserApiService from "../../api/UserApi";
import firebase from "../../firebase";
import md5 from "md5";

import {
    SET_USER_LOGIN,
    SET_USER_LOGIN_CHECK,
    SET_USER_LOGIN_ADD,
    SET_USER_LOGOUT,
    SET_USER,               // Chat
    CLEAR_USER,             // Chat
    SET_PHOTO_URL           // Chat
} from '../actions/types';

const userInfoDefault = {
    loginstate: false,
    userid: '',
    kakaoname: '',
    email: '',
    nickname: '',
    phone: '',
    pass: '',
    currentUser: null,
    isLoading: true
};

export default function (state = userInfoDefault, action) {

    let copy = { ...state };

    switch (action.type) {
        // userinfo
        case SET_USER_LOGIN:
            localStorage.setItem('loginstate', true);
            copy['loginstate'] = action.payload['loginstate'];
            copy['userid'] = action.payload['userid'];
            copy['kakaoname'] = action.payload['username'];
            copy['email'] = action.payload['useremail'];
            copy['nickname'] = action.payload['nickname'];
            return copy;
        case SET_USER_LOGIN_CHECK:
            copy['loginstate'] = action.payload['loginstate'];
            copy['userid'] = action.payload['userid'];
            copy['nickname'] = action.payload['nickname'];
            return copy;

        // 회원등록
        case SET_USER_LOGIN_ADD:
            localStorage.setItem('loginstate', true);
            copy['nickname'] = action.payload['nickname'];
            copy['phone'] = action.payload['phone'];
            copy['email'] = action.payload['email'];
            copy['pass'] = action.payload['pass'];

            // Backend DB 저장
            UserApiService.addUser(copy)
                .then(res => {
                    console.log('SET_USER_LOGIN_ADD 성공')
                })
                .catch(err => {
                    console.log('SET_USER_LOGIN_ADD 에러', err);
                });

            // Firebase RegisterPage 대체
            try {
                let createdUser = firebase.auth().createUserWithEmailAndPassword(action.payload['email'], action.payload['pass'])
                    .then((user) => {
                        console.log('createdUser', user)
                    })
                    .catch((error) => {
                        console.log('Firebase Register Error', error.code);
                        console.log('Firebase Register Error', error.message);
                    });

                // Firebase auth 서비스에서 생성한 유저에 추가 정보 입력
                createdUser.user.updateProfile({
                    displayName: action.payload['nickname'],
                    photoURL: `http://gravatar.com/avatar/${md5(
                        createdUser.user.email
                    )}?d=identicon`
                })

                // Firebase 데이터 베이스에서 
                firebase.database().ref("users").child(createdUser.user.uid).set({
                    name: createdUser.user.displayName,
                    image: createdUser.user.photoURL
                });
            } catch (error) {
                console.log('Firebase RegisterPage 대체 에러', error);
            }
            return copy;
        case SET_USER_LOGOUT:
            copy = userInfoDefault;
            return copy;

        // Chat
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false
            }
        case CLEAR_USER:
            return {
                ...state,
                currentUser: null,
                isLoading: false

            }
        case SET_PHOTO_URL:
            return {
                ...state,
                currentUser: { ...state.currentUser, photoURL: action.payload },
                isLoading: false
            }

        default:
            return state;
    }
}
