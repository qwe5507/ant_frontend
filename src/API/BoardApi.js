import axios from 'axios';

// const Board_API_BASE_URL = "http://15.165.161.92:8000/board";
const Board_API_BASE_URL = "http://192.168.0.56:8000/board";

class BoardApiService {

    fetchBoards() {
        return axios.get(Board_API_BASE_URL);
    }
    fetchBoardsLiked() {
        return axios.get(Board_API_BASE_URL+'/likedorder');
    }
    fetchBoardsSave(){
        return axios.get(Board_API_BASE_URL+'/save');
    }

    fetchBoardByID(boardID) {
        return axios.get(Board_API_BASE_URL + '/' + boardID);
    }
    deleteBoard(boardID) {
        return axios.delete(Board_API_BASE_URL + '/' + boardID);
    }
    editBoard(board) {
        return axios.put(Board_API_BASE_URL + '/' + board.board_id, board)
    }
    addBoard(board) {
        return axios.post(Board_API_BASE_URL, board);
    }
    addImage(board) {
        return axios.post(Board_API_BASE_URL+'/image', board);
    }
        
    fetchLikeUserBoardCheck(UserLikeBoard) {
        return axios.get(Board_API_BASE_URL +"/"+UserLikeBoard.board_id+"/"+UserLikeBoard.userid+ '/likecheck');
    }

    addLikedUserBoard(UserLikeBoard){
        return axios.post(Board_API_BASE_URL + "/like", UserLikeBoard);
    }
    deleteLikedUserBoard(UserLikeBoard) {
        return axios.delete(Board_API_BASE_URL + '/like'+"/"+UserLikeBoard.board_id+"/"+UserLikeBoard.userid);
    }

    fetchSavedUserBoardCheck(userid) {
        return axios.get(Board_API_BASE_URL + '/savedboardCheck'+"/"+userid);
    }
    addSaveddUserBoard(UserSavedBoard){
        return axios.post(Board_API_BASE_URL + "/saved", UserSavedBoard);
    }

    deleteSaveddUserBoard(UserSavedBoard){
        return axios.delete(Board_API_BASE_URL + "/saved/"+UserSavedBoard.board_id+"/"+UserSavedBoard.userid);
    }


    fetchSavedUserBoard(userid) {
        return axios.get(Board_API_BASE_URL + '/savedboard'+"/"+userid);
    }
    fetchSavedUserBoardLiked(userid) {
        return axios.get(Board_API_BASE_URL + '/savedboardLiked'+"/"+userid);
    }
}

export default new BoardApiService();