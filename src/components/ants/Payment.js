import React, {useEffect, connect} from "react"
import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon } from "atomize"
import PaymentApiService from "../../api/PaymentApi";
import { useHistory, useParams } from 'react-router-dom';
import imgName from '../../images/payment1.jpg';
function Payment() {
    let history = useHistory();
    function onClickPayment() {
        const userCode = 'imp06727724';
    
        /* 2. 결제 데이터 정의하기 */
        const data = {
          pg: 'html5_inicis',                           // PG사
          pay_method: 'card',                           // 결제수단
          merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
          amount: 890,                                 // 결제금액
          name: '똑똑한 개미들 구독',                  // 주문명
          buyer_name: '똑똑한 개미들',                           // 구매자 이름
          buyer_tel: '01012341234',                     // 구매자 전화번호
          buyer_email: 'example@example',               // 구매자 이메일
          buyer_addr: '가산동 kosmo',                    // 구매자 주소
          buyer_postcode: '06018',                      // 구매자 우편번호
        };
    
        if (isReactNative()) {
          /* 5. 리액트 네이티브 환경에 대응하기 */
          const params = {
            userCode,                                   // 가맹점 식별코드
            data,                                       // 결제 데이터
            type: 'payment',                            // 결제와 본인인증 구분을 위한 필드
          };
          const paramsToString = JSON.stringify(params);
          window.ReactNativeWebView.postMessage(paramsToString);
        } else {
          /* 1. 가맹점 식별하기 */
          const { IMP } = window;
          IMP.init(userCode);
          /* 4. 결제 창 호출하기 */
          IMP.request_pay(data, callback);
        }
      }
    
      /* 3. 콜백 함수 정의하기 */
      function callback(response) {
        const {
          success,
          merchant_uid,
          error_msg,
    
        } = response;
    
        if (success) {
         // alert('결제 성공');
          let uId = localStorage.getItem("userid")
                                       
          let payment = {
              userId : uId
            }
            PaymentApiService.addPayment(payment)
          .then( res => {
          console.log("결제성공");
          })
          .catch(err => {
            console.log('savePayment 에러', err);
            alert('구독에 실패했습니다. 관리자에게 문의해주세요');
          });
      
          PaymentApiService.modifyPayment(payment)
          .then( res => {
              alert("구독을 축하드립니다! 백테스트를 체험해 볼까요?")
              history.push('/Backtest');
             
            })
            .catch(err => {
              console.log('modifyPayment 에러', err);
              alert('구독에 실패했습니다. 관리자에게 문의해주세요');
            });
        } else {
          alert(`결제 실패: ${error_msg}`);
        }
      }
     
      function isReactNative() {
        return false;
      }
    
    return (
        <div>
             <>
            <Div 
                tag="section" 
                p={{ t: { xs: "6rem", md: "10rem" } }}
            >
                <Container 
                    d="flex" 
                    flexDir="column" 
                    align="center">
                        <Text
                            tag="h1"
                            textWeight="800"
                            textAlign="center"
                            textSize="display2"
                            m={{ b: "1rem" }}
                            fontFamily='ko'
                        >
                            구독회원 등록
                        </Text>
                        <Text
                            tag="h2"
                            textWeight="800"
                            maxW="36rem"
                            textSize="subheader"
                            textAlign="center"  
                            m={{ b: "2.5rem" }}
                            fontFamily='ko'
                        >
                          저렴한 가격! ￦8,900 으로 백테스트 서비스를 이용해보세요
                        </Text>
          
                            <Button onClick={onClickPayment}
                                h="3rem"
                                w={{ xs: "100%", sm: "11rem" }}
                                bg="info700"
                                hoverBg="info600"
                                rounded="lg"                              
                                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                                <Text
                                    textSize="subheader"
                                    textWeight="800"
                                    fontFamily='ko'
                                >구독하기
                                </Text>
                            </Button>
                            <br/><br/>
                            <img src = {imgName} style={{opacity:0.5}}/>
                    </Container>
                  </Div>
        </>
        </div>
    )
}

export default Payment;
