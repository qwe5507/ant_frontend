import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8000/news";
//const USER_API_BASE_URL = "http://localhost:8000/news";

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

    searchSort(search){
        return axios.get(USER_API_BASE_URL + '/searchmatchphrasesort/', { params : { id : search } });
    }
    
    searchmatchphrasedate(date, search){
        return axios.get(USER_API_BASE_URL + '/searchmatchphrasedate/', { params : { id : search, id2 : date } });
    }

    searchmatchphrase(search){
        return axios.get(USER_API_BASE_URL + '/searchmatchphrase/', { params : { id : search } })
    }

    searchmatchphrasesort(search){
        return axios.get(USER_API_BASE_URL + '/searchmatchphrasesort/', { params : { id : search } })
    }
}

export default new NewsApi();