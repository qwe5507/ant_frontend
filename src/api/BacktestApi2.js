import axios from 'axios';

const TEST_API_BASE_URL_BACK = "http://localhost:7000/api";
class BacktestApi2 {

    momenrequest(co) {
        return axios.post(TEST_API_BASE_URL_BACK+ "/moment", co);
    }

    rsirequest(co) {
        return axios.post(TEST_API_BASE_URL_BACK+ "/rsi", co);
    }

}

export default new BacktestApi2();