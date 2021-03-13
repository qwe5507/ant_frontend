import axios from 'axios';

const DECLARE_API_BASE_URL = "http://localhost:8000/declare";

class DeclareApiService {

    // fetchComments() {
    //     return axios.get(Comment_API_BASE_URL);
    // }
    // fetchCommentByID(commentID) {
    //     return axios.get(Comment_API_BASE_URL + '/' + commentID);
    // }
    // fetchCommentsByBoardID(boardID) {
    //     return axios.get(Comment_API_BASE_URL + '/boardcomments/' + boardID);
    // }
    // editComment(comment) {
    //     return axios.put(Comment_API_BASE_URL + '/' + comment.comment_id, comment)
    // }
    addDeclare(declare) {
        return axios.post(DECLARE_API_BASE_URL, declare);
    }
    // deleteComment(commentID) {
    //     return axios.delete(Comment_API_BASE_URL + '/' + commentID);
    // }
    fetchDeclaredByID(userid) {
        return axios.get(DECLARE_API_BASE_URL + '/' + userid);
    }
}

export default new DeclareApiService();