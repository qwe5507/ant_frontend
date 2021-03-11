import axios from 'axios';

const TEST_API_BASE_URL = "http://localhost:8000/main";

class TestApi {

    indicatorRank(sortNews) {
        return axios.get(TEST_API_BASE_URL + '/indicatorRank/' + sortNews);
    }

    mainIndicatorCall(tableName) {
        return axios.get(TEST_API_BASE_URL + '/' + tableName);
    }

}

export default new TestApi();