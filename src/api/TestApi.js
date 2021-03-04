import axios from 'axios';

const TEST_API_BASE_URL = "http://localhost:8000/main";

class TestApi {

    indicatorRank() {
        return axios.get(TEST_API_BASE_URL + '/indicatorRank');
    }

    mainIndicatorCall(tableName) {
        return axios.get(TEST_API_BASE_URL + '/' + tableName);
    }

}

export default new TestApi();