import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8000/news";

class NewsApi {

    selectByNewsId(newsId) {
        return axios.get(USER_API_BASE_URL + '/' + newsId);
    }
 
}

export default new NewsApi();