import {
    SET_USER_LOGIN,
    SET_USER_LOGIN_CHECK,
    SET_USER_LOGIN_ADD,
    SET_USER_LOGOUT
} from './types';

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