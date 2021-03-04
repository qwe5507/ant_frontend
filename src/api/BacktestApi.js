import axios from 'axios';

// const TEST_API_BASE_URL = "http://localhost:7000/backtest";
const TEST_API_BASE_URL = "http://15.165.161.92:7000/backtest";

class BacktestApi {

    check() {
        return axios.get(TEST_API_BASE_URL);
    }

    request(co) {
        return axios.post(TEST_API_BASE_URL, co);
    }

}

export default new BacktestApi();