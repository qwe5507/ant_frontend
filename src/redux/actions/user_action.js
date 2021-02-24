import {
    SET_USER_NEW,
    SET_USER_LOGIN,
    SET_USER_LOGIN_CHECK,
    SET_USER_LOGIN_ADD,
    SET_USER_LOGOUT,
    SET_USER,               // Chat
    CLEAR_USER,             // Chat
    SET_PHOTO_URL           // Chat
} from './types';

export function setUserNew(userinfo) {
    return {
        type: SET_USER_NEW,
        payload: userinfo
    }
}

export function setUserLogin(userinfo) {
    return {
        type: SET_USER_LOGIN,
        payload: userinfo
    }
}

export function setUserLoginCheck(userinfo) {
    return {
        type: SET_USER_LOGIN_CHECK,
        payload: userinfo
    }
}

export function setUserLoginAdd(userinfo) {
    return {
        type: SET_USER_LOGIN_ADD,
        payload: userinfo
    }
}

export function setUserLogout() {
    return {
        type: SET_USER_LOGOUT
    }
}

export function setUser(user) {     // Chat : Firebase Object
    return {
        type: SET_USER,
        payload: user
    }
}

export function clearUser() {       // Chat
    return {
        type: CLEAR_USER
    }
}

export function setPhotoURL(photoURL) {     // Chat
    return  {
        type: SET_PHOTO_URL,
        payload: photoURL
    }
}