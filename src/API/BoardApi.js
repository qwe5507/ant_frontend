import axios from 'axios';

const Board_API_BASE_URL = "http://localhost:8000/board";

class BoardApiService {

    fetchUsers() {
        return axios.get(Board_API_BASE_URL);
    }

    // fetchUserByID(userID) {
    //     return axios.get(Board_API_BASE_URL + '/' + userID);
    // }

    // deleteUser(userID) {
    //     return axios.delete(Board_API_BASE_URL + '/' + userID);
    // }

    // addUser(user) {
    //     return axios.post(Board_API_BASE_URL, user);
    // }

    // editUser(user) {
    //     return axios.put(Board_API_BASE_URL + '/' + user.id, user)
    // }
 
}

export default new BoardApiService();