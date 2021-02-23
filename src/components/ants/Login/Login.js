import React, { useEffect } from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import { useHistory, useParams } from 'react-router-dom';
import UserApiService from "../../../api/UserApi";

import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from '../../../redux/actions/user_action';


function Login() {
  const dispatch = useDispatch();
  let history = useHistory();

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('fb58ebd76f41eecb94267d2c08ceb73a');
  }

  let ids;

  useEffect(() => {
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function (authObj) {

        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            ids = res.id;
            var tempid = res.id;
            var tempkakaoname = res.properties.nickname;

            UserApiService.fetchUserByID(res.id)
              .then(res => {
                console.log(res.data)
                if (res.data === "신규회원") {
                  var userinfo = { loginstate: true, userid: tempid, username: tempkakaoname };
                  dispatch(setUserLogin(userinfo));
                  history.push('/Register');
                } else {
                  var userinfo = { loginstate: true, userid: tempid, username: tempkakaoname };
                  dispatch(setUserLogin(userinfo));
                  history.push('/');
                }
              })
              .catch(err => {
                alert('으아아악.')
                console.log('오이잉', err);
              });

            localStorage.setItem('userid', res.id);
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
