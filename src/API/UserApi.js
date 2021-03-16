import axios from 'axios';

const USER_API_BASE_URL = "http://15.165.161.92:8000/user";
const USER_API_BASE_URL_PROFILE = "http://15.165.161.92:8000/user/profile";
const USER_API_BASE_URL_PASSWORD = "http://15.165.161.92:8000/user/password";
const USER_API_BASE_URL_PROFILE_BOARD = "http://15.165.161.92:8000/user/board";

class UserApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserByID(userID) {
        return axios.get(USER_API_BASE_URL + '/' + userID);
    }

    deleteUser(userID) {
        return axios.delete(USER_API_BASE_URL + '/' + userID);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user)
    }
    editUserLikedComment(loginid,comment_id) {
        return axios.put(USER_API_BASE_URL + '/UserLikedComment/' + loginid + '/' + comment_id)
    }
    fetchUserLikedCommentList(userID) {
        return axios.get(USER_API_BASE_URL + '/UserLikedCommentList/' + userID);
    }
    fetchUserLikedBoardList(userID) {
        return axios.get(USER_API_BASE_URL + '/UserLikedBoardList/' + userID);
    }

    //마이페이지-개인정보 보여주기
    profileShow(id){
        return axios.get(USER_API_BASE_URL_PROFILE + '/' + id);
    }

    //마이페이지-개인정보 수정
    profileEdit(user){
        return axios.put(USER_API_BASE_URL_PROFILE + '/' + + user.userid, user);
    }

    //마이페이지-나의 글 3개-제목보기
    boardShow(userid) {
        userid = parseInt(userid);
        return axios.get(USER_API_BASE_URL_PROFILE_BOARD + '/' + userid);
    }

    //마이페이지-비밀번호 수정
    passwordEdit(user){
        return axios.put(USER_API_BASE_URL_PASSWORD + '/' + + user.userid, user);
    }
}

export default new UserApiService();