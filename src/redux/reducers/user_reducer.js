import UserApiService from "../../API/UserApi";

import {
    SET_USER_LOGIN,
    SET_USER_LOGIN_CHECK,
    SET_USER_LOGIN_ADD,
    SET_USER_LOGOUT
} from '../actions/types';

const userInfoDefault = {
    loginstate: false,
    userid: '',
    kakaoname: '',
    email: '',
    nickname: '',
    phone: '',
    pass: ''
};

export default function (state = userInfoDefault, action) {
    let copy = { ...state };
    switch (action.type) {
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
        case SET_USER_LOGIN_ADD:
            localStorage.setItem('loginstate', true);
            copy['nickname'] = action.payload['nickname'];
            copy['phone'] = action.payload['phone'];
            copy['email'] = action.payload['email'];
            copy['pass'] = action.payload['pass'];
            UserApiService.addUser(copy)
                .then(res => {
                    alert('SET_USER_LOGIN_ADD 성공')
                })
                .catch(err => {
                    alert('SET_USER_LOGIN_ADD 에러')
                    console.log('kakao user 등록 에러', err);
                });
            return copy;
        case SET_USER_LOGOUT:
            copy = userInfoDefault;
            return copy;
        default:
            return state;
    }
}
