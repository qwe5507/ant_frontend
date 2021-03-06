import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8000/user";

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
}

export default new UserApiService();