import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8000/indicator";
const TEST_API_BASE_URL_DJANGO = "http://localhost:7000/api";

class IndApiService {

    //국외 환율 정보 리스트
    exeForeignList() {
         return axios.get(USER_API_BASE_URL + '/exeForeign');
     }
    
    //국내 환율 정보 리스트
    exeKorList() {
        return axios.get(USER_API_BASE_URL + '/exeKorList');
    }

    //목록페이지 차트_EURUSD
    labelDalAllList() {
        return axios.get(USER_API_BASE_URL  + '/labelDalAllList');
    }

    //1일의 EURUSD 수치
     labelDalOneList() {
        return axios.get(USER_API_BASE_URL + '/labelDalOneList');
    }

    //차트데이터-국내환율
    chartIndi(num) {
        num = parseInt(num);
        return axios.get(USER_API_BASE_URL+ '/chart' + '/' + num);
    }

    //차트데이터-해외환율
    chartIndiExeFor(symbol, num) {
        num = parseInt(num);
        return axios.get(USER_API_BASE_URL+ '/chart'  + '/' + symbol + '/' + num);
    }

   //지표-유형1(국제금,WTI)
   indicators1(tableName, num) {
    num = parseInt(num);
    return axios.get(USER_API_BASE_URL+ '/indi1'  + '/' + tableName + '/' + num);
    }

    //지표-유형2(미10년,미2년,달러인덱스,비트코인)
    indicators2(tableName, num) {
    num = parseInt(num);
    return axios.get(USER_API_BASE_URL+ '/indi2'  + '/' + tableName + '/' + num);
    }

    //상관관계 절대값으로 최상위값 표현
    corrAbs(indi, num) {
    num = parseInt(num);
    return axios.get(USER_API_BASE_URL + '/corrAbs'  + '/' + indi + '/' + num);
    }

    corrAbs2(co) {
    return axios.post(TEST_API_BASE_URL_DJANGO+ "/requestCorr2", co);
    }

    corrExe(co) {
        
        return axios.post(TEST_API_BASE_URL_DJANGO+ "/corrExe", co);
    }

    corr1(co) {
       
        return axios.post(TEST_API_BASE_URL_DJANGO+ "/corr1", co);
    }

    corr2(co) {
       
        return axios.post(TEST_API_BASE_URL_DJANGO+ "/corr2", co);
    }

    //댓글-(input)
    insertIndicator(comm) {
        return axios.post(USER_API_BASE_URL + "/input", comm);
    }

   // 댓글(리스트)
    firstCommentsByIndID(symbolname) {
        return axios.get(USER_API_BASE_URL +  "/comLis"  + '/' + symbolname);
   }

   // 댓글(리스트)
   fetchCommentsByIndID(symbolname, num) {
    return axios.get(USER_API_BASE_URL +  "/comList2"  + '/' + symbolname + '/' + num);
    }

    //댓글 삭제
    deleteComment(comment_id) {
        console.log(comment_id)
        return axios.delete(USER_API_BASE_URL +  "/del" + '/' + comment_id);
     }

}

export default new IndApiService();