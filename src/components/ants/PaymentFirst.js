import React, {Component, useEffect} from "react"
import { useHistory, useParams } from 'react-router-dom';
import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon } from "atomize"
import PaymentApiService from "../../api/PaymentApi";

function PaymentFirst() {
    let history = useHistory();

    useEffect(() => {
       
        let userId = localStorage.getItem("userid");
         console.log(userId)
    
        PaymentApiService.conformSub(userId)
        .then( res => {
         if(res.data === 1){
            history.push('/PaymentSub');     
         }else{
            history.push('/Payment'); 
         }
         console.log(res.data);
          })
        .catch(err => {
          console.log('paySubscrip 에러', err);
          alert('구독여부 확인에 실패했습니다');
        });
        
        console.log("확인")
      
    }, []
    )
 
    return (
        <div>
        </div>
    )
}


export default PaymentFirst;


