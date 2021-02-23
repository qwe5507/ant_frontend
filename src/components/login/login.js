import React, { useEffect } from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import axios from 'axios';
// import styled from 'styled-components';
// import KaKaoLogin from 'react-kakao-login';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UserApiService from "../../API/UserApi";

function Login(props) {
  let history = useHistory();

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('fb58ebd76f41eecb94267d2c08ceb73a');
  }

  useEffect(() => {

    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function (authObj) {

        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            // alert(JSON.stringify(res)); //<---- kakao.api.request 에서 불러온 결과값 json형태로 출력
            // alert(JSON.stringify(authObj)); //<----Kakao.Auth.createLoginButton에서 불러온 결과값 json형태로 출력
            // console.log('id : ',res.id);//<---- 콘솔 로그에 id 정보 출력(id는 res안에 있기 때문에  res.id 로 불러온다)
            //console.log(res.kaccount_email);//<---- 콘솔 로그에 email 정보 출력 (어딨는지 알겠죠?)
            // console.log(res.kakao_account);
            // console.log(res.kakao_account['email']);
            // console.log(res.properties);
            // console.log(res.properties['nickname']);//<---- 콘솔 로그에 닉네임 출력(properties에 있는 nickname 접근 
            // console.log(res.properties.nickname ) // 으로도 접근 가능
            // console.log('토큰1'+ authObj.access_token);//<---- 콘솔 로그에 토큰값 출력
            // console.log('토근2'+ window.Kakao.Auth.getAccessToken());
            // console.log(res);

            UserApiService.fetchUserByID(res.id)
            .then( res => {
                // alert('호잇')
                console.log(res.data)
                if(res.data === "신규회원"){
                  history.push('/FirstLogin');
                }else{
                  history.push('/');
                }

              })
              .catch(err => {
                alert('등록실패.')
                console.log('-- 카카오 로그인 유저등록 API요청 실패 ', err);

              });

            localStorage.setItem('userid', res.id);
            localStorage.setItem('username', res.properties['nickname']);
            var email = res.kakao_account['email']
            if(email === undefined && typeof emailtemp == "undefined"){
              email = ""
            }
            props.dispatch({ type: 'login', payload: { loginstate: true, userid: res.id, username: res.properties['nickname'], useremail: email } })
          }
        })
      },
      fail: function (err) {
        alert(JSON.stringify(err));
        console.log('-- 카카오 로그인 실패 ', err);
      }
    });

  }
    , []);

  return (
    <Div
      d="flex"
      flexDir="column"
      border="1px solid"
      borderColor="gray200"
      w={{ xs: "100%", md: "30.5rem" }}
      maxW="100%"
      pos={{ xs: "static" }}
      m={{ t: "13rem", l: "33%" }}
      align="center"
      rounded="xl"
      h={{ lg: "23rem" }}
      bg="white"
      shadow="4"
      p="2rem"
    >
      <Div flexGrow="1">
        <Text
          textAlign="center"
          textSize="title"
          m={{ t: "3rem", b: "0.5rem" }}
          textWeight="500"
          fontFamily="secondary"
        >
          HELLO Smart Ants.
      </Text>
        <Text
          textColor="light"
          textSize="caption"
          m={{ b: "4rem" }}
          textAlign="center"
        >
          Don't have an account yet? <Anchor>Create New</Anchor>
        </Text>
        <Text
          m={{ b: "3rem" }}
          textAlign="center">
          <a id="kakao-login-btn"></a>
        </Text>
        <Text
          textColor="#999"
          textSize="caption"
          m={{ b: "0.5rem" }}
          textAlign="center"
          textWeight="500"
        >
          카카오계정으로 간편하고 안전하게 로그인(회원가입)할 수 있습니다.
      </Text>
        <Text
          textColor="#999"
          textSize="caption"
          m={{ b: "4rem" }}
          textAlign="left"
          textWeight="500"
        >
          카카오계정이 기억나지 않으시나요?
          <Text
            // textColor="#999"
            textSize="caption"
            // m={{ b: "1rem" }}
            textAlign="right"
          // textWeight="500"
          >
            <Anchor
              href="https://accounts.kakao.com/weblogin/find_password?continue=https://accounts.kakao.com/weblogin/account/info"
              target="_blank"
              d="block"
              m={{ b: "4rem" }}
            >확인방법
              </Anchor>
          </Text>
        </Text>

      </Div>
    </Div>
  )
}

function userStateToProps(state) {
  return {
    userinfo: state.reducer
  }
}

export default connect(userStateToProps)(Login)
