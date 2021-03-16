import axios from 'axios';

// const USER_API_BASE_URL = "http://15.165.161.92:8000/news";
const USER_API_BASE_URL = "http://localhost:8000/news";

class NewsApi {

    selectByNewsId(newsId) {
        return axios.get(USER_API_BASE_URL + '/' + newsId);
    }
 
    selectKeywordByNewsId(searchResult) {
        return axios.get(USER_API_BASE_URL+ '/keywords/' + searchResult);
    }

    searchtodaynews() {
        return axios.get(USER_API_BASE_URL+ '/searchtodaynews');
    }

    selectKeywordByUserId(userId){
        return axios.get(USER_API_BASE_URL + '/selectkeywords/' + userId);
    }

    deleteKeywordByUserId(list){
        return axios.put(USER_API_BASE_URL + '/deletekeywords/' + list.userId +'/'+ list.keyword);
    }

    updateKeywordByUserId(list){
        return axios.put(USER_API_BASE_URL + '/updatekeywords/' + list.userId +'/'+ list.keyword);
    }
}

export default new NewsApi();