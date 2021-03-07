import UserApiService from "../../api/UserApi";
// import firebase from "../../firebase";
// import md5 from "md5";

import {
    SET_USER_NEW,
    SET_USER_LOGIN,
    SET_USER_LOGIN_CHECK,
    SET_USER_LOGIN_ADD,
    SET_USER_LOGOUT,
    SET_USER,               // Chat
    CLEAR_USER,             // Chat
    SET_PHOTO_URL,          // Chat
    SET_SEARCHWORD,          // 검색어
    SET_USER_SAVED_BOARDS,   // 커뮤니티 사용자 저장 글
    SET_USER_LIKED_COMMENTS  // 커뮤니티 사용자 좋아요한 댓글
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
    isLoading: true,
    searchWord: '',
    savedBoards: '',
    likedComments: ''
};

export default function (state = userInfoDefault, action) {

    let copy = { ...state };

    switch (action.type) {
        
        // 신규회원
        case SET_USER_NEW:
            copy['userid'] = action.payload['userid'];
            copy['kakaoname'] = action.payload['username'];
            return copy;
        
        // 회원 로그인
        case SET_USER_LOGIN:
            localStorage.setItem('loginstate', true);
            copy['loginstate'] = action.payload['loginstate'];
            copy['userid'] = action.payload['userid'];
            copy['kakaoname'] = action.payload['username'];
            copy['email'] = action.payload['useremail'];
            copy['nickname'] = action.payload['nickname'];
            return copy;

        // 로그인 여부 확인
        case SET_USER_LOGIN_CHECK:
            copy['loginstate'] = action.payload['loginstate'];
            copy['userid'] = action.payload['userid'];
            copy['nickname'] = action.payload['nickname'];
            return copy;

        // 회원등록
        case SET_USER_LOGIN_ADD:
            localStorage.setItem('loginstate', true);
            copy['loginstate'] = action.payload['loginstate'];
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

        case SET_SEARCHWORD:
            copy['searchWord'] = action.payload['searchWord'];
            return copy;
        
        case SET_USER_SAVED_BOARDS:
            copy['savedBoards'] =  action.payload['savedBoards'];
            console.log(copy['savedBoards']);
            return copy;
        case SET_USER_LIKED_COMMENTS:
                copy['likedComments'] =  action.payload['likedComments'];
                console.log(copy['likedComments']);
                return copy;
        default:
            return state;
    }
}
