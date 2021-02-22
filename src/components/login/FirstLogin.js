import React, { useEffect } from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import axios from 'axios';
// import styled from 'styled-components';
// import KaKaoLogin from 'react-kakao-login';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UserApiService from "../../API/UserApi";

function FirstLogin(props) {
  let history = useHistory();


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
        >
          Don't have an account yet? <Anchor>Create New</Anchor>
        </Text>
        <Text
          m={{ b: "3rem" }}
          textAlign="center">


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

export default connect(userStateToProps)(FirstLogin)
