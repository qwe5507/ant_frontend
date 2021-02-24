import React, { useState, useEffect } from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import { useHistory, useParams } from 'react-router-dom';
import UserApiService from "../../../api/UserApi";

import { useDispatch } from 'react-redux';
import { setUserNew, setUserLogin } from '../../../redux/actions/user_action';

import firebase from "../../../firebase";

function Login() {
  const dispatch = useDispatch();
  let history = useHistory();

  const [errorsFromSubmit, setErrorsFromSubmit] = useState("")  // Firebase 로그인 실패 시 에러메시지
  const [loading, setLoading] = useState(false)                 // Firebase 로그인 시도 중 버튼 비활성화

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('fb58ebd76f41eecb94267d2c08ceb73a');
  }

  let ids;

  useEffect(() => {

    // 카카오 로그인 버튼
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function (authObj) {

        // 카카오 정보 요청
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            ids = res.id;
            var tempkakaoname = res.properties.nickname;

            // 카카오 아이디로 DB 정보 요청
            UserApiService.fetchUserByID(res.id)
              .then(res => {

                // 신규회원
                if (res.data === "신규회원") {
                  var userinfo = { userid: ids, username: tempkakaoname }; // 신규회원은 등록 전까지 로그인한 상태가 아님
                  dispatch(setUserNew(userinfo));
                  history.push('/Register');
                }

                // 기존회원
                else {
                  var userinfo = { loginstate: true, userid: ids, username: tempkakaoname, nickname: res.data.nickname };
                  dispatch(setUserLogin(userinfo));
                  localStorage.setItem('userid', ids);

                  firebaseLogin(res);
                }
              })
              .catch(err => {
                alert('으아아악.')
                console.log('오이잉', err);
              });

            localStorage.setItem('userid', ids); // 회원 등록 완료 후 Local Storage에 userid 저장

            var email = res.kakao_account['email']
            if (email === undefined && typeof emailtemp == "undefined") {
              email = ""
            }
          }
        })

      },
      fail: function (err) {
        alert(JSON.stringify(err));
      }
    });

  }
    , []);

  // 기존회원 로그인 시 Firebase 채팅 서비스 동시 로그인
  async function firebaseLogin(res) {
    try {
      setLoading(true)
      let SignedInUser = await firebase
        .auth()  // auth 서비스 접근 
        .signInWithEmailAndPassword(res.data.email, res.data.pass);
      console.log('SignedInUser', SignedInUser);
      history.push('/');
    } catch (error) {
      setErrorsFromSubmit(error.message)
      setLoading(false)
      setTimeout(() => {
        setErrorsFromSubmit("")
      }, 5000);
    }
  }

  return (
    <Div
      d="flex"
      flexDir="column"
      border="1px solid"
      borderColor="gray200"
      w={{ xs: "100%", md: "30.5rem" }}
      maxW="100%"
      pos={{ xs: "static" }}
      // m={{ xs: "50%", md: "12rem" }}
      m={{ t: "13rem", l: "33%" }}
      align="center"

      // right="50%"
      // top="50%"
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
          fontFamily="ko"
        >
          계정이 없으신가요? <Anchor>계정 만들기</Anchor>
        </Text>
        <Text
          m={{ b: "3rem" }}
          textAlign="center">
          <a id="kakao-login-btn"></a>
          {errorsFromSubmit &&
            <p>{errorsFromSubmit}</p>
          }
          <br></br>

        </Text>
        <Text
          textColor="#999"
          textSize="caption"
          m={{ b: "0.5rem" }}
          textAlign="center"
          textWeight="500"
          fontFamily="ko"
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

export default Login;
